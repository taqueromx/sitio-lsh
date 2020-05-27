import React from 'react'

import { Column, Row } from 'simple-flexbox'
import { StyleSheet, css } from 'aphrodite'

import SidebarComponent from './sidebar/SidebarComponent'
import HeaderComponent from './header/HeaderComponent'

import ProjectDisplay from './project-display/project-display-wrapper.component'


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
            selectedItem : 'Overview'
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    resize = () => this.forceUpdate();
    
    render() {
        const { selectedItem } = this.state;
        return (
            <Row className={css(styles.container)}>
                <SidebarComponent selectedItem={selectedItem}
                    onChange={(selectedItem) => this.setState({ selectedItem })} />
                <Column flexGrow={1} className={css(styles.mainBlock)}>
                    <HeaderComponent title={selectedItem} />
                    <div className={css(styles.content)}>
                        <ProjectDisplay />
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