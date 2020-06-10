import React from 'react';
import { Card, Heading, Text, Flex, Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';

export const ProjectCard = (props) => {
    return ( 
        <Card>
                <Box width={1} px={2} mb={2}>
                    <Heading>{props.project.nombre}</Heading>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='socialCause'>Causa Social:</Label>
                    <Text id='socialCause'>{props.project.causaSocial}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='objective'>Objetivo:</Label>
                    <Text id='objective'>{props.project.objetivo}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='institution'>Institucion:</Label>
                    <Text id='institution'>{props.project.institucion}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='location'>Direccion:</Label>
                    <Text id='location'>{props.project.direccion}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='frecuency'>Frecuencia:</Label>
                    <Text id='frecuency'>{props.project.dias}.</Text>
                </Box>
                <Flex mx={-2} mb={3}>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='startingDate'>Fecha de Inicio:</Label>
                        <Input 
                            id='startingDate'
                            name='startingDate'
                            type='text'
                            value={props.project.fecheInicio}
                            disabled={true}
                        />
                    </Box>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='endDate'>Fecha de Cierre:</Label>
                        <Input 
                            id='endDate'
                            name='endDate'
                            type='text'
                            value={props.project.fechaCierre}
                            disabled={true}
                        />
                    </Box>
                </Flex>
                <Box width={1} px={2}>
                    <Button variant='primary' className='button-width'>Inscribir</Button>
                </Box>
            </Card>
     );
}