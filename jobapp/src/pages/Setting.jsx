import React from "react";

import { Box, Button, Text, Icon, Tooltip } from "@chakra-ui/react";
import { IoPersonCircleSharp } from "react-icons/io5";

import { SettingsIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoNotificationsOff } from "react-icons/io5";
import { Link } from "react-router-dom";

const Setting = () => {
  return (
    <>
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

      <Box
        height={"60vh"}
        width={"25vw"}
        marginLeft={"30vw"}
        paddingTop={"20vh"}
        top={"100px"}
        position={"relative"}
        border={"px solid black"}
        borderRadius={"20px"}
        bgColor={"#DDDBCB"}
        boxShadow={"1px 4px 5px black"}
        textAlign={"center"}
      >
        <Text
          fontSize={"large"}
          fontWeight={"bold"}
          letterSpacing={2}
          fontFamily={"Times New Roman"}
          marginTop={""}
          position={"absolute"}
          top={"5.3vh"}
          left={"135px"}
          alignItems={"center"}
        >
          <SettingsIcon /> Settings
        </Text>
        <Box
          height={"px"}
          border={"1px solid black"}
          width={"20vw"}
          position={"absolute"}
          top={"10vh"}
          left={"2vw"}
        ></Box>

        <Text
          letterSpacing={2}
          fontFamily={"Times New Roman"}
          marginTop={""}
          fontSize={"large"}
         
          position={"absolute"}
          top={"15vh"}
          left={"55px"}
        >
          Notifications
        </Text>
        <Icon
          fontSize={"25px"}
          as={IoNotificationsOff}
          position={"relative"}
          left={"165px"}
          bottom={"34px"}
        ></Icon>

        <Button
          letterSpacing={2}
          fontFamily={"Times New Roman"}
          marginTop={""}
          position={"absolute"}
          top={"20vh"}
          bgColor={"#DDDBCB"}
          left={"38px"}
          color={"black"}
        >
          Update Password
          <ChevronRightIcon
            position={"relative"}
            left={"133px"}
            cursor={"pointer"}
          />
        </Button>

        <Button
          letterSpacing={2}
          fontFamily={"Times New Roman"}
          marginTop={""}
          position={"absolute"}
          top={"27vh"}
          bgColor={"#DDDBCB"}
          left={"40px"}
          color={"red"}
        >
          Delete Account
          <Tooltip>
            <ChevronRightIcon
              position={"relative"}
              left={"150px"}
              cursor={"pointer"}
            />
          </Tooltip>
        </Button>
      </Box>

      <Button
        border={"1px solid"}
        position={"absolute"}
        left={"38vw"}
        top={"79vh"}
        boxShadow={"5px 5px 5px grey"}
        cursor={"pointer"}
        borderRadius={"7px"}
        letterSpacing={2}
        bgColor={"#faf9f0"}
      >
        Save Changes
      </Button>
    </>
  );
};

export default Setting;
