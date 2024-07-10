import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Box, Icon, Image, Input, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import lines44 from "../assets/img/Line44.png";

const Notification = () => {
  return (
    <>
      <Box display={"flex"}>
        <Box
          display={"flex"}
          gap={"220px"}
          marginLeft={"57px"}
          marginTop={"28px"}
        >
          <form action="/search" method="get" backgroundColor={"#414141"}>
            <Input
              type="text"
              id="search"
              name="q"
              placeholder="Search..."
              _placeholder={{
                color: "white",
                letterSpacing: "2",
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
      </Box>
      <Box
        border={"1px solid"}
        borderRadius={"10px"}
        position={"absolute"}
        bgColor={"#faf9f0"}
        top={"80px"}
        h={"85vh"}
        w={"65vw"}
        ml={"405px"}
      >
        <Text
          fontFamily={"New times Roman"}
          fontSize={"24px"}
          letterSpacing={2}
          ml={"27vw"}
          mt={"10px"}
        >
          Notifications
        </Text>
        <Image src={lines44} h={"17px"} ml={"23vw"}></Image>

        <Box height={"100px"} width={"50vw "} border={"1px solid"} bgColor={"white"} ml={"100px"} mt={"10px"}> Time/New Job listed/ By which company will be shown here</Box>
        <Box height={"100px"} width={"50vw "} border={"1px solid"} bgColor={"white"} ml={"100px"} mt={"10px"}> Time/New Job listed/ By which company will be shown here</Box>
        <Box height={"100px"} width={"50vw "} border={"1px solid"} bgColor={"white"} ml={"100px"} mt={"10px"}> Time/New Job listed/ By which company will be shown here</Box>
        <Box height={"100px"} width={"50vw "} border={"1px solid"} bgColor={"white"} ml={"100px"} mt={"10px"}> Time/New Job listed/ By which company will be shown here</Box>
        <Box height={"100px"} width={"50vw "} border={"1px solid"} bgColor={"white"} ml={"100px"} mt={"10px"}> Time/New Job listed/ By which company will be shown here</Box>

      </Box>
    </>
  );
};

export default Notification;
