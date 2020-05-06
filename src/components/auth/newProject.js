import React from 'react';
import { withFormik, Field, ErrorMessage, Form } from 'formik';
import Calendar from 'react-calendar';
import Dropdown from 'react-dropdown';
//import 

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// options for the dropdown
const optionsUser = [
    'Junior', 'Senior', 'Semisenior'
];
const defaulOptionUser = optionsUser[0]; 

function MyForm(props) {
    const {
        isSubmitting,
        isValid,
    } = props;
    
    return (
        <Form>

            <div className="row">
                Password:
                <Field name="password" type="password" className="input" />
                <ErrorMessage name="password">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>

            <div className="row">
                Nombre:
                <Field name="nombre" type="nombre" className="input" />
                <ErrorMessage name="nombre">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Organizador:
                <Field name="organizador" type="organizador" className="input" />
                <ErrorMessage name="organizador">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Descripcion General:
                <Field name="descripcionGeneral" type="descripcionGeneral" className="input" />
                <ErrorMessage name="descripcionGeneral">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Lugar:
                <Field name="lugar" type="lugar" className="input" />
                <ErrorMessage name="lugar">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Fecha de inicio:
                <Calendar name="calendar" type="calendar" className="input" />
                <ErrorMessage name="calendar">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Fecha de Cierre:
                <Calendar name="calendar" type="calendar" className="input" />
                <ErrorMessage name="calendar">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="row">
                Categoria:
                <Dropdown 
                    name="categoria" 
                    type="categoria" 
                    className="input" 
                    options={optionsUser} 
                    onChange={this._onSelect} 
                    value={defaulOptionUser}  
                    placeholder="Select an option"
                />
                <ErrorMessage name="categoria">
                    {message => <div className="error">{message}</div>}
                </ErrorMessage>
            </div>
            <div className="rowP">
                Socio Formador 
            </div>
            <div className="row">
                Nombre completo:
                <Field name="nombreCompleto" type="nombreCompleto" className="input" />
                <ErrorMessage name="nombreCompleto">
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
                Telefono:
                <Field name="telefono" type="telefono" className="input" />
                <ErrorMessage name="telefono">
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

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
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