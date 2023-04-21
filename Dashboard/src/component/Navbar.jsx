import React, { useContext } from "react";
import { Image, Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { myContext } from "../context/AuthContext";
function Navbar() {
  let {    setSuccess } = useContext(myContext);
  return (
    <>
      <Flex zIndex={"10000"} backgroundColor="white" position="sticky" top="0">
        <Box display="flex" justifyContent="space-between" w="62%">
          <Image
            padding={1}
            src="https://static.faballey.com/images/logo.png?v=11.39"
          />
          <Text fontSize="30px">Dashboard</Text>
        </Box>
        <Spacer/>
        <Button onClick={()=>{
          localStorage.setItem("logged-in",false)
          setSuccess(false)
        }}>Logout</Button>
      </Flex>
    </>
  );
}

export default Navbar;
