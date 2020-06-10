import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

import UserEditable from './userEditable'

import { useUser } from '../../../context/user-context'

import history from '../../../services/history'

const firebase = require('firebase');
const db = firebase.firestore();

const BlueFlex = styled(Flex)`
    background: #f6f6f6;

`
const Header = styled.h1`
    color:black;
`

function componentDidMount(userActual){
    let userData= [];
    let aux =[];
    db.collection('usuarios').where('email', '==', userActual.email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            userData = doc.data();
        });
    }).then( () =>{
        aux = userData; 
        //console.log("userData: ", userData); 
        return userData; 
    })
    .catch(function(error) {
        console.log('Error getting doccuments: ', error);
    })

    console.log("userData from func: ", userData); 
    return userData; 
}
function componentDidMountPassword(userActual){
    let admin = false
    db.collection('admin').where('email', '==', userActual.email)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            admin = true
        });
    }).then( () =>{
        if(admin) 
            return true 
    })
    .catch(function(error) {
        console.log('Error getting doccuments: ', error);
    })
    return admin; 
}


function UpdateUser(){
    let userActual = useUser()
    let uid = userActual.uid
    let email = userActual.email
    let fullName = userActual.displayName.split(' ')
    let firstName = fullName[0]
    let apellidoPaterno = fullName[1]
    let apellidoMaterno = fullName[2]
    let matricula = userActual.matricula
    let semestre = userActual.semestre
    let carrera = userActual.carrera
    let tipoUsuario = userActual.tipoUsuario

  //  console.log("userActual:", userActual);

    let arr = componentDidMount(userActual); 

   // console.log("userData data second");
    //console.log("userData:  ",userData); 

    /// Know if user is admin
    let admin = componentDidMountPassword(userActual); 

    ///
    //console.log("admin 2 ", admin); 
    if(admin){
        return(
            <div>
                <BlueFlex
                justifyContent='center'
                alignItems='center'
                height= '100vh'
                flexDirection='column'
                    >
                    <Header>Llena los campos que quieras actualizar</Header>
                    <UserEditable uid={uid} email={email} firstName={firstName} apellidoPaterno={apellidoPaterno} apellidoMaterno={apellidoMaterno}  matricula={matricula} semestre={semestre} carrera={carrera} tipoUsuario={tipoUsuario}  />
                </BlueFlex>
                <BlueFlex
                    justifyContent='center'
                    alignItems='center'
                    height= '100vh'
                    flexDirection='column'
                >
                    <Header>Actualizar contraseña</Header>
                    <UserEditable uid={uid} email={email} firstName={firstName} apellidoPaterno={apellidoPaterno} apellidoMaterno={apellidoMaterno}  matricula={matricula} semestre={semestre} carrera={carrera} tipoUsuario={tipoUsuario}  />
                </BlueFlex>
            </div>
            
        );
    }
    else return(
        <div>
            <BlueFlex
            justifyContent='center'
            alignItems='center'
            height= '100vh'
            flexDirection='column'
                >
                <Header>Llena los campos que quieras actualizar</Header>
                <UserEditable uid={uid} email={email} firstName={firstName} apellidoPaterno={apellidoPaterno} apellidoMaterno={apellidoMaterno}  matricula={matricula} semestre={semestre} carrera={carrera} tipoUsuario={tipoUsuario}  />
            </BlueFlex>
        </div>
        
    );
    

}

export default UpdateUser