import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import { List, Box, Flex } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import logo from "../assets/img/logo.png";
import { CiSliderHorizontal } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatRightText } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import vector from "../assets/img/vector.png";

const Sidebar = () => {
  // const Navigate = useNavigate();
  // const logoutUser = async () => {
  //   const res = await fetch("http://localhost:8080/api/logout",
  //    {
  //     method: "GET",

  //     headers: {
  //       "Content-Type": "application/json",

  //       Accept: "application/json",
  //     },
  //     credentials: "include",
  //   });

  //   const data = await res.json();

  //   if (data.Status === 201) {
  //     Navigate("/login");
  //     console.log("User logged out");
  //     // Clear local storage

  //     localStorage.clear();
  //   } else if (data.Status !== 201) {
  //     console.log("Logout error");
  //   }
  // };

  return (
    <>
      <div className="background">
        <Box>
          <img src={vector} className="vector" alt=""></img>
        </Box>
      </div>
      <Box className="navbar">
        <Box
          className="topsection"
          alignItems={"center"}
          margin={"0px 25px"}
          padding={"10px 20px"}
        >
          <img src={logo} height={"100%"} width={"114px"} alt=""></img>
        </Box>
        <Box marginTop={"15px"} marginLeft={"15px"} display={"flex"}>
          <ul>
            <List paddingLeft={"20px"}>
              <Link to="/userdashboard">
                <RxDashboard
                  fontSize={"20px"}
                  paddingRight={"20px"}
                  cursor={"pointer"}
                />
                Dashboard
              </Link>
            </List>

            <List marginTop={"18px"} paddingLeft={"20px"}>
              <Link to="/filter">
                <CiSliderHorizontal fontSize={"20px"} cursor={"pointer"} />
                Filter
              </Link>
            </List>

            <List marginTop={"18px"} paddingLeft={"20px"}>
              <Link to="/notification">
                <IoMdNotificationsOutline
                  fontSize={"20px"}
                  cursor={"pointer"}
                />
                Notification
              </Link>
            </List>
            <List marginTop={"18px"} paddingLeft={"20px"}>
              <Link to="/setting">
                <IoSettingsOutline fontSize={"20px"} cursor={"pointer"} />
                Setting
              </Link>
            </List>
            <List marginTop={"18px"} paddingLeft={"20px"}>
              <Link to="/chat">
                <BsChatRightText fontSize={"20px"} cursor={"pointer"} />
                Chat
              </Link>
            </List>
          </ul>
        </Box>
        <ul>
          <Flex
            as="footer"
            align="center"
            justify="center"
            direction="column"
            marginTop={"43.8vh"}
            left={"0px"}
          >
            <List>
              <Link to="/help">
                Help
                <IoMdHelpCircleOutline fontSize={"22px"} cursor={"pointer"} />
              </Link>
            </List>
            <List marginTop={"0%"}>
              <Link>
                Logout
                <RiLogoutBoxLine fontSize={"20px"} cursor={"pointer"} />
              </Link>
            </List>
          </Flex>
        </ul>
      </Box>
      <Outlet />
    </>
  );
};

export default Sidebar;
