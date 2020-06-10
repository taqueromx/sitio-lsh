import React from 'react';
import { Box } from 'rebass';

import {ProjectCard} from '../project-card/project-card.component';

import './project-list.style.css';

export const CardList = props => (
    <Box 
        {...props}
        sx={{
            display: 'grid',
            gridGap: 3,    
            gridTemplateColumns: 'repeat(4, minmax(128px, 1fr))',
        }}
    >
        {Object.keys(props.projects).map((key,index) => (
            <ProjectCard key={props.projects[key].id} project={props.projects[key].project} />
        ))}
    </Box>
);