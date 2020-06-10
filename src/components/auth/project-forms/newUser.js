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
    db.collection('projects').where('publicado','==',true)
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
    db.collection("usuarios").doc().set({
        nombre: props.nombre,
        apellidoPaterno: props.apellidoPaterno,
        apellidoMaterno: props.apellidoMaterno,
        matricula: props.matricula,
        semestre: props.semestre,
        carrera: props.carrera,
        email: props.email,
        tipoUsuario: props.tipoUsuario,
        uid: props.uid,
        registroCompletado: props.registroCompletado
    })
    .then(function() {
        console.log("Lider registrado!");
        history.push('/dashboard')
        done();
    })
    .catch(function(error){
        console.log("Error al registrar Lider"); 
        console.log(error)
    }); 
}


const FormValidation = object().shape({
    nombre: string()
        .required("Nombre es requerido")
        .min(3, 'El nombre es muy corto')
        .max(50, 'Nombre muy largo'),
    apellidoPaterno: string()
        .required("apellido Paterno es requerido")
        .min(5, 'Muy corto')
        .max(50, 'Muy largo'),
    apellidoMaterno: string()
        .required("apellido Materno es requerido")
        .min(5, 'Muy corto')
        .max(50, 'Muy largo'),
    matricula:  string()
        .required("matricula es requerido")
        .min(9, 'Muy corto')
        .max(9, 'Muy largo'),
    semestre:  number()
        .required("semestre es requerido")
        .max(13, 'Numero de semestre my alto'),
    carrera:  string()
        .required("carrera es requerido")
        .max(6, 'Solo indica las siglas de la carrera'),
    email: string()
        .required("email es requerido"),
    tipoUsuario: string()
        .required("usuario es requerido"),
}); 

function getSelected(props){
    let selected = props.name; 
    console.log(selected);
}


const proyectosAsignados = props => (
    <div>
        {Object.keys(props).map((key,index) => (
            <div
                key={index}
                value={props.nombre}
            ></div>
        ))}
    </div>
);

export default class NewUser extends Component{
    constructor(props) {
        super()
    }
    render(){
        return (
            <Formik 
                initialValues={{
                    nombre: this.props.firstName,
                    apellidoPaterno: this.props.apellidoPaterno,
                    apellidoMaterno: this.props.apellidoMaterno,
                    matricula: '',
                    semestre: '',
                    carrera:'',
                    email: this.props.email,
                    tipoUsuario: 'guia',
                    uid: this.props.uid,
                    registroCompletado: true
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
                                    Registrar usuario nuevo
                                </div>
                                <div className="row">
                                    Nombre:
                                    <Field name="nombre" type="text" className="input" />
                                    {errors.nombre && touched.nombre ? (
                                        <div  className="error" >{errors.nombre}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Apellido Paterno:
                                    <Field name="apellidoPaterno" type="text" className="input" />
                                    {errors.apellidoPaterno && touched.apellidoPaterno ? (
                                        <div  className="error" >{errors.apellidoPaterno}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Apellido Materno:
                                    <Field name="apellidoMaterno" type="text" className="input" />
                                    {errors.apellidoMaterno && touched.apellidoMaterno ? (
                                        <div  className="error" >{errors.apellidoMaterno}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Matricula:
                                    <Field name="matricula" type="text" className="input" />
                                    {errors.matricula && touched.matricula ? (
                                        <div  className="error" >{errors.matricula}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Carrera (Siglas):
                                    <Field name="carrera" type="text" className="input" />
                                    {errors.carrera && touched.carrera ? (
                                        <div  className="error" >{errors.carrera}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Semestre:
                                    <Field name="semestre" type="number" className="input" />
                                    {errors.semestre && touched.semestre ? (
                                        <div  className="error" >{errors.semestre}</div>
                                    ) : null}
                                </div>
                                <div className="row">
                                    Email:
                                    <Field name="email" type="email" className="input" />
                                    {errors.email && touched.email ? (
                                        <div  className="error" >{errors.email}</div>
                                    ) : null}
                                </div>
                                
                                <div className="row">
                                    Tipo de Usuario: 
                                    <Field 
                                        name="tipoUsuario"
                                        as="select"
                                        className="formSubTitle"
                                    >
                                        <option  value="lider">Lider</option>
                                        <option  value="guia">Guia</option>
                                    </Field>
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

