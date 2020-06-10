import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

const BlueFlex = styled(Flex)`
    background: #282C34;

`

const Header = styled.h1`
    color:white;
`
function FirstSetup() {
    return (
        <BlueFlex
        justifyContent='center'
        alignItems='center'
        height= '100vh'
        flexDirection='column'
            >
        <Header>Llena tus datos para comenzar</Header>
        <p>Tipo de líder</p>
        </BlueFlex>
    )
}

export default FirstSetup