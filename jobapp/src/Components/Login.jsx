//make a react component name layout.mm

import {
  Flex,
  Image,
  Box,
  Text,
  Input,
  Button,
  Checkbox,
  Icon,
} from "@chakra-ui/react";
import runningman from "../assets/img/runningMan.png";
import { Link, useNavigate } from "react-router-dom";
import vector from "../assets/img/vector.png";
import logo from "../assets/img/logo.png";
import { IoIosMail } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    const { name, value } = e.target;
    setValues(() => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = values;

    if (email === "") {
      alert("Please enter your email");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 6) {
      alert("Password must have at least 6 characters");
    } else {
      const data = await fetch("http://localhost:8009/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const res = await data.json();

      if (res.status === 201) {
        localStorage.setItem("usersdatatoken", res.result.token);
        setValues({
          ...values,
          email: "",
          password: "",
        });
        Navigate("/userdashboard");
      }
    }
  };

  return (
    <>
      <div className="background">
        <Box>
          <img src={vector} className="vector" alt=""></img>
        </Box>
      </div>
      <Image
        src={runningman}
        height={"100vh"}
        width={"auto"}
        position={"absolute"}
      />
      <Image
        src={logo}
        alt=""
        position={"relative"}
        left={"0%"}
        height={"100%"}
        width={"114px"}
      />
      <form onSubmit={handleSubmit}>
        <Box
          height={"400px"}
          width={"440px"}
          bgColor={"#DDDBCB"}
          border={"1px solid black"}
          borderRadius={"30px"}
          boxShadow={"5px 1px 25px "}
          position={"absolute"}
          top={"230px"}
          right={"270px"}
        >
          <Text
            textAlign={"center"}
            mt={"20px"}
            fontFamily={"Times New Roman"}
            fontSize={"larger"}
            letterSpacing={2}
            fontWeight={600}
          >
            Login Panel
          </Text>
          <Text
            textAlign={"start"}
            mt={"50px"}
            marginLeft={"115px"}
            fontFamily={"serif"}
          >
            Email
          </Text>
          <Input
            value={values.email}
            type="email"
            name="email"
            backgroundColor={"white"}
            border={"1px solid"}
            position={"absolute"}
            left={"25%"}
            borderRadius={"5px"}
            height={"25px"}
            width={"15vw"}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <Icon
            as={IoIosMail}
            color={"#545252"}
            position={"relative"}
            left={"5.78rem"}
            top={"4px"}
          />

          <Text
            textAlign={"start"}
            mt={"35px"}
            marginLeft={"115px"}
            fontFamily={"serif"}
          >
            Password
          </Text>
          <Box display={"flex"}>
            <Input
              isrequired="true"
              value={values.password}
              name="password"
              backgroundColor={"white"}
              _hover={{ border: "none", bgColor: "none" }}
              border={"1px solid"}
              position={"absolute"}
              left={"25%"}
              borderRadius={"5px"}
              height={"25px"}
              width={"15vw"}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            ></Input>

            <Icon
              as={IoLockClosed}
              color={"#545252"}
              position={"relative"}
              left={"5.78rem"}
              top={"4px"}
            />
          </Box>
          <Flex justifyContent={"center"} mt={"35px"}>
            <Button
              _hover={{ borderColor: "black", boxShadow: "none" }}
              bgColor={"#828282"}
              width={"10vw"}
              color={"white"}
              border={"1px solid"}
              height={"25px"}
              borderRadius={"5px"}
              cursor={"pointer"}
              type="submit"
              fontSize={"16px"}
              onClick={loginUser}
            >
              Login
            </Button>
          </Flex>

          <Flex justifyContent={"center"} mt={"10px"}>
            <Checkbox
              border={"1px solid"}
              h={"18px"}
              mt={"4px"}
              colorScheme="yellow"
              ml={"-34px"}
            ></Checkbox>

            <Text ml={"10px"}>Keep me logged In</Text>
          </Flex>

          <Link to="/signup">
            <Flex justifyContent={"center"} mt={"6px"} cursor={"pointer"}>
              <Text color={"#a59b47"} fontFamily={"serif"}>
                Don't have an account ?
              </Text>
              <Text ml={"10px"} fontSize={"medium"}>
                <ul> Sign up</ul>
              </Text>
            </Flex>
          </Link>
        </Box>
      </form>
    </>
  );
};

export default Login;
