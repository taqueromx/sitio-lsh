import React from 'react'

import { Column, Row } from 'simple-flexbox'
import { StyleSheet, css } from 'aphrodite'
import LogoComponent from './LogoComponent'
import MenuItemComponent from './MenuItemComponent'

import IconOverview from '../../../assets/sidebar-icons/icon-overview.js'
import IconTickets from '../../../assets/sidebar-icons/icon-tickets.js'
import IconIdeas from '../../../assets/sidebar-icons/icon-ideas.js'
import IconContacts from '../../../assets/sidebar-icons/icon-contacts'
import IconAgents from '../../../assets/sidebar-icons/icon-agents'
import IconArticles from '../../../assets/sidebar-icons/icon-articles'
import IconSettings from '../../../assets/sidebar-icons/icon-settings'
import IconSubscription from '../../../assets/sidebar-icons/icon-subscription'
import IconBurger from '../../../assets/icon-burger'

import { useUser } from '../../../context/user-context'

const styles = StyleSheet.create({
    burgerIcon: {
        cursor: 'pointer',
        position: 'absolute',
        left: 24,
        top: 34
    },
    container: {
        backgroundColor: '#363740',
        width: 255,
        paddingTop: 32,
        // height: 'calc(100% - 32px)'
    },
    containerMobile: {
        transition: 'left 0.5s, right 0.5s',
        position: 'absolute',
        width: 255,
        height: '100%',
        // height: 'calc(100% - 32px)',
        zIndex: 901
    },
    mainContainer: {
        height: '100%',
        minHeight: '100vh'
    },
    mainContainerMobile: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        top: 0,
        left: 0
    },
    menuItemList: {
        marginTop: 52
    },
    outsideLayer: {
        position: 'absolute',
        width: '100vw',
        minWidth: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.50)',
        zIndex: 900
    },
    separator: {
        borderTop: '1px solid #DFE0EB',
        marginTop: 16,
        marginBottom: 16,
        opacity: 0.06
    },
    hide: {
        left: -255
    },
    show: {
        left: 0
    }
})

const firebase = require('firebase');
const db = firebase.firestore();



// Hay que reemplazar esto con el usuario obtenido de la db
const user = 'admin'

let userData = {
    userData: {
        tipoUsuario: 'lider'
    }
}
class SidebarComponent extends React.Component {
    constructor(){
        super();

        this.state = {
            user : {},
            expanded: false
        }
    }

    componentDidMount() {
        let user = firebase.auth().currentUser;



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

        })
        .catch(function(error) {
            console.log('Error getting documents: ', error);
        });

        
        
    }
    
    

    

    // userType = () => {
    //     db.collection('usuarios').where('email', '==', email)
    //     .get()
    //     .then(function(querySnapshot) {
    //         querySnapshot.forEach(function(doc) {
    //             user = doc.data();
    //         });
    //     }).then( () =>{
    //         //history.push('/dashboard')
    //         console.log('qp', user)
    //         user = user.tipoUsuario
    //     })
    //     .catch(function(error) {
    //         console.log('Error getting doccuments: ', error);
    //     })
    // }




    onItemClicked = (item) => {
        this.setState({ expanded: false });
        return this.props.onChange(item);
    }

    isMobile = () => window.innerWidth <= 768;

    toggleMenu = () => this.setState(prevState => ({ expanded: !prevState.expanded }));

    renderBurger = () => {
        return <div onClick={this.toggleMenu} className={css(styles.burgerIcon)}>
            <IconBurger />
        </div>
    }
    
  

    basic = () => {
        return (
        <>
        <MenuItemComponent
            title="Resumen" icon={IconOverview}
            onClick={() => this.onItemClicked("Resumen")}
            active={this.props.selectedItem === ("Resumen")}
        />
        <MenuItemComponent
            title="Proyectos" icon={IconTickets}
            onClick={() => this.onItemClicked('Proyectos')}
            active={this.props.selectedItem === 'Proyectos'}
        />
        </>)
    }

    admin = () => {
        return (
            <>
            <MenuItemComponent
                title="Resumen" icon={IconOverview}
                onClick={() => this.onItemClicked("Resumen")}
                active={this.props.selectedItem === ("Resumen")}
            />
            <MenuItemComponent
                title="Ver Usuarios" icon={IconTickets}
                onClick={() => this.onItemClicked('Ver Usuarios')}
                active={this.props.selectedItem === 'Ver Usuarios'}
            />
            <MenuItemComponent
                title="Todos los Proyectos" icon={IconContacts}
                onClick={() => this.onItemClicked('Todos los Proyectos')}
                active={this.props.selectedItem === 'Todos los Proyectos'} />
            <MenuItemComponent
                title="Registrar Proyectos" icon={IconContacts}
                onClick={() => this.onItemClicked('Registrar Proyectos')}
                active={this.props.selectedItem === 'Registrar Proyectos'} />
            <MenuItemComponent
                title="Registrar Líder" icon={IconIdeas}
                onClick={() => this.onItemClicked('Registrar Líder')}
                active={this.props.selectedItem === 'Registrar Líder'} />
            <MenuItemComponent
                title="Registrar Guía" icon={IconIdeas}
                onClick={() => this.onItemClicked('Registrar Guía')}
                active={this.props.selectedItem === 'Registrar Guía'} />
            <MenuItemComponent
                title="Registrar Admin" icon={IconIdeas}
                onClick={() => this.onItemClicked('Registrar Admin')}
                active={this.props.selectedItem === 'Registrar Admin'} />
            </>)
    }


    render() {
        const { expanded } = this.state;
        const isMobile = this.isMobile();
        return (
            <div style={{ position: 'relative' }}>
                <Row className={css(styles.mainContainer)} breakpoints={{ 768: css(styles.mainContainerMobile) }}>
                    {(isMobile && !expanded) && this.renderBurger()}
                    <Column className={css(styles.container)} breakpoints={{ 768: css(styles.containerMobile, expanded ? styles.show : styles.hide) }}>
                        <LogoComponent />
                        <Column className={css(styles.menuItemList)}>

                            { userData.userData.tipoUsuario === 'admin' ? this.admin() : this.basic()}

                            <div className={css(styles.separator)}></div>
                            <MenuItemComponent
                                title="Configuración" icon={IconSettings}
                                onClick={() => this.onItemClicked('Settings')}
                                active={this.props.selectedItem === 'Settings'} />
                            <MenuItemComponent
                                title="Cerrar Sesión" icon={IconSubscription}
                                // onClick={handleSignOut()}
                                onClick={() => this.onItemClicked('SignOut')}
                                active={this.props.selectedItem === 'SignOut'} />
                        </Column>
                    </Column>
                    {isMobile && expanded && <div className={css(styles.outsideLayer)} onClick={this.toggleMenu}></div>}
                </Row>
            </div>
        );
    };
}

export default SidebarComponent