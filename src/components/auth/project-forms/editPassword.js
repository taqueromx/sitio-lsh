import React, { Component } from 'react';
import { Field, Form, Formik} from 'formik';
import '../../../styles/styleFormP.scss'; 
import history from '../../../services/history'

import { object, string, number} from 'yup';

const firebase = require('firebase');
const db = firebase.firestore();

let projects = 'a'; 

let projectsList= [
    'Mozilla',
    'Proyecto 99',
    'No se we',
    'Rayo emprendedor',
];

function componentDidMount() {
    let projectsToDisplay = [];
    db.collection('admin').where('publicado','==',true)
    .get()
    .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            projectsToDisplay.push(doc.data().nombre);
        });
    }).then( () =>{
        //this.setState({projects : projectsToDisplay});
        projectsList= projectsToDisplay.proyecto;
    })
    .catch(function(error){
        console.log("Error getting documents: ", error);
    });

    return projectsToDisplay; 
}

// Funcion para alert de guia registrado
// settear fields a vacio
function done(){
    alert("Usuario Registrado"); 
    window.location.reload();
}

const aux = componentDidMount();
function loadProjectsToArr(){
    {console.log(aux)}
    return aux;
}


function pushToFirebase(props){
    db.collection("usuarios").doc(props.uid ).set({
        nombre: props.nombre,
        contrasena: props.contrasena,
        email: props.email
    })
    .then(function() {
        console.log("Contrasena actualizada!");
        history.push('/dashboard')
        done();
    })
    .catch(function(error){
        console.log("Error al actualizar"); 
        console.log(error)
    }); 
}


const FormValidation = object().shape({
    nombre: string()
    .required('Please enter your project name')
    .min(5, 'El nombre es muy corto')
    .max(50, 'Nombre muy largo'),
    email: string()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese su correo electronico'),
    contrasena: string()
    .required('Por favor ingrese su contraseña')
    .min(8, 'muy corto')
    .max(15, 'muy largo'),
    confirm: string()
    .required('Por favor ingrese su contraseña')
    .test('passwords-match', 'Passwords do not match', function(val) {
        return this.parent.contrasena === val;
      }),
}); 

function getSelected(props){
    let selected = props.name; 
    console.log(selected);
}


export default class EditPassword extends Component{
    constructor(props) {
        super()
    }
    render(){
        return (
            <Formik 
                initialValues={{
                    nombre: '',
                    email: '',
                    contrasena: '',
                    confirm: '',
                }}
                
                onSubmit = {
                    values => {
                    console.log(values);
                    pushToFirebase(values); 
                        
                   
                }}
               
                validationSchema ={FormValidation}
                
            >
                {({errors, touched}) => (
                        <div className="container">
                            <Form >
                                <div className="formTitle">
                                    Actualizar usuario
                                </div>
                                <div className="row">
                                    Nombre completo:
                                    <Field disabled={true} name="nombre" type="text" className="input" />
                                    {errors.nombre && touched.nombre ? (
                                        <div className="error" >{errors.nombre}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Email:
                                    <Field name="email" type="email" className="input" />
                                    {errors.email && touched.email ? (
                                        <div className="error" >{errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Contraseña:
                                    <Field name="contrasena" type="password" className="input" />
                                    {errors.contrasena && touched.contrasena ? (
                                        <div className="error" >{errors.contrasena}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Confirmar contraseña:
                                    <Field name="confirm" type="password" className="input" />
                                    {errors.confirm && touched.confirm ? (
                                        <div className="error" >{errors.confirm}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    <button type="submit" className="submit" >
                                        Submit
                                    </button>
                                </div>
                            </Form>
                        </div>
                )}
            </Formik>
);
}
}

