import React, { Component } from 'react';
import { Field, Form, Formik} from 'formik';
import '../../../styles/styleFormP.scss'; 


import { object, string, number} from 'yup';
import FormikAutoComplete from './FormikAutocomplete '

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
    alert("Lider Registrado"); 
    window.location.reload();
}

const aux = componentDidMount();
function loadProjectsToArr(){
    {console.log(aux)}
    return aux;
}


function pushToFirebase(props){
    db.collection("lideres").doc().set({
        nombre: props.nombre,
        apellidoPaterno: props.apellidoPaterno,
        apellidoMaterno: props.apellidoMaterno,
        matricula: props.matricula,
        semestre: props.semestre,
        carrera: props.carrera,
        email: props.email,
        tallaPlayera: props.tallaPlayera,
        projects: props.projects,
    })
    .then(function() {
        console.log("Lider registrado!");
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
    tallaPlayera: string()
        .required("tallaPlayera es requerido"),
    projects: string()
        .required("projects es requerido"),
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


export default class NewLider extends Component{
    render(){
        return (
            <Formik 
                initialValues={{
                    nombre: '',
                    apellidoPaterno: '',
                    apellidoMaterno: '',
                    matricula: '',
                    semestre: '',
                    carrera:'',
                    email: '',
                    tallaPlayera: 'C',
                    projects: '',
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
                                    Registrar Lider
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
                                    Talla Playera:
                                    <Field 
                                        name="tallaPlayera"
                                        as="select"
                                    >
                                        <option  value="small">C</option>
                                        <option  value="medium">M</option>
                                        <option  value="big">G</option>
                                    </Field>
                                
                                </div>
                                <div className="row">
                                    <div className="formSubTitle">Proyectos Asignados:</div>
                                    <div className="AssignedProjects">
                                        {/*  Aqui deben aparecer proyectos seleccionados   */}
                                        
                                    
                                    </div>
                                   
                                    <div className="assignedProjecys">
                                        Nombre:
                                        <Field 
                                            name="projects" 
                                            className="input" 
                                            component={FormikAutoComplete}
                                            options= {aux}
                                            onClick={loadProjectsToArr}
                                            //onChange={val => getSelected(val)}
                                           // onSelect={val => proyectosAsignados(val)}
                                           //onChange={handleChange}
                                        />
                                    </div>
                                  {/*}  <div className="rowMid">
                                        <div 
                                            className={"btnAddProject"}  
                                          //  onClick= {getSelected2}
                                        
                                        >
                                            Agregar Proyecto
                                        </div>
                                        
                                    </div>
                                    {*/}
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

