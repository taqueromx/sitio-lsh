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

    return (
        <Box>

        </Box>
    )

    // return (
    //     <Flex
    //         px={6}
    //         color='white'
    //         bg='purple'
    //         // height={40}
    //         alignItems='center'>
    //         <Link variant='nav' href='/'>
    //             <Text
    //                 py={1}
    //             >
    //             SENTIDO HUMANO</Text>
    //         </Link>
    //         <Box mx='auto' />
    //         {/* <Image
    //             src={user.photoURL}
    //             height={30}
    //             width={30}
    //             variant='avatar'
    //             /> */}
               
    //         <Text
    //             mr={4}
    //             ml={2}
    //         >
    //             {user.displayName}
    //         </Text>
    //         <Button
    //             onClick={handleSignOut}

    //         >
                
    //             Logout
    //         </Button>
    //     </Flex>
    // )
}

export default Navbar