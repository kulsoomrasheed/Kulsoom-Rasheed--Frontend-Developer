import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide ,Breakpoints} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
const data=[
    {
      "img": "ContentGroup.png",
      
    }, {
      "img": "Content Group.png",
    },
    
    {
        "img": "ContentGroup.png",
    
    },
    
    {
        "img": "Content Group.png",
    
    },
    {
        "img": "Content Group.png",
     
    },
    
    
   
  ]
  
export default function SwiperCarousal() {

    const breakpoints = {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      };

      
  return (

    <Box m={10} padding={10} bgColor={'rgb(254,204,0)'}
    width={"97%"}
    margin={5}>
        <Heading ml={20} my={10} textAlign={'left'}>Roadmap</Heading>
    <Swiper
    
  spaceBetween={20}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false
  }}
  pagination={{
    clickable: true
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  className="mySwiper"
  breakpoints={breakpoints} 
>

{data.map((el,i)=>{
    return      <Box 
    width={"97%"}
    margin={"auto"}
    marginBottom={3}
    borderRadius={6}
    position="relative">
 <SwiperSlide>
    <Image  borderRadius={18} src={el.img}></Image>
</SwiperSlide>
    </Box>  
})}        
      </Swiper>
    </Box>
  );
}
