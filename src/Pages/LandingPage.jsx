import React from "react";
import Products from "../Components/Products";
import Hero from "../Components/Hero";
import Nav from "../Components/Nav";
import { Box } from "@chakra-ui/react";
import Token from "../Components/Token";
import Footer from "../Components/Footer";
import SwiperCarousal from "../Components/Carousel";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <Box className="App" m={"auto"} bgColor={"black"} paddingTop={5} w={"100%"} h={'auto'} margin={'auto'}>
      <Nav />
      <Navbar/>
      1<Hero />
      <Products />
      <SwiperCarousal/>
      <Box  bgGradient='linear( black,  rgb(33,29,13) )' >
         <Token/>
      <Footer/>
      </Box>
     
    </Box>
  );
};

export default LandingPage;
