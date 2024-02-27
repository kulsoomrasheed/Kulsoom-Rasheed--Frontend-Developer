import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SinglePro from "./SinglePro";
import SingleToken from "./SingleToken";

const data = [
  {
    img: "1.png",
    name: "Bita Marketplace",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "2.png",
    name: "Bita Marketplace",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "5.png",
    name: "Bita Marketplace",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "4.png",
    name: "Bita Marketplace",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "6.png",
    name: "Bita Marketplace",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
];

const Token = () => {
  return (
    <div>
      <Box width={'80%'} color={"white"} m={'auto'} my={20}>
        <Heading>Our <span style={{ color: "rgb(254,204,0)" }}>Tokens</span></Heading>
        <Text>
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </Text>
        <Grid
          templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}}
          gap={2}
          margin={"auto"}
          my={10}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          {data &&
            data.map((el, i) => {
              return (
                <SingleToken key={i} img={el.img} name={el.name} desc={el.desc} />
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Token;
