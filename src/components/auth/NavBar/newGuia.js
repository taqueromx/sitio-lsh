import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import Calendar from 'react-calendar';
import Dropdown from 'react-dropdown';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// options for the dropdown
const tallaPlayera = [
    'S', 'M', 'L'
];
const defaultTallaPlayera = optionsUser[0]; 

function MyForm(props) {
    const {
        isSubmitting,
        isValid,
    } = props;

    return (
        <Form>
{ /*
            <div className="row">
                Password:
                <Field name="password" type="password" className="input" />
                <ErrorMessage name="password">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div> 
    */
}
            <div className="row">
                Nombre:
                <Field name="nombre" type="nombre" className="input" />
                <ErrorMessage name="nombre">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Apellido Paterno:
                <Field name="apellidoPaterno" type="apellidoPaterno" className="input" />
                <ErrorMessage name="apellidoPaterno">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Apellido Materno:
                <Field name="apellidoMaterno" type="apellidoMaterno" className="input" />
                <ErrorMessage name="apellidoMaterno">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Matricula:
                <Field name="matricula" type="matricula" className="input" />
                <ErrorMessage name="matricula">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Semestre:
                <Field name="semestre" type="number" className="input" />
                <ErrorMessage name="semestre">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Email:
                <Field name="email" type="email" className="input" />
                <ErrorMessage name="email">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Talla Playera:
                <Dropdown 
                    name="categoria" 
                    type="categoria" 
                    className="input" 
                    options={tallaPlayera} 
                    onChange={this._onSelect} 
                    value={defaultTallaPlayera}  
                    placeholder="Select an option"
                />
                <ErrorMessage name="categoriaPlayera">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            



            <div className="row">
                <button
                    type="submit"
                    className={`submit ${isSubmitting || !isValid ? 'disabled' : ''}`}
                    disabled={isSubmitting || !isValid}
                >
                    Submit
                </button>
            </div>
        </Form>
    );
}

export default withFormik({
    mapPropsToValues(props) {
        return {
            email: props.defaultEmail,
            password: '',
        };
    },

    async validate(values) {
        const errors = {};

     /*   if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
        }
*/
        if(!values.email.length < 10){
            errors.email = 'Password must be at least 8 characters';
        }

        await sleep(5000);

        if (Object.keys(errors).length) {
            throw errors;
        }
    },

    handleSubmit(values, formikBag) {
        formikBag.setSubmitting(false);
        console.log(values);
    },
})(MyForm);