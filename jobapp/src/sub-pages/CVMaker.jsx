import {
  Box,
  Button,
  FormControl,
  Icon,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import cvPrototype from "../assets/img/cvProtoype.png";
import lines44 from "../assets/img/Line44.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import user from "../assets/img/user.png";
import { IoIosArrowRoundUp } from "react-icons/io";
import nobg from "../assets/img/nobg.png";
import { RiUploadCloud2Fill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaArrowTurnDown } from "react-icons/fa6";

const CVMaker = () => {
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
      <Image
        top={"20px"}
        border={"1px solid"}
        borderRadius={"15px"}
        boxShadow={"7px 7px 7px #434141"}
        src={cvPrototype}
        alt=""
        height={"60vh"}
        marginLeft={"20%"}
        position={"relative"}
      />
      <Link to={"/templates"}>
        <Button
          border={"1px solid black"}
          backgroundColor={"#434141"}
          color={"white"}
          borderRadius={"none"}
          left={"6.7%"}
          top={"20px"}
          _hover={{
            bg: "none",
            color: "black",
            boxShadow: "none",
          }}
        >
          {" "}
          Templates
        </Button>
      </Link>

      <Box
        m={0}
        p={0}
        border={"1px solid"}
        position={"absolute"}
        h={"80px"}
        w={"180px"}
        top={"650px"}
        left={"301.44px"}
      >
        <Text fontSize={"16px"} m={"5px"}>
          Upload Your own CV
        </Text>
        <Icon as={RiUploadCloud2Fill} fontSize={"40px"} marginLeft={"60px"} />

        <Image
          src={nobg}
          position={"fixed"}
          height={"82px"}
          marginLeft={"162px"}
          marginTop={"-81px"}
        />
      </Box>
      <Box h={"82vh"} width={"35%"} pos={"absolute"} left={"55%"} top={"5%"}>
        <Text
          textAlign={"center"}
          fontFamily={"New Times Roman"}
          letterSpacing={2}
          marginBottom={"0px"}
          marginTop={"0px"}
          fontSize={"20px"}
          display={"flex"}
        >
          Create your own CV here
          <Icon as={FaArrowTurnDown} />
        </Text>

        <Box
          border={"1px solid black"}
          backgroundColor={"#faf9f0"}
          w={"100%"}
          h={"100%"}
        >
          <Text textAlign={"center"} marginTop={"10px"} letterSpacing={2}>
            Enter Details
          </Text>
          <Image src={lines44} height={"10px"} marginLeft={"33%"}></Image>
          <Box backgroundColor={"black"} h={"1px"} width={"100%"}></Box>
          <Box
            backgroundColor={"black"}
            h={"92.5%"}
            width={"1px"}
            position={"absolute"}
            left={"47%"}
          ></Box>

          <Box
            border={"1px solid"}
            borderRadius={"3px"}
            height={"20vh"}
            w={"37%"}
            m={"10px"}
          >
            <Image
              h={"35%"}
              src={user}
              borderRadius={"5px"}
              position={"relative"}
              left={"35%"}
              top={"20%"}
            />
            <Text
              fontSize={"14px"}
              letterSpacing={2}
              marginLeft={"18px"}
              marginTop={"40px"}
            >
              Upload your
              <br />
              Image here
            </Text>
            <Icon
              as={IoIosArrowRoundUp}
              position={"absolute"}
              fontSize={"45px"}
              left={"25%"}
              top={"29.56%"}
            />
          </Box>
          <Box height={"25vh"} w={"45%"} mt={4} marginLeft={"25px"}>
            <FormControl id="email" w={"70%"} isRequired>
              <Box border={"1px solid"} display={"flex"} borderRadius={"2px"}>
                <Icon as={FaLocationDot} fontSize={"20px"} margin={"6px"} />
                <Box border={"0.1px solid grey"} />
                <Input
                  h={"32px"}
                  type="text"
                  _hover={{ borderColor: "black", boxShadow: "none" }}
                  border={"none"}
                  borderRadius={"none"}
                  placeholder="Location"
                  _placeholder={{
                    color: "grey",
                    letterSpacing: 4,
                    marginTop: "0px",
                    fontSize: "16",

                    fontFamily: "New",
                  }}
                  color={"black"}
                />
              </Box>

              <Box
                mt={2}
                border={"1px solid"}
                display={"flex"}
                borderRadius={"2px"}
              >
                <Icon as={FaPhone} fontSize={"20px"} margin={"6px"} />
                <Box border={"0.1px solid grey"} />
                <Input
                  h={"32px"}
                  type="number"
                  _hover={{ borderColor: "black", boxShadow: "none" }}
                  border={"none"}
                  borderRadius={"none"}
                  placeholder="Phone"
                  _placeholder={{
                    fontSize: "16",
                    color: "grey",
                    letterSpacing: 4,
                    fontFamily: "New",
                  }}
                  color={"black"}
                />
              </Box>

              <Box
                mt={2}
                border={"1px solid"}
                display={"flex"}
                borderRadius={"2px"}
              >
                <Icon as={MdEmail} fontSize={"20px"} margin={"6px"} />
                <Box border={"0.1px solid grey"} />
                <Input
                  h={"32px"}
                  type="email"
                  _hover={{ borderColor: "black", boxShadow: "none" }}
                  border={"none"}
                  borderRadius={"none"}
                  placeholder="Email"
                  _placeholder={{
                    fontSize: "16",
                    color: "grey",
                    letterSpacing: 4,
                    fontFamily: "New",
                  }}
                  color={"black"}
                />
              </Box>
              <Box
                mt={2}
                border={"1px solid"}
                display={"flex"}
                borderRadius={"2px"}
              >
                <Icon as={MdDateRange} fontSize={"20px"} margin={"6px"} />
                <Box border={"0.1px solid grey"} />
                <Input
                  h={"32px"}
                  type="text"
                  _hover={{ borderColor: "black", boxShadow: "none" }}
                  border={"none"}
                  borderRadius={"none"}
                  placeholder="Date"
                  _placeholder={{
                    fontSize: "16",
                    color: "grey",
                    letterSpacing: 4,
                    fontFamily: "New",
                  }}
                  color={"black"}
                />
              </Box>
            </FormControl>
          </Box>
          <Box
            border={"1px solid"}
            borderRadius={"0px"}
            height={"30%"}
            w={"43%"}
            marginLeft={"10px"}
          >
            <Input
              h={"50%"}
              w={"85%"}
              borderRadius={"5px"}
              margin={"16px"}
              type="text"
              _hover={{ borderColor: "black", boxShadow: "none" }}
              placeholder="Skills"
              _placeholder={{
                color: "grey",
                fontSize: "18",
                letterSpacing: 4,
                textAlign: "center",
                fontFamily: "New",
              }}
              color={"black"}
            />
            <Input
              w={"85%"}
              borderRadius={"0px"}
              marginLeft={"16px"}
              type="text"
              _hover={{ borderColor: "black", boxShadow: "none" }}
              placeholder="Language"
              _placeholder={{
                color: "grey",
                fontSize: "17",
                letterSpacing: 4,
                textAlign: "center",
                fontFamily: "New",
              }}
              color={"black"}
            />
          </Box>
          <Input
            h={"49px"}
            w={"40%"}
            position={"absolute"}
            top={"15%"}
            left={"50%"}
            borderRadius={"5px"}
            margin={"16px"}
            type="text"
            _hover={{ borderColor: "black", boxShadow: "none" }}
            placeholder="Full Name"
            _placeholder={{
              color: "grey",
              fontSize: "16",
              letterSpacing: 4,
              textAlign: "center",
              fontFamily: "New",
            }}
            color={"black"}
          />
          <Input
            h={"49px"}
            w={"40%"}
            position={"absolute"}
            top={"25%"}
            left={"50%"}
            borderRadius={"5px"}
            margin={"16px"}
            type="text"
            _hover={{ borderColor: "black", boxShadow: "none" }}
            placeholder="Profession"
            _placeholder={{
              color: "grey",
              fontSize: "16",
              letterSpacing: 4,
              textAlign: "center",
              fontFamily: "New",
            }}
            color={"black"}
          />
          <Box
            backgroundColor={"black"}
            position={"absolute"}
            w={"49%"}
            h={"1px"}
            top={"40%"}
            left={"47%"}
          ></Box>

          <Input
            h={"82px"}
            w={"45%"}
            position={"absolute"}
            top={"42%"}
            left={"47%"}
            borderRadius={"5px"}
            margin={"16px"}
            type="text"
            _hover={{ borderColor: "black", boxShadow: "none" }}
            placeholder="About Me"
            _placeholder={{
              color: "grey",
              fontSize: "16",
              letterSpacing: 4,
              textAlign: "center",
              fontFamily: "New",
            }}
            color={"black"}
          />
          <Input
            h={"82px"}
            w={"45%"}
            position={"absolute"}
            top={"61%"}
            left={"47%"}
            borderRadius={"5px"}
            margin={"16px"}
            type="text"
            _hover={{ borderColor: "black", boxShadow: "none" }}
            placeholder="Education"
            _placeholder={{
              color: "grey",
              fontSize: "16",
              letterSpacing: 4,
              textAlign: "center",
              fontFamily: "New",
            }}
            color={"black"}
          />
          <Input
            h={"114.9px"}
            w={"45%"}
            position={"absolute"}
            top={"80%"}
            left={"47%"}
            borderRadius={"5px"}
            margin={"16px"}
            type="text"
            _hover={{ borderColor: "black", boxShadow: "none" }}
            placeholder="Experience"
            _placeholder={{
              color: "grey",
              fontSize: "16",
              letterSpacing: 4,
              textAlign: "center",
              fontFamily: "New",
            }}
            color={"black"}
          />
        </Box>
        <Box
          backgroundColor={"grey"}
          height={"20px"}
          w={"1px"}
          position={"absolute"}
          left={"99%"}
        ></Box>
        <Box
          backgroundColor={"grey"}
          height={"20px"}
          w={"1px"}
          position={"absolute"}
          left={"95%"}
        ></Box>

        <Box
          mt={"20px"}
          border={"1px solid"}
          height={"30px"}
          width={"10%"}
          marginLeft={"91.5%"}
          display={"flex"}
          gap={"20px"}
          alignItems={"center"}
          textAlign={"center"}
        >
          <Text marginLeft={"6.2px"} letterSpacing={1.5}>
            Save
          </Text>
          <Icon
            as={IoIosSave}
            position={"absolute"}
            fontSize={"50px"}
            zIndex={2}
            margin={"5px"}
            marginLeft={"44px"}
          />
        </Box>
      </Box>
    </>
  );
};

export default CVMaker;
