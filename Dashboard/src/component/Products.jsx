import React, { useEffect, useState } from "react";
import {
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Button,
} from "@chakra-ui/react";
import AddProducts from "./AddProducts";
function Products() {
  const [product, setProduct] = useState([]);
  console.log("product: ", product);

  useEffect(() => {
    async function fetchdata() {
      let res = await fetch(
        "https://backend-faballey.vercel.app/faballey/tops"
      );
      let data = await res.json();
      let res1 = await fetch(
        "https://backend-faballey.vercel.app/faballey/dress"
      );
      let data1 = await res1.json();
      console.log("data: ", data);
      setProduct([...data, ...data1]);
    }
    fetchdata();
  }, []);
  return (
    <Box w="85vw" h="100vh">
      <Box
        margin="auto"
        mt="10px"
        w="80%"
        mb="5px"
        background="white"
        textAlign="center"
      >
        <Text fontWeight="bolder" fontSize="30px" p="5px">
          All Admins
        </Text>
      </Box>
      <Box w="20%" m="30px" display={"flex"}  flexDirection={"flex-end"}>
        {" "}
        <AddProducts />
      </Box>

      <Box h="100vh" margin="auto" textAlign="center" w="80vw">
        <TableContainer background="white">
          <Table variant="simple">
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
              {product.map((e) => {
                return (
                  <Tr>
                    <Td>
                      <Image src={e.img1} width={70}  />
                    </Td>
                    <Td>{e.title}</Td>
                    <Td>Rs.{e.price1}/Rs.{e.price2}</Td>
                    <Td>{e.discount}%</Td>
                    <Td>{e.category}</Td>
                    <Td><a href={e.site} rel="noreferrer" target="_blank" style={{color:"blue",textDecoration:"underline"}}>Link</a></Td>
                    <Td><Button colorScheme="red">Delete</Button></Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Products;
