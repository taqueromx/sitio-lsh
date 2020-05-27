import React from 'react';
import { Card, Heading, Text } from 'rebass';

import './project-list.style.css';

export const CardList = props => (
    <div className='card-list'>
        {Object.keys(props.projects).map((key,index) => (
            <Card key={index} width={256}>
                <Heading>{props.projects[key].name}</Heading>
                <Text>{props.projects[key].description}</Text>
            </Card>
        ))}
    </div>
);