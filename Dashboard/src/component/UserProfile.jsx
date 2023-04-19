import React from "react";
import { Image, Box, Text } from "@chakra-ui/react";
function UserProfile() {
  return (
    <>
      <Box position="fixed" left="15%" w="85vw" zIndex="1000" h="100vh">
        <Box h="100vh" background="white" w="80vw" margin="auto">
          <Box
            background="lightBlue"
            position="relative"
            h="30vh"
            margin="auto"
            textAlign="center"
            w="100%"
          >
            <Box position="absolute" top="80%" left="45%" w="10%">
              <Image
                borderRadius="150px"
                w="100%"
                h="100%"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVeOJcusEWdifyJ64z_YQmla65P0-l7nZcaN_JJA84Da_vp6NA4fmhZRDZIWumX9uytoCb63asFOw&usqp=CAU&ec=48665698"
                alt="Dan Abramov"
              />
            </Box>
          </Box>
          <Box textAlign="center" mt="60px">
            <Text fontSize="20px" fontWeight="bold">
              Narayan Dutta
            </Text>
          </Box>
          <Box
            background="tomato"
            w="60%"
            h="40vh"
            position="absolute"
            top="45%"
            left="20%"
          ></Box>
        </Box>
      </Box>
    </>
  );
}

export default UserProfile;
