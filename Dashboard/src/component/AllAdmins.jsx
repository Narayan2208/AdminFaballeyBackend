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
} from "@chakra-ui/react";
function AllAdmins() {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      let res = await fetch(
        "https://backend-faballey.vercel.app/faballey/users"
      );
      let data = await res.json();
      console.log("data: ", data);
      setUserdata(data);
    }
    fetchdata();
  }, []);
  return (
    <Box w="85vw" h="100vh">
      <Box
        margin="auto"
        mt="10px"
        w="90%"
        mb="5px"
        background="white"
        textAlign="center"
        color={"blue"}
      >
        <Text fontWeight="bolder" fontSize="30px" p="5px">
          All Admins
        </Text>
      </Box>
      <Box h="100vh" margin="auto" textAlign="center" w="80vw">
        <TableContainer background="white">
          <Table variant="simple">
            <TableCaption>All Users</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Mode Of Login</Th>
                <Th>Joined Date</Th>
                <Th>Id</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* createdAt : "2023-04-20T14:17:28.995Z" email :
              "soumyaswaroopsootar+12@gmail.com" method : "ByEmail&password"
              name : "Soumya" password :
              "$2b$04$yhMgXrWGcOT4dezqNrScI.Bcu2yQRuDOcYWvAnO/RCFQgVuWLR6m."
              updatedAt : "2023-04-20T14:17:28.995Z" __v : 0 _id :
              "64414978a19035c2c3966702" */}
              {userdata.map((e) => {
                const dateString = e.createdAt;
                const date = new Date(dateString);
                const year = date.getFullYear();
                const month = date.getMonth() + 1;
                const day = date.getDate();
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const seconds = date.getSeconds();
                return (
                  <Tr>
                    <Td>{e.name}</Td>
                    <Td>{e.method}</Td>
                    <Td>{`${day}/${month}/${year}-${hours}:${minutes}:${seconds}`}</Td>
                    <Td>{e._id}</Td>
                    <Td>{e.email}</Td>
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

export default AllAdmins;
