import React from 'react'

import ProjectDisplay from './project-display/project-display-wrapper.component'
import { PostDisplay } from './post-display/postWrapper.component'
import SignOut from './SignOut'
import TableWrapper from './table-wrapper/table-wrapper.component'

import NewProject from './project-forms/newProject'
import NewLider from './project-forms/newLider'
import NewGuia from './project-forms/newGuia'
import NewAdmin from './project-forms/newAdmin'


function SelectView({selectedItem, user}) {
        switch (selectedItem) {
            case 'Proyectos':
                return <ProjectDisplay/>
                break;
            case 'Sign Out':
                return <SignOut />
                break;
            case 'Proyectos': //inscripcion del lider o guia
                return <ProjectDisplay user={user}/>
                break;
            case 'Asignación':
                return <TableWrapper selectedItem={selectedItem}/>
                break;   
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
               // return <NewProject/>
                //return <NewLider/>
                //return <NewGuia/>
                return <NewAdmin/>
                break   
            default:
                return <PostDisplay />   
        }
}

export default SelectView