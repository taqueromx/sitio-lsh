import React from 'react'

import { useUser } from '../../context/user-context'


import { Box, Heading, Flex, Card, Image, Text } from 'rebass'

function SectionCard(props) {
    return (
        <Box width={256} m={2}>
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
            borderRadius: 8,
          }}>
          <Image src='https://source.unsplash.com/random/1024x768?sky' />
          <Box px={2}>
            <Heading as='h3' fontFamily='Roboto'>
              {props.name}
            </Heading>
            <Text fontSize={0} fontFamily='Roboto'>
              {props.description}
            </Text>
          </Box>
        </Card>
      </Box>
    
    )
} 

function Dashboard() {
    const user = useUser()

    return (
        <div>
            <Flex justifyContent='center'
                            sx={{
                                px: 4,
                                py: 6,
                                backgroundImage: 'url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
                                backgroundSize: 'cover',
                                borderRadius: 8,
                                height:'100vh',
                                bg: 'gray',
                            }}>
                <SectionCard name='Proyectos' description='Revisa la oferta' />
                <SectionCard name='Panel de control' description='Haz ajustes' />
                <SectionCard name='Busca' description='Buscar un proyecto' />
                <SectionCard name='Proyectos' description='Revisa la oferta' />
            </Flex>
        </div>
    )
}

export default Dashboard