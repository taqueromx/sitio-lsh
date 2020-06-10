import React from 'react';
import { Card, Heading, Text, Flex, Box, Button } from 'rebass';
import { Label, Input } from '@rebass/forms';

export const ProjectCard = ({project, enrollInProject, firstTime, userType}) => {

    let body, footer;

    if(userType === 'guia' && project.body.lideresAsignados !== undefined){
        console.log(project.body);
        debugger;
        footer = <Box width={1} px={2}>
                    <Label>Lideres asignados: </Label>
                    <Text>{'Nombre: '+project.body.lideresAsignados[0]}</Text>
                    <Text>{'Matricula: '+project.body.lideresAsignados[1]}</Text>
                    <Text>{'Correo: '+project.body.lideresAsignados[1] + '@itesm.mx'}</Text>
                </Box>;
    }else if(userType === 'lider' && project.body.guiaAsignados !== undefined){
        footer = <Box width={1} px={2}>
                    <Label>Guia Asignado: </Label>
                    <Text>{'Nombre: '+project.body.guiaAsignados[0]}</Text>
                    <Text>{'Matricula: '+project.body.guiaAsignados[1]}</Text>
                    <Text>{'Correo: '+project.body.guiaAsignados[1] + '@itesm.mx'}</Text>
                </Box>;
    }else{
        footer = <Box></Box>;
    }

    if(firstTime){
        body = <Box width={1} px={2}>
                    <Button 
                        variant='primary' 
                        className='button-width' 
                        onClick={() => enrollInProject(project.id)}>Inscribir
                    </Button>
                </Box>;
    }else{
        body = <Box>
                </Box>;
    }

    return ( 
        <Card>
                <Box width={1} px={2} mb={2}>
                    <Heading>{project.body.nombre}</Heading>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='socialCause'>Organizador:</Label>
                    <Text id='socialCause'>{project.body.organizador}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='objective'>Descripcion General:</Label>
                    <Text id='objective'>{project.body.descripcionGeneral}</Text>
                </Box>
                <Box width={1} px={2} mb={2}>
                    <Label htmlFor='location'>Direccion:</Label>
                    <Text id='location'>{project.body.lugar}</Text>
                </Box>
                <Flex mx={-2} mb={3}>
                    <Box width={1/2} px={2}>
                        <Label htmlFor='startingDate'>Fecha de Inicio:</Label>
                        <Input 
                            name='startingDate'
                            type='text'
                            value={project.body.fechaInicio}
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
                {body}
                {footer}
            </Card>
     );
}