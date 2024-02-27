import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <Flex
  bgColor={"rgb(52,47,14)"}
  fontSize={"md"}
  width={"95%"}
  m={"auto"}
  height={"hug (88px)"}
  paddingLeft={5}
  paddingRight={5}
  top={"40px"}
  left={"40px"}
  padding={"16px 32px 16px 32px"}
  borderRadius={25}
  justifyContent={"space-between"}
  border={"2px solid rgb(110,95,26)"}
  borderImageSource="linear-gradient(90.29deg, rgba(255, 255, 255, 0.31) 0%, rgba(255, 255, 255, 0) 100%)" // corrected typo
  boxShadow="0px 2px 19.5px 0px rgba(219, 184, 0, 0.2)"
    >
      <Flex>
        <img width={"150px"} src="logo.png" alt="logo" />
      </Flex>
      <Flex
        alignContent={"center"}
        alignItems={"center"}
        color={"white"}
        width={" Hug (792.8px)"}
        height={" Hug (55px)"}
        gap={"32px"}
      >
        <Box>About</Box>
        <Box>Our Products</Box>Token Utility<Box>Roadmap</Box>
        <Button
          size="md"
          color={"rgb(52,47,14)"}
          height="48px"
          width="200px"
          border="2px"
          bgColor="rgb(249,211,38)"
          variant="outline"
        >
          Connect Wallet
        </Button>
      </Flex>
    </Flex>
  );
};

export default Nav;
