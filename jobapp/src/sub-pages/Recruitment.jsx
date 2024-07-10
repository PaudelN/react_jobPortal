import React from "react";
import lines44 from "../assets/img/Line44.png";

import { SearchIcon } from "@chakra-ui/icons";
import { Box, Icon, Image, Input, Text } from "@chakra-ui/react";
import { IoPersonCircleSharp } from "react-icons/io5";
import Apply from "../assets/img/Apply.png";
import { Link } from "react-router-dom";
const Recruitment = () => {
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
              placeholder="Search ..."
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

      <Text
        marginLeft={"41rem"}
        marginTop={"20px"}
        fontSize={"20px"}
        letterSpacing={2.5}
      >
        Job Listings
      </Text>
      <Image src={lines44} height={"10px"} marginLeft={"43%"} alt=""></Image>
      <Box
        border={"1px solid"}
        borderRadius={"4px 4px 0px 4px"}
        bgColor={"#faf9f0"}
        zIndex={2}
        height={"200px"}
        w={"75%"}
        marginLeft={"280px"}
      >
        <Box border={"1px solid"} w={"20%"} h={"100%"}>
          {" "}
          Logo of the company goes here
        </Box>
        <Box
          border={"1px solid"}
          position={"absolute"}
          w={"55%"}
          h={"20%"}
          left={"550px"}
          bottom={"125px"}
        >
          Display post, jobtype and salary in this section
        </Box>
        <Box
          border={"1px solid"}
          position={"absolute"}
          w={"55%"}
          h={"20%"}
          left={"550px"}
          bottom={"40px"}
        >
          Location, Deadline and qualifications
        </Box>
        <Link to="/application">
          <Image
            src={Apply}
            alt=""
            h={"6%"}
            cursor={"pointer"}
            marginLeft={"1047.9px"}
            top={"332px"}
            position={"fixed"}
          />
        </Link>
      </Box>
    </>
  );
};

export default Recruitment;
