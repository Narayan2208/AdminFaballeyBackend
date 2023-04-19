import React from 'react'
import {  Image, Box,Flex,Text } from '@chakra-ui/react'
function Navbar() {
  return (
    <>
         <Flex zIndex={"10000"} backgroundColor="white" position="sticky" top="0" >
         <Box display="flex" justifyContent="space-between"  w="62%">

         <Image w="100px" src="https://static.faballey.com/images/logo.png?v=11.41"/>
            <Text fontSize="30px">Dashboard</Text>
         </Box>
         </Flex>
    </>
  )
}

export default Navbar