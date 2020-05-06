import React from 'react';

import { useUser } from '../../context/user-context';
import { useAuth } from '../../context/auth-context';
import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../searchBox/searchBox.component';

import history from '../../services/history';

const firebase = require("firebase");

function Dashboard() {
    const user = useUser()
    const { signOut } = useAuth()
    const db = firebase.firestore();
    let searchField = '';

    const handleSignOut = () => {
        signOut()
        history.push('/')
    }  

    const getProject = () => {
        let projects = [];
        db.collection('projects').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                // console.log(doc.id, " => ", doc.data());
                projects.push(doc.data());
            });
        });
        return projects;
    }

    const testProjects = () => {
        return [
            {name:'test1',description:'testDes1'},
            {name:'test2',description:'testDes2'}
        ];
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <br />
            <p>Estás en el dashboard y podrás hacer cosas de alumno inscrito.</p>
            <br />
            <button onClick={handleSignOut}>Cerrar sesión</button>
            {/* <SearchBox
                placeholder="Buscar Proyecto"
                handleChange={e => this.searchField = e.target.value }
            /> */}
            <CardList projects={ testProjects } />
        </div>
    )
}

export default Dashboard