import React from 'react';

import { useUser } from '../../context/user-context';
import { useAuth } from '../../context/auth-context';
import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../searchBox/searchBox.component';

import history from '../../services/history';

const firebase = require("firebase");
const db = firebase.firestore();

function Dashboard() {
    const user = useUser()
    const { signOut } = useAuth()

    const handleSignOut = () => {
        signOut()
        history.push('/')
    }  

    function testProjects(){
        return [
            {name:'Ni;os',description:'test'},
            {name:'Ni;as',description:'test'}
        ];
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <br />
            <p>Estás en el dashboard y podrás hacer cosas de alumno inscrito.</p>
            <br />
            <button onClick={ handleSignOut }>Cerrar sesión</button>
            {/* <SearchBox
                placeholder="Buscar Proyecto"
                handleChange={e => this.searchField = e.target.value }
            /> */}
            <CardList projects={  testProjects() } />
        </div>
    )
}

export default Dashboard