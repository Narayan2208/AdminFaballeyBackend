import React, { useContext } from "react";
import { Image, Box, Flex, Text, Button, Spacer } from "@chakra-ui/react";
import { myContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  let {    setSuccess } = useContext(myContext);
  return (
    <>
      <Flex zIndex={"10000"} backgroundColor="white" position="sticky" top="0" p={"7px"} boxShadow={"base"} >
        <Box display="flex" justifyContent="space-between" w="62%">
          <Image
            padding={1}
            src="https://static.faballey.com/images/logo.png?v=11.39"
          />
          <Text fontSize="30px">Dashboard</Text>
        </Box>
        <Spacer/>
        <Button colorScheme="red" onClick={()=>{
          localStorage.setItem("logged-in",false)
          setSuccess(false)
          navigate("/")
        }}>Logout</Button>
      </Flex>
    </>
  );
}

export default Navbar;
