import React, { useEffect } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Box, Text, Input, Icon, Image, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { GiCircularSaw } from "react-icons/gi";
import quota from "../assets/img/quota.png";
import monitor from "../assets/img/monitor.png";
import line_chart from "../assets/img/line-chart.png";
import cvgroup from "../assets/img/cvgroup.png";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const Navigate = useNavigate();
  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("http://localhost:8009/api/dashboard", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();
    if (data.status === 401 || !data) {
      Navigate("*");
    } else {
      Navigate("/userdashboard");
    }
  };

  useEffect(() => {
    DashboardValid();
  }, []);

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
      <Box height={"auto"} width={"79%"} marginLeft={"17%"}>
        <Text fontWeight={"600"} marginTop={"30px"}>
          <span className="goldenText">Looking</span> for a Job?
        </Text>
        <Box
          lineHeight={"125%"}
          maxWidth={"11%"}
          marginLeft={"6.5%"}
          overflow={"hidden"}
        >
          <Text fontStyle={"oblique"}>
            Click below to find the best startup job that fits you with the help
            of an <span className="analyzer">analyzer.</span>
          </Text>
        </Box>
        <Link to="/analyzer">
          <Box
            cursor={"pointer"}
            border={"1px solid black"}
            backgroundColor={"#DDDBCB"}
            position={"relative"}
            left={"10%"}
            width={"352px"}
            height={"250px"}
            boxShadow={"7px 7px 7px #414141"}
            top={"40px"}
          >
            <Text
              marginTop={"10px"}
              marginLeft={"110px"}
              display={"flex"}
              fontWeight={"600"}
              fontSize={"larger"}
              lineHeight={"1em"}
              gap={"5px"}
            >
              A n a l y z e r
              <GiCircularSaw />
            </Text>
            <Box
              display={"flex"}
              marginRight={"90%"}
              gap={"205%"}
              height={"80px"}
              width={"80px"}
            >
              <Image src={quota} alt="image" marginLeft={"10px"}></Image>
              <Image src={monitor} alt="image"></Image>
            </Box>
            <Image
              src={line_chart}
              display={"block"}
              position={"absolute"}
              height={"40%"}
              top={"120px"}
              left={"32%"}
            ></Image>
          </Box>
        </Link>
        <Link to="/cvmaker">
          <Box
            cursor={"pointer"}
            backgroundColor={"#DDDBCB"}
            position={"absolute"}
            width={"300px"}
            height={"372px"}
            boxShadow={"7px 7px 7px #414141"}
            border={"1px solid black"}
            top={"20%"}
            left={"60%"}
          >
            <Box
              border={"1px solid black"}
              backgroundColor={"#DDDBCB"}
              borderRadius={"50px"}
              height={"50px"}
              width={"110px"}
              position={"absolute"}
              left={"30%"}
              top={"-6.5%"}
              textAlign={"center"}
            >
              <Text fontWeight={"600"} marginTop={"10px"} fontSize={"x-large"}>
                C V
              </Text>

              <Image
                maxWidth={"250px"}
                src={cvgroup}
                position={"relative"}
                right={"70px"}
                top={"30px"}
              ></Image>
            </Box>
          </Box>
        </Link>
        <Link to="/recruitment">
          <Box
            border={"1px solid black"}
            backgroundColor={"#DDDBCB"}
            borderRadius={"10px"}
            width={"369px"}
            height={"111px"}
            position={"absolute"}
            top={"620px"}
            bottom={"0px"}
            left={"47%"}
            boxShadow={"7px 7px 7px #414141"}
          >
            <Text textAlign={"center"} fontWeight={600}>
              R e c r u i t m e n t
            </Text>
            <Text
              lineHeight={"1.5rem"}
              marginLeft={"10px"}
              fontFamily={"Times New Roman"}
            >
              Explore Analysis, Posting, Screening, Filtering, Available jobs
              with complete details using recruitment.
            </Text>
            <Button
              left={"268px"}
              border={"1px solid"}
              backgroundColor={"#D9D9D9"}
              bottom={"2px"}
              h={"40px"}
              w={"100px"}
              borderRadius={"0px 0px 10px 0"}
            >
              Explore
            </Button>
          </Box>
        </Link>
      </Box>
      <Outlet />
    </>
  );
};

export default Dashboard;
