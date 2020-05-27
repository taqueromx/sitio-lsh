import React, { Component } from 'react';

let helloWorld = <h1>Hello World</h1>;
let projectsReference = firebase.database();

export default class ProjectDisplay extends Component {

    constructor() {
        super();

        this.state = {
            projects : {}
        }
    }

    componentDidMount() {
        projectsReference.collection('projects')
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    render() {
        return (
            helloWorld
        )
    }
}