import React from 'react';
import { Card, Heading, Text, Flex, Box } from 'rebass';
import { Label, Input } from '@rebass/forms';

import './project-list.style.css';

export const CardList = props => (
    <div className='card-list'>
        {Object.keys(props.projects).map((key,index) => (
            <Card key={index} className='card-container'>
                <Box width={1} px={2} mb={2}>
                    <Heading>{props.projects[key].proyecto}</Heading>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='socialCause'>Causa Social:</Label>
                    <Text id='socialCause'>{props.projects[key].causaSocial}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='objective'>Objetivo:</Label>
                    <Text id='objective'>{props.projects[key].objetivo}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='institution'>Institucion:</Label>
                    <Text id='institution'>{props.projects[key].institucion}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='location'>Direccion:</Label>
                    <Text id='location'>{props.projects[key].direccion}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='frecuency'>Frecuencia:</Label>
                    <Text id='frecuency'>{props.projects[key].dias}.</Text>
                </Box>
                <Flex mx={-2} mb={3}>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='startingDate'>Hora Inicio:</Label>
                        <Input 
                            id='startingDate'
                            name='startingDate'
                            type='text'
                            value={props.projects[key].horaInicio || props.projects[key].horarioInicio }
                            disabled='true'
                        />
                    </Box>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='endDate'>Hora Fin:</Label>
                        <Input 
                            id='endDate'
                            name='endDate'
                            type='text'
                            value={props.projects[key].horaFin || props.projects[key].horarioFin || props.projects[key].fechaFin}
                            disabled='true'
                        />
                    </Box>
                </Flex>
            </Card>
        ))}
    </div>
);