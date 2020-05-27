import React from 'react';
import { Card, Heading, Text, Input, Label } from 'rebass';

import './project-list.style.css';

export const CardList = props => (
    <div className='card-list'>
        {Object.keys(props.projects).map((key,index) => (
            <Card key={index} className='card-container'>
                <Heading>{props.projects[key].proyecto}</Heading>
                <Text>{props.projects[key].objetivo}</Text>
                <Label htmlFor='startingDate'>Hora Inicio</Label>
                {/* <Input 
                    id='startingDate'
                    name='startingDate'
                    type='date'
                    value={props.projects[key].fechaInicio}
                /> */}
            </Card>
        ))}
    </div>
);