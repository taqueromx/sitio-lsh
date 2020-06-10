import React from 'react';
import { Box } from 'rebass';
import { ProjectCard } from '../project-card/project-card.component';

import './project-list.style.css';

export const CardList = ({projects, enrollInProject, firstTime}) => (
    <Box 
        sx={{
            display: 'grid',
            gridGap: 3,    
            gridTemplateColumns: 'repeat(4, minmax(128px, 1fr))',
        }}
    >
        {Object.keys(projects).map((key) => (
            <ProjectCard 
                key={projects[key].id} 
                project={projects[key]} 
                enrollInProject={enrollInProject}
                firstTime={firstTime}
                />
        ))}
    </Box>
);