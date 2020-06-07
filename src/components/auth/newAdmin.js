import React from 'react';
import { Field, Form, Formik   } from 'formik';
import '../../styles/styleFormP.scss'; 

import { object, string, number, date} from 'yup';

const firebase = require('firebase');
const db = firebase.firestore();

// Funcion para alert de guia registrado
// settear fields a vacio
function done(){
    alert("Administrador registrado"); 
    
}




function pushToFirebase(props){
    db.collection("admin").doc().set({
        nombre: props.nombre,
        email: props.email,
        contrasena: props.contrasena,
    })
    .then(function() {
        console.log("Admin registrado!");
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




const MyForm = () => (
    <Formik
        initialValues={{
            nombre: '',
            email: '',
            contrasena: '',
            confirm: '',
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
                    Registrar nuevo Lider
                </div>
                <div className="row">
                    Nombre completo:
                    <Field name="nombre" type="text" className="input" />
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
