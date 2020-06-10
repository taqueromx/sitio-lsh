import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

import NewUser from './project-forms/newUser'

import { useUser } from '../../context/user-context'

import history from '../../services/history'

const firebase = require('firebase');
const db = firebase.firestore();

const BlueFlex = styled(Flex)`
    background: #f6f6f6;

`

const Header = styled.h1`
    color:black;
`
function FirstSetup() {
    const user = useUser()
    const uid = user.uid
    const email = user.email
    const fullName = user.displayName.split(' ')
    const firstName = fullName[0]
    const apellidoPaterno = fullName[1]
    const apellidoMaterno = fullName[2]
    
    let registroCompletado = false;

        db.collection('usuarios').where('email', '==', email)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                registroCompletado = doc.data();
            });
        }).then( () =>{
            history.push('/dashboard')
        })
        .catch(function(error) {
            console.log('Error getting doccuments: ', error);
        })
    

    if (registroCompletado) {
        history.push('/dashboard')
        return null
    }
    else return (
        <BlueFlex
        justifyContent='center'
        alignItems='center'
        height= '100vh'
        flexDirection='column'
            >
        <Header>Llena tus datos para comenzar</Header>
        <NewUser uid={uid} email={email} firstName={firstName} apellidoPaterno={apellidoPaterno} apellidoMaterno={apellidoMaterno} />
        </BlueFlex>
    )
}

export default FirstSetup