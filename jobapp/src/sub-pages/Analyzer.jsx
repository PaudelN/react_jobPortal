import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import critical from "../assets/img/critical.png";
import piechart from "../assets/img/piechart.png";
import axios from "axios";
import { useMutation } from "react-query";

const Analyzer = () => {
  const [prompt, setPrompt] = useState("");

  //Fuction that must return a promise(useMutation)
  const makeRequestAPI = async (prompt) => {
    const res = await axios.post("http://localhost:8009/api/analyzer", {
      prompt,
    });
    return res.data;
  };

  //mutation

  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  //submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  return (
    <>
      <Image
        src={critical}
        height={"7rem"}
        margin={"0px"}
        padding={"0px"}
        pos={"relative"}
        top={"55px"}
        left={"100px"}
        alt="man"
      ></Image>
      <form onSubmit={handleSubmit}>
        <Box
          border={"1px solid black"}
          borderRadius={"5px"}
          position={"absolute"}
          height={"30rem"}
          width={"900px"}
          marginLeft={"25%"}
          bgColor={"#f1f0e9"}
          overflow={"scroll"}
        >
          {mutation.isLoading && (
            <Box
              display={"flex"}
              margin={"0px"}
              padding={"10px"}
              justifyContent={"center"}
              fontSize={"18px"}
              alignItems={"center"}
              pos={"relative"}
              backgroundColor={"#dddbcb"}
              letterSpacing={2}
              top={"44%"}
            >
              Generating Your Content...
            </Box>
          )}
          {mutation.isError && (
            <Box
              display={"flex"}
              margin={"0px"}
              padding={"10px"}
              justifyContent={"center"}
              fontSize={"18px"}
              alignItems={"center"}
              pos={"relative"}
              backgroundColor={"#dddbcb"}
              letterSpacing={2}
              top={"44%"}
            >
              {mutation.error.message}
            </Box>
          )}
          {mutation.isSuccess && (
            <Box
              display={"flex"}
              margin={"0px"}
              padding={"10px"}
              justifyContent={"center"}
              fontSize={"16px"}
              alignItems={"center"}
              pos={"relative"}
              fontFamily={"times new roman"}
              letterSpacing={2}
              borderRadius={"5px"}
              bgColor={"#f1f0e9"}
            >
              {mutation.data}
            </Box>
          )}
        </Box>
        <Input
          id="box"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          border={"1px solid "}
          fontFamily={"sans-serif"}
          backgroundColor={"white"}
          width={"40%"}
          margin={"20px"}
          position={"absolute"}
          letterSpacing={2}
          top={"36.5rem"}
          left={"25rem"}
          type="text"
          _hover={{ borderColor: "black", boxShadow: "none" }}
          placeholder={`Please Describe Your Questions About Ideal Job...`}
          _placeholder={{
            fontSize: "13.5px",
            fontFamily: "sans-serif",
            textAlign: "center",
            letterSpacing: "2.5px",
          }}
        ></Input>
        <Button
          
          type="submit"
          border={"1px solid"}
          borderRadius={"6px"}
          boxShadow={"5px 5px 5px grey"}
          cursor={"pointer"}
          backgroundColor={"#c9c6ac"}
          color={"white"}
          _hover={{ backgroundColor: "#b4b18d" }}
          _active={{ backgroundColor: "#a09c6e" }}
          margin={"20px"}
          position={"absolute"}
          top={"36.4rem"}
          right={"17rem"}
        >
          Generate Content
        </Button>
      </form>

      {/* <Box
          border={"1px solid black"}
          position={"absolute"}
          height={"520px"}
          width={"900px"}
          marginLeft={"25%"}
       
          bgColor={"#DDDBCB"}
        >
          {mutation.isLoading && <p>Generating Your Content</p>}
          {mutation.isError && <p>{mutation.error.message}</p>}
          {mutation.isSuccess && <p>{mutation.data}</p>}

          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            border={"1px solid "}
            fontFamily={"sans-serif"}
            backgroundColor={"white"}
            width={"95%"}
            margin={"20px"}
            position={"absolute"}
            top={"85%"}
            type="text"
            _hover={{ borderColor: "black", boxShadow: "none" }}
            placeholder={`Please describe your questions about your ideal job...`}
            _placeholder={{
              fontSize: "13.5px",
              fontFamily: "sans-serif",
              textAlign: "center",
              letterSpacing: "2.5px",
            }}
          ></Input>
          <Button
            type="submit"
            border={"1px solid"}
            borderRadius={"6px"}
            boxShadow={"5px 5px 5px grey"}
            cursor={"pointer"}
            height={"10%"}
            backgroundColor={"#c9c6ac"}
            color={"white"}
            position={"absolute"}
            _hover={{ backgroundColor: "#b4b18d" }}
            _active={{ backgroundColor: "#a09c6e" }}
            bottom={"-58px"}
          >
            Generate Content
          </Button>

          {/* <Image
            cursor={"pointer"}
            height={"10%"}
            src={process}
            position={"absolute"}
            right={"-49px"}
            bottom={"-48px"}
          ></Image> */}

      {/* </form> */}
    </>
  );
};

export default Analyzer;
