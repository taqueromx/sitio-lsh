import React from 'react'
import { Flex, Box, Heading, Button, Text } from 'rebass'

import { useAuth } from '../../context/auth-context'
import history from '../../services/history'

// Hay que revisar si el usuario ya completó su primer setup y si no mandarlo
const setupInicial = false;

function Home() {
    const { signInWithGoogle } = useAuth()

    const handleSignIn = () => {
        try {
            signInWithGoogle()
          }
          catch (e) {
              console.log(e)
          }
          finally {
            if (setupInicial) {// si ya llenó sus datos al dashboard, si no, al registro
                history.push('/dashboard')
            }
            else {
                history.push('/setup')
            }
          }
    }
  
    return (
            <Box
                sx={{
                    px: 4,
                    py: 6,
                    backgroundImage: 'url(https://i.ibb.co/d6bk00X/perry-grone-lb-Lg-FFl-ADr-Y-unsplash.jpg)',
                    backgroundSize: 'cover',
                    borderRadius: 8,
                    height:'100vh',
                    color: 'white',
                    bg: 'gray',
                }}>
                <Heading
                    m={4}
                    fontFamily='monospace'
                    textAlign='center'
                    fontSize={[ 5, 6 ]}>
                    Líderes con Sentido Humano
                </Heading>
                <Flex
                    flexDirection='column'
                    flexWrap = 'wrap'
                    justifyContent='center'
                >
                    <Text
                        alignSelf='center'
                        textAlign='center'
                        width={1/2}
                        fontFamily='Roboto'
                        fontSize={[ 2, 3 ]}
                        fontWeight='bold'
                        lineHeight='body'>
                        El portal de ayuda para los miembros del servicio social de Líderes con Sentido Humano.
                        Ingresa para elegir el proyecto que vas a auxiliar durante el semestre. 
                        </Text>
                    <br />
                    <Button
                        alignSelf='center'
                        m={4}
                        py={3}
                        width={1/3}
                        sx={{
                            ':hover': {
                              backgroundColor: 'tomato',
                            }
                          }}
                          onClick={handleSignIn}>
                        Inicia sesión con tu cuenta del Tec</Button>
                </Flex>

            </Box>
            
    )
}

export default Home