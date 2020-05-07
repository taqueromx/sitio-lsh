import React from 'react'

import { useUser } from '../../context/user-context'
import { useAuth } from '../../context/auth-context'
import history from '../../services/history'

import { Box, Flex, Text, Link, Button, Image } from 'rebass'

function Navbar() {
    const user = useUser()
    const { signOut } = useAuth()

    const handleSignOut = () => {
        signOut()
        history.push('/')
    }
    console.log(user)
    return (
        <Flex
            px={4}
            color='white'
            bg='purple'
            alignItems='center'>
            <Link variant='nav' href='/'>
                <Text
                    p={3}
                    fontWeight='bold'
                    fontSize={[ 2, 3 ]}>
                LSH</Text>
            </Link>
            <Box mx='auto' />
            <Image
                src={user.photoURL}
                height={40}
                width={40}
                variant='avatar'
                />
               
            <Text
                mr={4}
                ml={2}
            >
                {user.displayName}
            </Text>
            <Button
                onClick={handleSignOut}
                
            >
                
                Logout
            </Button>
        </Flex>
    )
}

export default Navbar