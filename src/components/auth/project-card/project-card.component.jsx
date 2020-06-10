import React from 'react';
import { Card, Heading, Text, Flex, Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';

export const ProjectCard = ({project, enrollInProject}) => {
    return ( 
        <Card>
                <Box width={1} px={2} mb={2}>
                    <Heading>{project.body.nombre}</Heading>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='socialCause'>Causa Social:</Label>
                    <Text id='socialCause'>{project.body.causaSocial}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='objective'>Objetivo:</Label>
                    <Text id='objective'>{project.body.objetivo}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='institution'>Institucion:</Label>
                    <Text id='institution'>{project.body.institucion}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='location'>Direccion:</Label>
                    <Text id='location'>{project.body.direccion}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='frecuency'>Frecuencia:</Label>
                    <Text id='frecuency'>{project.body.dias}.</Text>
                </Box>
                <Flex mx={-2} mb={3}>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='startingDate'>Fecha de Inicio:</Label>
                        <Input 
                            name='startingDate'
                            type='text'
                            value={project.body.fecheInicio}
                            disabled={true}
                        />
                    </Box>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='endDate'>Fecha de Cierre:</Label>
                        <Input 
                            name='endDate'
                            type='text'
                            value={project.body.fechaCierre}
                            disabled={true}
                        />
                    </Box>
                </Flex>
                <Box width={1} px={2}>
                    <Button 
                        variant='primary' 
                        className='button-width' 
                        onClick={enrollInProject(project.id)}>Inscribir
                    </Button>
                </Box>
            </Card>
     );
}