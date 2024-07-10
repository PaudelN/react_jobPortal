import { SearchIcon } from "@chakra-ui/icons";
import { Box, Icon, Input, Text } from "@chakra-ui/react";
import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <>
      <Box border={"1px solid white "} h={"10vh"} marginLeft={"19%"}>
        <Link to="/userprofile">
          <Box
            cursor={"pointer"}
            display={"flex"}
            position={"absolute"}
            right={"40px"}
            gap={"10px"}
            marginTop={"28.8px"}
            zIndex={"2"}
            alignItems={"center"}
          >
            <Icon
              as={IoPersonCircleSharp}
              height={"30px"}
              width={"30px"}
              color={"white"}
              cursor={"pointer"}
            />
            <Text fontWeight={600} color={"white"}>
              Profile
            </Text>
          </Box>
        </Link>
        <Box display={"flex"} gap={"220px"} marginTop={"28px"}>
          <form action="/search" method="get" backgroundColor={"#414141"}>
            <Input
              type="text"
              id="search"
              name="q"
              placeholder="Search Templates ..."
              _placeholder={{
                color: "#faf9f0",
              }}
              backgroundColor={"#414141"}
              color={"white"}
              borderRadius={"7px"}
              height={"30px"}
            />
          </form>
          <SearchIcon
            height={"28px"}
            marginLeft={"-200px"}
            cursor={"pointer"}
          />
        </Box>
      </Box>
      <Box
        border={"1px solid"}
        boxShadow={"5px 5px 5px grey"}
        borderRadius={"10px"}
        bg={"#faf9f0"}
        h={"85vh"}
        w={"80vw"}
        ml={"18%"}
        mt={"10px"}
      ></Box>
    </>
  );
};

export default Templates;
