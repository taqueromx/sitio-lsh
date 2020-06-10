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
            case 'Sign Out':
                return <SignOut />
            // case 'Asignación':
            //     return;
            //     break;   
            // case 'Mi Líder':
                // return <>
                {/* break */}
            case 'Ver Usuarios':
                return <TableWrapper selectedItem={selectedItem}/>
            case 'Registrar Usuarios':
                return <NewLider/>; 
            case 'Todos los Proyectos':
                return <TableWrapper selectedItem={selectedItem}/>;
            case 'Registrar Proyectos':
               // return <NewProject/>
                //return <NewLider/>
                // return <NewGuia/>
                // return <NewAdmin/>
                return <NewProject/>;
            default:
                return <PostDisplay />   
        }
}

export default SelectView