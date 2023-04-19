import React from 'react'
import { Text, Box, Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Image,
    Button, } from '@chakra-ui/react'
import AddProducts from './AddProducts'
function Products() {
  return (
    <Box w="85vw" h="100vh" >
   <Box margin="auto" mt="10px" w="80%" mb="5px" background="white"  textAlign="center"><Text fontWeight="bolder"  fontSize="30px" p="5px">All Admins</Text></Box> 
 <Box w="20%" ml="30px" display={"flex"} flexDirection={"flex-end"}> <AddProducts/></Box> 

    <Box   h="100vh" margin="auto" textAlign="center" w="80vw">
    <TableContainer background="white">
  <Table variant='simple'>
    <TableCaption>All Products</TableCaption>
    <Thead>
      <Tr>
        <Th>Products Image</Th>
        <Th>Products Name</Th>
        <Th>Price</Th>
        <Th>Discount</Th>
        <Th>Category</Th>
        <Th>Description</Th>
        <Th>Delete Items</Th>
        
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Td>
         <Image src={"data:image/jpeg;base64,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"} width={70} height={70} />
       </Td>
        <Td>Lenovo</Td>
        <Td>50000</Td>
        <Td>50%</Td>
        <Td>Laptop</Td>
        <Td>Study meterial</Td>
      <Td> <Button>Delete</Button></Td>
      </Tr>
     
    </Tbody>

  </Table>
</TableContainer>
   </Box> 
</Box>
  )
}

export default Products