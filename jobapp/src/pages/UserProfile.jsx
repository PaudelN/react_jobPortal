import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const UserProfile = () => {
  
  return (
    <>
      {" "}
      <Box
        border={"1px solid"}
        borderRadius={"10px"}
        position={"absolute"}
        bgColor={"#faf9f0"}
        top={"60px"}
        h={"85vh"}
        w={"35vw"}
        ml={"522px"}
        t={"100px"}
      >
        <Text
          marginLeft={"20vw"}
          color={"black"}
          fontSize={"24px"}
          letterSpacing={2}
          mt={"10px"}
        >
          Portfolio{" "}
        </Text>
        <Box
          backgroundColor={"black"}
          h={"1px"}
          w={"290px"}
          marginLeft={"200px"}
        ></Box>
        <Text marginLeft={"17.5vw"} color={"black"}>
          This place shows the name
        </Text>
        <Button
          bgColor={"#D9D9D9"}
          border={"1px solid"}
          borderRadius={"3px"}
          boxShadow={"2px 3px 5px grey"}
          h={"40px"}
          position={"absolute"}
          left={"475px"}
          top={"610px"}
        >
          {" "}
          Hire Me
        </Button>
      </Box>
      <Box
        border={"1px solid #414141"}
        height={"190px"}
        width={"190px"}
        position={"absolute"}
        left={"470px"}
        top={"10px"}
        borderRadius={"100px"}
        backgroundColor={"#D9D9D9"}
      ></Box>{" "}
    </>
  );
};

export default UserProfile;
