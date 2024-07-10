import { Box, Input, Text, Button, Flex, Image } from "@chakra-ui/react";
import facebook from "../assets/icons/facebook.png";
import google from "../assets/icons/google.png";
import stand from "../assets/img/stand.png";
import { Checkbox } from "@chakra-ui/react";
import vector from "../assets/img/vector.png";
import logo from "../assets/img/logo.png";
import lines44 from "../assets/img/Line44.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    cpassword: "",
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

  const addUserdata = async (e) => {
    e.preventDefault();

    const { email, username, password, cpassword } = values;

    if (email === "") {
      alert("Please enter your email");
    } else if (username === "") {
      alert("Please enter your username");
    } else if (password === "") {
      alert("Please enter your password");
    } else if (password.length < 6) {
      alert("Password must have at least 6 characters");
    } else if (cpassword === "") {
      alert("Confirm Password must be filled");
    } else if (password !== cpassword) {
      alert("Password and Confirm Password do not match");
    } else {
      // console.log("Registration Successful");

      const data = await fetch("http://localhost:8009/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, cpassword }),
      });
      const res = await data.json();

      if (res.status === 201) {
        setValues({
          ...values,
          email: "",
          username: "",
          password: "",
          cpassword: "",
        });
        Navigate("/login");
      }
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios
  //       .post("http://localhost:8080/api/signup", values)
  //       .then(() => {
  //         navigate("/login");
  //       })
  //       .catch((err) => console.log(err));
  //     console.log("Registered Successfully", response);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  //   console.log("Email:", values.email);
  // };

  return (
    <>
      <div className="background">
        <Box>
          <img src={vector} className="vector" alt=""></img>
        </Box>
      </div>
      <Image src={logo} alt="" position={"absolute"} h={"92px"} w={"114px"} />
      <Image
        src={stand}
        alt=""
        height={"100vh"}
        width={"auto"}
        ml={"20vw"}
      ></Image>

      <Box
        bgColor={"#C1C1C1"}
        height={"80vh"}
        width={"25vw"}
        position={"absolute"}
        top={"10vh"}
        right={"40vh"}
        borderRadius={"20px"}
        boxShadow={"1px 2px 20px black"}
      >
        <Text
          textAlign={"center"}
          fontFamily={"Times New Roman"}
          fontSize={"larger"}
          letterSpacing={2}
          fontWeight={600}
        >
          Create Account
        </Text>
        <form onSubmit={handleSubmit}>
          <Box
            bgColor={"#DDDBCB"}
            borderRadius={"15px"}
            height={"70vh"}
            width={"20vw"}
            position={"relative"}
            left={"34px"}
            top={"3vh"}
          >
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"4.5vh"}
              fontFamily={"serif"}
            >
              Email
            </Text>
            <Input
              isrequired="true"
              name="email"
              value={values.email}
              type="email"
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"8vh"}
              height={"28px"}
              width={"250px"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
              }}
            ></Input>
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"14.5vh"}
              fontFamily={"serif"}
            >
              Username
            </Text>
            <Input
              isrequired="true"
              type="text"
              value={values.username}
              name="username"
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"18vh"}
              height={"28px"}
              width={"250px"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, username: e.target.value });
              }}
            ></Input>
            <Text
              position={"absolute"}
              left={"2vw"}
              top={"24.5vh"}
              fontFamily={"serif"}
            >
              Password
            </Text>
            <Input
              isrequired="true"
              name="password"
              value={values.password}
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"28vh"}
              height={"28px"}
              width={"250px"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, password: e.target.value });
              }}
            ></Input>

            <Text
              position={"absolute"}
              left={"2vw"}
              top={"34.5vh"}
              fontFamily={"serif"}
            >
              Confirm Password
            </Text>

            <Input
              value={values.cpassword}
              isrequired="true"
              name="confirmpassword"
              border={"1px solid"}
              borderRadius={"2px"}
              position={"absolute"}
              left={"2vw"}
              top={"38vh"}
              height={"28px"}
              width={"250px"}
              bgColor={"DDDBCB"}
              onChange={(e) => {
                setValues({ ...values, cpassword: e.target.value });
              }}
            ></Input>

            <Image
              src={lines44}
              height={"13px"}
              marginLeft={"33%"}
              position={"absolute"}
              left={"-50px"}
              top={"-20px"}
            ></Image>
            <Flex position={"relative"} left={"31px"} top={"44vh"} gap={"5px"}>
              <Checkbox
                isrequired="true"
                colorScheme="yellow"
                border={"1.4px solid"}
                h={"17px"}
              ></Checkbox>
              <Text fontFamily={"serif"} marginLeft={"2px"}>
                I Agree to{" "}
                <Link to={"/termsandcondition"}> Terms and Conditons </Link>
              </Text>
            </Flex>

            <Button
              height={"35px"}
              width={"150px"}
              position={"absolute"}
              transition={".25s"}
              left={"4vw"}
              top={"52vh"}
              bgColor={"#828282 "}
              border={"none"}
              color={"white"}
              cursor={"pointer"}
              fontFamily={"serif"}
              _hover={{
                bgColor: "#454545 0.25s ease",
                transition: "0.25s",
                boxShadow: "2px 4px 10px black",
              }}
              onClick={addUserdata}
              type="submit"
              name="submit"
              value="submit"
            >
              Sign up
            </Button>
          </Box>
          <Image
            src={facebook}
            position={"absolute"}
            left={"9vw"}
            top={"65vh"}
            height={"22px"}
            _hover={{ cursor: "pointer" }}
          ></Image>

          <Image
            src={google}
            position={"absolute"}
            height={"22px"}
            left={"9vw"}
            top={"69.5vh"}
            _hover={{ cursor: "pointer" }}
          ></Image>
        </form>
      </Box>
    </>
  );
};
export default Signup;
