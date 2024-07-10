import { Box, Icon, Image, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillSendFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import lines44 from "../assets/img/Line44.png";

const Help = () => {
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
      {/* sidebar ko side ko MAIN BOX  */}
      <Box
        marginLeft={"231px"}
        height={"652px"}
        width={"1110px"}
        position={"fixed"}
      >
        {/* live support chat Box  */}
        <Box
          border={"1px solid black"}
          height={"500px"}
          width={"340px"}
          borderRadius={"20px"}
          backgroundColor={"white"}
          left={"400px"}
          top={"23px"}
          position={"relative"}
        >
          {/* live support chat */}
          <Text textAlign={"center"} fontSize={"30px"}>
            Live Support Chat
          </Text>

          <Image
            src={lines44}
            width={"260px"}
            marginLeft={"40px"}
            position={"absolute"}
          ></Image>

          <SimpleGrid
            column={"1"}
            gap={"20px"}
            padding={"20px 0px 0px 45px "}
            position={"absolute"}
          >
            <Box
              bgColor={"#D9D9D9"}
              height={"60px"}
              width={"250px"}
              borde
            ></Box>
            <Box bgColor={"#D9D9D9"} height={"60px"} width={"250px"}></Box>
            <Box bgColor={"#D9D9D9"} height={"60px"} width={"250px"}></Box>
            <Box bgColor={"#D9D9D9"} height={"60px"} width={"250px"}></Box>
            <Box bgColor={"#D9D9D9"} height={"60px"} width={"250px"}></Box>
          </SimpleGrid>
          <Box
            fontSize={"24px"}
            top={"520px"}
            position={"absolute"}
            marginLeft={"10px"}
          >
            <FaPlus />
          </Box>
          <Input
            width={"250px"}
            marginTop={"465px"}
            marginLeft={"44px"}
            placeholder="Type your message..."
            position={"absolute"}
            borderRadius={"5px"}
          ></Input>
          <Box
            fontSize={"24px"}
            marginLeft={"305px"}
            marginTop={"475px"}
            position={"absolute"}
          >
            <BsFillSendFill />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Help;
