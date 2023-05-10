import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { myContext } from "../../context/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let {    setSuccess } = useContext(myContext);
  const toast = useToast();
  let login=localStorage.getItem("logged-in")||false
  setSuccess(login)
  console.log("login: ", login);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if ((username === "admin" && password === "admin")) {
      localStorage.setItem("logged-in",true)
      toast({
        title: "Login successful",
        status: "success",
        isClosable: true,
      });
      setSuccess(true);
      navigate("/faballey");

    } else {
      toast({
        title: "Invalid credentials",
        description: "Please try again with correct credentials",
        status: "error",
        isClosable: true,
      });
      setSuccess(false);
    }
  };

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg="gray.200"
        pt="90px"
     
    >
      <Box
        bg="white"
        w="400px"
        p="6"
        m="auto"
        borderRadius="md"
        boxShadow="md"
        textAlign="center"
      >
        <Icon as={FaUser} w="12" h="12" mx="auto" />
        <Heading mt="6">Login</Heading>
        <form onSubmit={handleLogin}>
          <FormControl id="username" mt="6">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="password" mt="4">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt="6" w="full">
            Login
          </Button>
        </form>
        <Text mt="4" fontSize="sm">
          Hint: Use "admin" for both username and password
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
