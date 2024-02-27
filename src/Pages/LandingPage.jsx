import React from "react";
import Products from "../Components/Products";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import { Box } from "@chakra-ui/react";
import Token from "../Components/Token";
import Footer from "../Components/Footer";
import SwiperCarousal from "../Components/Carousel";

const LandingPage = () => {
  return (
    <Box className="App" m={"auto"} bgColor={"black"} paddingTop={5}>
      <Nav />
      1<Hero />
      <Products />
      <SwiperCarousal/>
      <Token/>
      <Footer/>
    </Box>
  );
};

export default LandingPage;
