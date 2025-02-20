import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Flex m="auto" justifyContent="center" color="white">
        <Image
          width={"237px"}
          height={"237px"}
          top={"19.31px"}
          left={"-88.02px"}
          position={"absolute"}
          transform={"rotateY(25deg)"}
          src={"sq.png"}
          alt="hujgf"
          animation="verticalAnimation 2s ease-in-out infinite"
        ></Image>
        <Box
          backgroundImage="url('Graph.png')"
          position="relative"
          overflow="hidden"
        >
          <Image
            src={"104.png"}
            position={"absolute"}
            top={"217px"}
            width="218px"
            height="218px"
            left={"892px"}
          />
          <Image
            width={"218px"}
            height={"218px"}
            top={"90px"}
            left={"575px"}
            position={"absolute"}
            transform={"rotateY(25deg)"}
            animation="slidein 3s linear 1s infinite alternate"
            src={"104.png"}
            alt="sdf"
          ></Image>

          <Heading mb={4}>
            <span
              style={{
                width: "752px",
                fontFamily: "Kanit",
                fontWeight: "600",
                fontSize: "100px",
                lineHeight: "144px",
                height: "144px",
                top: "42.6px",
                position: "relative",
                animation: "slideLeft 1s forwards",
              }}
            >
              YOUR GATEWAY <br />
            </span>
            <span
              style={{
                position: "absolute",
                fontWeight: "600",
                fontFamily: "Kanit",

                fontSize: "100px",
                left: "120px",
                opacity: 0,

                animation: "fadeIn 1s forwards",
              }}
            >
              TO
            </span>
            <br />
            <span
              style={{
                width: "752px",
                fontFamily: "Kanit",
                fontWeight: "600",
                fontSize: "100px",
                lineHeight: "144px",
                height: "144px",
                top: "42.6px",
                position: "relative",
                animation: "slideRight 1s forwards",
              }}
            >
              DEFI ON <span style={{ color: "rgb(254,198,0)" }}>BITCOIN</span>
            </span>
          </Heading>
          <Image
            box-shadow="-10px -10px 15px 0px rgba(0, 0, 0, 0.76)"
            width="324px"
            height="324px"
            position="absolute"
            bottom="-350px"
            left="calc(50% - 162px)"
            animation="slideUp 1s forwards"
            src="house.png"
            alt=""
          />
        </Box>
      </Flex>
      <Image
        src="Vectorr.png"
        border={"2.25px "}
        position={"absolute"}
        transform={"rotateY(5deg)"}
        right={"300px"}
      />
      <Flex>
        <Text
          color="rgba(253, 255, 227, 1)"
          justifyContent="center"
          m={"30px auto"}
          size="md"
          fontFamily={"Inter"}
          fontSize={"24px"}
          fontWeight={400}
          lineHeight={"40px"}
          letterSpacing={"0em"}
          textAlign={"center"}
        >
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin <br /> eleifend id mauris. Amet sem in id eget nunc
          quam lacus tellus augue. <br />
          <Button
            bgGradient="linear(to-r,rgb(254,198,0),rgb(254,178,0))"
            borderRadius={25}
            borderColor="white"
            variant="outline"
            my={5}
          >
            Get Started{" "}
          </Button>
        </Text>
      </Flex>
    </div>
  );
};

export default Hero;
