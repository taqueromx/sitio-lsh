import React from 'react';
import { Field, Form, Formik   } from 'formik';
import '../../styles/styleFormP.scss'; 

import { object, string, number, date} from 'yup';

const firebase = require('firebase');
const db = firebase.firestore();



// Funcion para alert de guia registrado
// settear fields a vacio
function done(){
    alert("Proyecto Registrado"); 
    
}

function pushToFirebase(props){
    db.collection("projects").doc().set({
        nombre: props.nombre,
        organizador: props.organizador,
        descripcionGeneral: props.descripcionGeneral,
        lugar: props.lugar,
        fechaInicio: props.fechaInicio,
        fechaCierre: props.fechaCierre,
        categoria: props.categoria,
        nombreCompleto: props.nombreCompleto,
        email: props.email,
        telefono: props.telefono,
        publicado: true,
        
    })
    .then(function() {
        console.log("Proyecto registrado!");
        done();
    })
    .catch(function(error){
        console.log("Error al registrar Proyecto"); 
        console.log(error)
    }); 
}



// validacion por medio de yup
const FormValidation = object().shape({
    nombre: string()
    .required('Please enter your project name')
    .min(5, 'El nombre es muy corto')
    .max(50, 'Nombre muy largo'),
    organizador: string()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese el organizador')
    .min(8, 'Muy corto')
    .max(50, 'Muy largo'),
    descripcionGeneral: string()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese breve descripcion')
    .min(15, 'Muy corto')
    .max(75, 'Muy largo'),
    fechaInicio: date()
    .required('Por favor ingrese fecha de inicio'),
    fechaCierre: date()
    .required('Por favor ingrese fecha de cierre'),
    lugar: string()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese lugar')
    .min(4, 'Muy corto')
    .max(50, 'Muy largo'),
    nombreCompleto: string()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese nombre completo')
    .min(10, 'Muy corto')
    .max(50, 'Muy largo'),
    email: string()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese su correo electronico'),
    telefono: number()
    /* .min(6, 'Su nombre de usuario debe ser al menos 6 caracteres de largo') */
    .required('Por favor ingrese su telefono')
    .min(1000000000, 'Telefono debe tener 10 digitos minimo')
    .max(9999999999, 'Telefono debe tener 10 digitos maximo'),
  });

// options for the dropdown

let categoria= 'a'; 

const handleChangeCategoria = e => {
    categoria = e.target.value;
    console.log("2:  ",categoria,"  ", e.target.name);
}



const MyForm = () => (
        <Formik
            initialValues={{
                nombre: '',
                organizador: '',
                descripcionGeneral: '',
                lugar: '',
                fechaInicio: '',
                fechaCierre: '',
                categoria: 'junior',
                nombreCompleto: '',
                email: '',
                telefono: '',
            }}
            onSubmit = { 
                values => {
                console.log("clicked 1 ");
                console.log(values);
                console.log("ends clicked 1 ");

                pushToFirebase(values);
            }}

            validationSchema ={FormValidation}
            
        >
            {({errors, touched})=>(
                <div className="container">
                <Form>
                    <div className="formTitle">
                        Agregar nuevo proyecto
                    </div>
                    <div className="row">
                        Nombre completo:
                        <Field name="nombre" type="text" className="input" />
                        {errors.nombre && touched.nombre ? (
                            <div className="error" >{errors.nombre}</div>
                         ) : null}
                    </div>
                    <div className="row">
                        Organizador:
                        <Field name="organizador" type="text" className="input" />
                        {errors.organizador && touched.organizador ? (
                            <div className="error" >{errors.organizador}</div>
                         ) : null}
                    </div>
                    <div className="row">
                        Descripcion General:
                        <Field name="descripcionGeneral" type="text" className="input" />
                        {errors.descripcionGeneral && touched.descripcionGeneral ? (
                            <div className="error" >{errors.descripcionGeneral}</div>
                         ) : null}
                    </div>
                    <div className="row">
                        Lugar:
                        <Field name="lugar" type="text" className="input" />
                        {errors.lugar && touched.lugar ? (
                            <div className="error" >{errors.lugar}</div>
                         ) : null}
                    </div>
                    
                    <div className="row">
                        Fecha de inicio:
                        <Field name="fechaInicio" type="date" className="input" />
                        {errors.fechaInicio && touched.fechaInicio ? (
                            <div className="error" >{errors.fechaInicio}</div>
                         ) : null}
                    </div>
                    <div className="row">
                        Fecha de Cierre:
                        <Field name="fechaCierre" type="date" className="input" />
                        {errors.fechaCierre && touched.fechaCierre ? (
                            <div className="error" >{errors.fechaCierre}</div>
                         ) : null}
                    </div>
     
                    <div className="row">
                        Categoria:
                        <Field 
                            name="categoria"
                            as="select"
                            
                        >
                            <option  value="junior">Junior</option>
                            <option  value="semisenior">Semi - senior</option>
                            <option  value="senior">Senior</option>
                        </Field>
                    </div>
                    <div className="rowP">
                        Datos de Socio Formador 
                    </div>
                    <div className="row">
                        Nombre completo:
                        <Field name="nombreCompleto" type="nombreCompleto" className="input" />
                        {errors.nombreCompleto && touched.nombreCompleto ? (
                            <div className="error" >{errors.nombreCompleto}</div>
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
                        Telefono:
                        <Field name="telefono" type="telefono" className="input" />
                        {errors.telefono && touched.telefono ? (
                            <div className="error" >{errors.telefono}</div>
                         ) : null}
                    </div>
    
                    <div className="row">
                        <button  type="submit" className="submit" >
                            Submit
                        </button>
                    </div>
                </Form>
            </div>
            )}

        </Formik>
        
); 

export default MyForm; 
