import React  from 'react';
import { Field, Form, Formik } from 'formik';
import '../../styles/styleFormP.scss'; 



import { object, string, number} from 'yup';

import FormikAutoComplete from '../auth/FormikAutocomplete '

const firebase = require('firebase');
const db = firebase.firestore();

let projects = 'a'; 

const projectsList= [
    'Mozilla',
    'Proyecto 99',
    'No se we',
    'Rayo transformador',
];



function componentDidMount() {
    let projectsToDisplay = [];
    db.collection('projects').where('publicado','==',true)
    .get()
    .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            projectsToDisplay.push(doc.data());
        });
    }).then( () =>{
        projectsList= projectsToDisplay;
    })
    .catch(function(error){
        console.log("Error getting documents: ", error);
    });
}

function pushToFirebase(props){
    db.collection("projects").doc("projects").set({
        nombre: props.nombre,
        apellidoPaterno: props.apellidoPaterno,
        apellidoMaterno: props.apellidoMaterno,
        matricula: props.matricula,
        semestre: props.semestre,
        carrera: props.carrera,
        email: props.email,
        tallaPlayera: props.tallaPlayera,
        //projects: '',
    })
    .then(function() {
        console.log("Guia registrado!");
    })
    .catch(function(error){
        console.log("Error al registrar guia"); 
    }); 
}


const FormValidation =  object().shape({
    nombre: string()
        .required("Nombre es requerido")
        .min(5, 'El nombre es muy corto')
        .max(50, 'Nombre muy largo'),
    apellidoPaterno: string()
        .required("apellido Paterno es requerido")
        .min(8, 'Muy corto')
        .max(50, 'Muy largo'),
    apellidoMaterno: string()
        .required("apellido Materno es requerido")
        .min(8, 'Muy corto')
        .max(50, 'Muy largo'),
    matricula: string()
        .required("matricula es requerido"),
    semestre: number()
        .required("semestre es requerido"),
    email: string()
        .required("email es requerido"),
    tallaPlayera: string()
        .required("tallaPlayera es requerido"),
}); 




const ProjectDisplay = () => (
    <Formik 
        initialValues={{
            nombre: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            matricula: '',
            semestre: '',
            email: '',
            tallaPlayera: 'M',
            projects: '',
        }}
        
        onSubmit = {
            values => {
            console.log(values); 
        }}

        validationSchema ={FormValidation}

    >
        {({errors, touched}) => (
                <div className="container">
                    <Form >
                        <div className="formTitle">
                            Registrar Guia
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
                            Playera talla:
                            <Field 
                                name="tallaPlayera"
                                as="select"
                            >
                                <option  value="small">Chica</option>
                                <option  value="medium">Mediana</option>
                                <option  value="big">Grande</option>
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
                                    options= {projectsList}
                                    onClick={componentDidMount}
                                />
                            </div>
        
                        </div>
                        <div className="row">
                            <button  type="submit" className="submit"   >
                                Submit
                            </button>   
                        </div>
                    </Form>
                </div>
        )}

    </Formik>
); 

export default ProjectDisplay; 

