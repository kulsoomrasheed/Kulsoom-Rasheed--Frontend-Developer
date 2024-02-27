import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box
        h={400}
        bgColor={"black"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          spacing={4}
          w={"70%"}
          h={200}
          bgColor={"black"}
          borderRadius={15}
          border={"2px solid rgb(110,95,26)"}
        >
          <Flex
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems="center"
            width={{ base: "90%", md: "70%" }}
            margin="auto"
            paddingY={4}
            flexDirection={{ base: "column", md: "row" }} 
          >
            <Heading color="white" textAlign={{ base: "center", md: "left" }}>
              Join Our <br />
              <span style={{ color: "rgb(254,204,0)" }}>Community</span>
            </Heading>
            <Flex
              justifyContent="flex-end"
              alignItems="center"
              marginTop={{ base: 4, md: 0 }}
            >
              {" "}
              <Image
                src="Facebook.png"
                marginRight={{ base: 0, md: 4 }}
                marginBottom={{ base: 4, md: 0 }}
              />{" "}
              <Image
                src="Behance.png"
                marginRight={{ base: 0, md: 4 }}
                marginBottom={{ base: 4, md: 0 }}
              />{" "}
              <Image
                src="Instagram.png"
                marginBottom={{ base: 4, md: 0 }}
              />{" "}
            </Flex>
          </Flex>
          export default SocialIcons;
        </Stack>
      </Box>
      <Box bgColor={"rgb(33,29,13)"} padding={5} color={"rgb(188,187,182)"}>
        <Image
          width={"100px"}
          justifyContent={"center"}
          alignContent={"center"}
          m={"auto"}
          src="flogo.png"
        ></Image>
        <Text>2023 All rights reserved</Text>
      </Box>
    </div>
  );
};

export default Footer;
