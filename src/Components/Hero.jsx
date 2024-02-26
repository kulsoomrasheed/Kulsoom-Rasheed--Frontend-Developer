import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <div>
      {" "}
      <Flex m={"auto"} justifyContent={"center"} color={"white"}>
        <Box backgroundImage="url('Graph.png')">
          <Image
            width="156.96px"
            height="77.24px"
            top="107.78px"
            left=" 21.8px"
            border="1px"
            angle="25 deg"
            src="104.png"
          ></Image>
          <Image
            width="934px"
            height=" 403px"
            top="173px"
            left="253px"
            src="heroimg.png"
            alt=""
          />
        </Box>
      </Flex>
      <Flex>
        <Text
          color={"rgba(253, 255, 227, 1)"}
          font-family={"Inter"}
          font-size={" 24px"}
          font-weight="400"
          line-height="40px"
          letter-spacing="0em"
          text-align="center"
          justifyContent={"center"}
          m={"auto"}
          size={"lg"}
        >
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin <br /> eleifend id mauris. Amet sem in id eget nunc
          quam lacus tellus augue.
        </Text>
      </Flex>
    </div>
  );
};

export default Hero;
