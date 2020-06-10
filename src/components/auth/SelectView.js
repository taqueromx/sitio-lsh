import React from 'react'

import ProjectDisplay from './project-display/project-display-wrapper.component'
import { PostDisplay } from './post-display/postWrapper.component'
import SignOut from './SignOut'
import TableWrapper from './table-wrapper/table-wrapper.component'

import NewProject from './project-forms/newProject'
import NewLider from './project-forms/newLider'
import NewGuia from './project-forms/newGuia'
import NewAdmin from './project-forms/newAdmin'
import NewUser from'./project-forms/newUser'
import EditUser from './project-forms/editUser'


function SelectView({selectedItem, user}) {
        switch (selectedItem) {
            case 'Proyectos':
                return <TableWrapper selectedItem={'Todos los Proyectos'}/>;
            case 'SignOut':
                return <SignOut />
            case 'Asignación':
                return <ProjectDisplay user={user}/>
            case 'Ver Usuarios':
                return <TableWrapper selectedItem={selectedItem}/>
    
            case 'Registrar Líder':
                return <NewLider/>; 

            case 'Todos los Proyectos':
                return <TableWrapper selectedItem={selectedItem}/>;
         
            case 'Registrar Proyectos':
                return <NewProject/>
       
            case 'Registrar Guía':
                return <NewGuia/>
            
            case 'Registrar Admin':
                return <NewAdmin/>
                break 
            case 'Settings':
                return <EditUser/>
                break   
            default:
                return <PostDisplay />   
        }
}

export default SelectView