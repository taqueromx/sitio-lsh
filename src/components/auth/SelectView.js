import React from 'react'

import ProjectDisplay from './project-display/project-display-wrapper.component'
import { PostDisplay } from './post-display/postWrapper.component'
import SignOut from './SignOut'

import NewProject from './project-forms/newProject'
import NewLider from './project-forms/newLider'
import NewGuia from './project-forms/newGuia'
import NewAdmin from './project-forms/newAdmin'
import NewUser from'./project-forms/newUser'


function SelectView({selectedItem, user}) {
        switch (selectedItem) {
            case 'Proyectos':
                return <ProjectDisplay/>
                break
            case 'Sign Out':
                return <SignOut />
                break
            case 'Proyectos': //inscripcion del lider o guia
                return <ProjectDisplay user={user}/>
                break
            // case 'Asignación':
                // return <ProjectDisplay/>
                // break   
            // case 'Mi Líder':
                // return <>
                {/* break */}
            // case 'Ver Usuarios':
                // return 
                // break
            // case 'Ver Usuarios':
                // return 
                // break   
            //case 'Registrar Usuarios':
                //return
                //break   
            case 'Registrar Proyectos':
                //return <NewProject/>
                return <NewUser/>
                //return <NewGuia/>
                //return <NewAdmin/>
                break   
            default:
                return <PostDisplay />   
        }
}

export default SelectView