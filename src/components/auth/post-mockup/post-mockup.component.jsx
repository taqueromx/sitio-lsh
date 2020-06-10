import React from 'react';
import { Card, Heading, Text, Box, Button } from 'rebass';
import ReactPlayer from 'react-player'

export default function PostMockup(props) {
    return (
        <Box sx={{
            display: 'grid',
            gridGap: 4,    
            gridTemplateColumns: 'repeat(2, minmax(128px, 1fr))',
        }}>
            <Card >
                <Heading mt={2}>Herramienta Radar</Heading>
                <Box pl={5} pt={3} pb={3}>
                    <ReactPlayer url='https://youtu.be/h7RHS1eXvBs' />
                </Box>
            </Card>
            <Card>
                <Heading mt={2}>Servicio Social</Heading>
                <Box pl={5} pt={3} pb={3}>
                    <ReactPlayer url='https://youtu.be/Xj9UbWdq9os' />
                </Box>
            </Card>
            <Card>
                <Heading mt={2}>Servicio Social</Heading>
                <Box px={3} pt={3} pb={3}>
                    <Button variant='primary'
                            width='100%'>Sube tus reportes
                    </Button>
                </Box>
            </Card>
            <Card>
                <Heading mt={2}>Servicio Social</Heading>
                <Box px={3} pt={3} pb={3}>
                    <Button 
                        variant='primary'
                        width='100%'>Sube tus evidencias
                    </Button>
                </Box>
            </Card>
        </Box>
    );
}