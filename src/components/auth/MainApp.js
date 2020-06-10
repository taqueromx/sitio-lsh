import React from 'react'

import { Column, Row } from 'simple-flexbox'
import { StyleSheet, css } from 'aphrodite'

import SidebarComponent from './sidebar/SidebarComponent'
import HeaderComponent from './header/HeaderComponent'

import ProjectDisplay from './project-display/project-display-wrapper.component'
import { PostDisplay } from './post-display/postWrapper.component'

import SelectView from './SelectView'

const firebase = require('firebase');
const db = firebase.firestore();

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
        let user = firebase.auth().currentUser;
        let userData;

        db.collection('usuarios').where('uid', '==', user.uid)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let userBodyData = doc.data();
                userData = {userDataId:doc.id,userData:userBodyData};
            });
        })
        .then(() => {
            this.setState({
                user : {...user,...userData}
            });
            console.log(this.state.user);
        })
        .catch(function(error) {
            console.log('Error getting documents: ', error);
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

                        <SelectView 
                            selectedItem={this.state.selectedItem}
                            user={this.state.user}
                            />

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