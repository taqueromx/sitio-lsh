import React from 'react'

import { Column, Row } from 'simple-flexbox'
import { StyleSheet, css } from 'aphrodite'

import SidebarComponent from './sidebar/SidebarComponent'
import HeaderComponent from './header/HeaderComponent'

import ProjectDisplay from './project-display/project-display-wrapper.component'
import { PostDisplay } from './post-display/postWrapper.component'

import SelectView from './SelectView'

const firebase = require('firebase');

const styles = StyleSheet.create({
    container: {
        height: '100%',
        minHeight: '100vh'
    },
    content: {
        marginTop: 54
    },
    mainBlock: {
        backgroundColor: '#F7F8FC',
        padding: 30
    }
})

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            selectedItem : 'Resumen',
            user : {}
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        const user = firebase.auth().currentUser;
        this.setState({
            user : user
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();
    
    render() {
        const { selectedItem, user } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem}
                    onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent 
                        title={selectedItem} 
                        user={user}
                        />
                    <div className={css(styles.content)}>

                        <SelectView menu={this.state.selectedItem}/>

                    </div>
                </Column>
            </Row>
        )
    }
}

export default App

    // switch(userType) {
    //     case 'admin':
    //       return <AdminDashboard />
    //     case 'guia':
    //       return <GuiaDashboard />
    //     default: //el default es guia
    //         return <LiderDashboard />
    //   }