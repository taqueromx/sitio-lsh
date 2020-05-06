import React from 'react'

import {
    Box,
    Flex,
    Text,
    Link,
  } from 'rebass'


function Navbar() {
    return (
        <Flex
            px={4}
            color='white'
            bg='purple'
            alignItems='center'>
            <Link variant='nav' href='/'>
                <Text p={3} fontWeight='bold'>LSH</Text>
            </Link>
            <Box mx='auto' />
            <Link variant='nav' href='/login'>
                Iniciar Sesión
            </Link>
        </Flex>
    )
}

export default Navbar