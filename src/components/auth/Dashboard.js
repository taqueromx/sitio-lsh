import React from 'react'

import { useUser } from '../../context/user-context'
import { useAuth } from '../../context/auth-context'


import 'react-datepicker/dist/react-datepicker.css'
import history from '../../services/history'

function Dashboard() {
    const user = useUser()
    const { signOut } = useAuth()

    const handleSignOut = () => {
        signOut()
        history.push('/')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <br />
            <p>Estás en el dashboard y podrás hacer cosas de alumno inscrito.</p>
            <br />
            <a href='/newProject'><button>Crear Proyecto </button> </a>
            <a href='/newGuia'><button>Registrar Guia </button> </a>
            <a href='/newLider'><button>Registrar Lider </button> </a>
            <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>
    )
}

export default Dashboard
