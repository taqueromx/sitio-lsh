import React from 'react'
import Loader from 'react-loader-spinner'
import { Flex } from 'rebass'
import styled from 'styled-components'

const BlueFlex = styled(Flex)`
    background: #282C34;


`

function FullPageSpinner() {
    return (
        <BlueFlex
        justifyContent='center'
        alignItems='center'
        height= '100vh'
            >
        <Loader
            type="Puff"
            color="#00BFFF"
            height={500}
            width={500}
            timeout={20000}
        />
        </BlueFlex>
    )
}

export default FullPageSpinner