import { Flex, Box } from '@chakra-ui/react'
import React from 'react'
import TempSignup from '../components/TempSignup'

function SignupAlt() {
    return (
        <Flex h="100vh" w="100%" bg="ash.100" alignItems={'center'} justifyContent={'center'}>
            <Box bg="white" w="450px" p={10} borderWidth={'1px'} borderColor={'ash.300'} rounded="md">
            <TempSignup />
            </Box>
        </Flex>
    )
}

export default SignupAlt
