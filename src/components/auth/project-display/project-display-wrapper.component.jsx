import React, { Component } from 'react';
import { CardList } from '../project-list/project-list.component';

const firebase = require('firebase');
const db = firebase.firestore();

export default class ProjectDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ...this.state,
            projects : {}
        };
    }

    componentDidMount() {
        let projectsToSave = []; 
        db.collection('projects').where('publicado','==',true)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                projectsToSave.push({id:doc.id,project:doc.data()});
            });
        }).then(() => {
            this.setState({projects : projectsToSave});
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        const {projects} = this.state;
        return (
            <CardList projects={projects}/>
        )
    }
}