import React from 'react'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { myContext } from '../context/AuthContext';
import AllAdmins from './AllAdmins';
import Products from './Products';

function Allcomp() {
    let {  isBool, isBool2 } = useContext(myContext);
  return (
    <>

    <Navbar />
    <Sidebar />
    <Box display="flex" justifyContent="space-between">
      <Box w={"15vw"} h={"100vh"}></Box>
      {isBool ? <AllAdmins /> : ""}
      {isBool2 ? <Products /> : ""}
    </Box>
    </>
  )
}

export default Allcomp