import React from "react";
import Products from "../Components/Products";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import { Box } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Box className="App" m={"auto"} bgColor={"black"} paddingTop={5}>
      <Nav />
      1<Hero />
      <Products />
    </Box>
  );
};

export default LandingPage;
