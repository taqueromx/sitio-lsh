import React, { Component } from 'react';
import { CardList } from '../project-list/project-list.component';
import { ProjectCard } from '../project-card/project-card.component';

const firebase = require('firebase');
const db = firebase.firestore();

export default class ProjectDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            projects: {},
            proyectoAsignado: null,
            firstTime: true
        };
    }

    componentDidMount() {
        let projectsToSave = []; 

        if(this.props.user.userData.proyectoAsignado === undefined || this.props.user.userData.proyectoAsignado === null){
            db.collection('projects').where('publicado','==',true)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    projectsToSave.push({id:doc.id,body:doc.data()});
                });
            }).then(() => {
                this.setState({projects : projectsToSave});
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        }else{
            db.collection('projects').doc(this.props.user.userData.proyectoAsignado)
            .get()
            .then((doc) => {
                let proyectoAsignado = doc.data();
                this.setState({proyectoAsignado:{body:proyectoAsignado},firstTime:false});
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        }
        
    }

    saveUserDataInProjectDocument = () => {
        let user = this.props.user.userData;
        console.log(user);
        debugger;
        /*db.collection('projects').doc(projectId)
        .update({
            lideresAsignados: firebase.firestore.FieldValue.arrayUnion('newItem')
        })
        .then(() => {
            window.location.reload();
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });*/
    }

    enrollInProject = (projectId) => {
        let userId = this.props.user.userDataId;
        let user = this.props.user.userData;
        db.collection('usuarios').doc(userId)
        .update({
            proyectoAsignado: projectId
        })
        .then(() => {
            if(user.tipoUsuario === 'lider'){
                db.collection('projects').doc(projectId)
                .update({
                    lideresAsignados:firebase.firestore.FieldValue.arrayUnion(user.nombre,user.matricula)
                })
            }else{
                db.collection('projects').doc(projectId)
                .update({
                    guiaAsignado:firebase.firestore.FieldValue.arrayUnion(user.nombre,user.matricula)
                })
            }
        })
        .then(() => {
            window.location.reload();
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        const {tipoUsuario} = this.props.user.userData;
        const {projects,firstTime,proyectoAsignado} = this.state;
        let body;

        if(firstTime){
            body = <CardList projects={projects} enrollInProject={this.enrollInProject.bind(this)} firstTime={firstTime}/>;
        }else{
            body = <ProjectCard project={proyectoAsignado} firstTime={firstTime} userType={tipoUsuario}/>
        }

        return (
            <div>
                {body}
            </div>
        )
    }
}