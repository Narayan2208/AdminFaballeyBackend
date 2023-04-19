import React, { useContext } from "react";
import { myContext } from "../context/AuthContext";
import { Button, Box } from "@chakra-ui/react";
function Sidebar() {

  let { setBool, setBool2, isBool } = useContext(myContext);
  let handlefunc = () => {
    setBool(true);
    setBool2(false);
    console.log(isBool, "hi");
  };
  let handlefunc2 = () => {
    setBool2(true);
    setBool(false);
  };

  return (
    <>
      <Box
        backgroundColor="white"
        position="fixed"
        w={"15vw"}
        h={"100vh"}
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          mt="20px"
          h={"12vh"}
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
        >
          <Button onClick={handlefunc} borderRadius={"20px"} w={"85%"}>
            User
          </Button>
          <Button onClick={handlefunc2} borderRadius={"20px"} w={"85%"}>
            Products
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Sidebar;
