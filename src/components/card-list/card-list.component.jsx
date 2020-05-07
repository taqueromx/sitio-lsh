import React from 'react';
import { Card } from '../card/card.component'
import './card-list.style.css';

export const CardList  =  ({ projects })  => (
    <div className="card-list">
        {
            projects.map(project => (
                <Card key={project.name} description={project.description} />
            ))
        }
    </div>
);