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

    enrollInProject = (projectId) => {
        let userId = this.props.user.userDataId;
        db.collection('usuarios').doc(userId)
        .update({
            proyectoAsignado: projectId
        })
        .then(() => {
            window.location.reload();
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        const {projects,firstTime,proyectoAsignado} = this.state;
        let body;

        if(firstTime){
            body = <CardList projects={projects} enrollInProject={this.enrollInProject.bind(this)} firstTime={firstTime}/>;
        }else{
            body = <ProjectCard project={proyectoAsignado} firstTime={firstTime}/>
        }

        return (
            <div>
                {body}
            </div>
        )
    }
}