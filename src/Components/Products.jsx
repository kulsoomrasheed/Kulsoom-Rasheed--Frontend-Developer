import { Box, Grid, GridItem, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SinglePro from "./SinglePro";

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

const Products = () => {
  return (
    <div>
      <Box color={"white"} m={10}>
        <Heading>Our Products</Heading>
        <Text>
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </Text>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          margin={"auto"}
          my={10}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          {data &&
            data.map((el, i) => {
              return (
                <SinglePro key={i} img={el.img} name={el.name} desc={el.desc} />
              );
            })}
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
