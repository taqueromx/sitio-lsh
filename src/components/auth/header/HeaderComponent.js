import React, {Component} from 'react';

import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';

import IconSearch from '../../../assets/sidebar-icons/icon-search';
import IconBellNew from '../../../assets/sidebar-icons/icon-bell-new';

const styles = StyleSheet.create({
    avatar: {
        height: 35,
        width: 35,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2,
        '@media (max-width: 768px)': {
            display: 'none' // <--- don't show the name on mobile
        }
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 12, // <--- less separation on mobile
            marginRight: 12
        }
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3,
        '@media (max-width: 768px)': {
            marginLeft: 36 //<--- to avoid overlapping with Burger button
        },
        '@media (max-width: 468px)': {
            fontSize: 20 //<--- new fontSize for small devices. 
        }
    },
    iconStyles: {
        cursor: 'pointer',
        marginLeft: 25,
        '@media (max-width: 768px)': {
            marginLeft: 12
        }
    }
});
const firebase = require('firebase');

export default class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }

    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        this.setState({
            user : user
        });
    }

    render() {

        const { icon, title, ...otherProps } = this.props;
        const { user } = this.state; // Local state assigment. 

        console.log(user);
    
        HeaderComponent.propTypes = {
            title: string
        }
        
        return (
            <Row className={css(styles.container)}
                 vertical="center"
                 horizontal="space-between" {...otherProps}>
                <span className={css(styles.title)}>{title}</span>
                <Row vertical="center">
                    <div className={css(styles.iconStyles)}>
                        <IconSearch />
                    </div>
                    <div className={css(styles.iconStyles)}>
                        <IconBellNew />
                    </div>
                    {/*<div className={css(styles.separator)}></div>*/}
                    <Row vertical="center">
                        <span className={css(styles.name, styles.cursorPointer)}>{user.displayName}</span>
                        <img src={user.photoURL}
                             alt="profile photo"
                             className={css(styles.avatar, styles.cursorPointer)} />
                    </Row>
                </Row>
            </Row>
        );
    }
}