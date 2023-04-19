import React from 'react'
import { Text, Box, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from '@chakra-ui/react'
function AllAdmins() {
  return (
    <Box w="85vw" h="100vh" >
   <Box margin="auto" mt="10px" w="80%" mb="5px" background="white"  textAlign="center"><Text fontWeight="bolder" fontSize="30px" p="5px">All Admins</Text></Box> 
    <Box  h="100vh" margin="auto" textAlign="center" w="80vw">
    <TableContainer background="white">
  <Table variant='simple'>
    <TableCaption>All Users</TableCaption>
    <Thead>
      <Tr>
        <Th>All Users</Th>
        <Th>Address</Th>
        <Th>Product Name</Th>
        <Th>Phone</Th>
        <Th>Email</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      
        <Td>Narayan Dutta</Td>
        <Td>India</Td>
        <Td>Shoes</Td>
        <Td>9823477539</Td>
        <Td>abc@gmail.com</Td>
      </Tr>
      <Tr>
        <Td>Soumya</Td>
        <Td>India</Td>
        <Td>Shoes</Td>
        <Td>9823477539</Td>
        <Td>abc@gmail.com</Td>
      </Tr>
      <Tr>
        <Td>Pankaj</Td>
        <Td>India</Td>
        <Td>Shoes</Td>
        <Td>9823477539</Td>
        <Td>abc@gmail.com</Td>
      </Tr>
      <Tr>
        <Td>Masai</Td>
        <Td>India</Td>
        <Td>Shoes</Td>
        <Td>9823477539</Td>
        <Td>abc@gmail.com</Td>
      </Tr>
    </Tbody>

  </Table>
</TableContainer>
   </Box> 
</Box>
  )
}

export default AllAdmins