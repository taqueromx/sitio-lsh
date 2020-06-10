import React from 'react'

import ProjectDisplay from './project-display/project-display-wrapper.component'
import { PostDisplay } from './post-display/postWrapper.component'
import SignOut from './SignOut'

import { Select } from '@rebass/forms';


function SelectView(props) {
        const selectedItem  = props.menu;
        if (selectedItem === 'Proyectos'){
            return <ProjectDisplay/>
        }
        else if (selectedItem === 'SignOut')
            return <SignOut />
        else return <PostDisplay />
}

export default SelectView