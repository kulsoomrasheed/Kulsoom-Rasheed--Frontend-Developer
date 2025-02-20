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
import styled from "@emotion/styled";
const data=[
    {
      "img": "ContentGroup.png",
      "bg":"01.png"
    }, {
      "img": "Content Group.png",
      "bg":"02.png"
    },
    
    {
        "img": "ContentGroup.png",
        "bg":"03.png"
    
    },
    
    {
        "img": "Content Group.png",
        "bg":"01.png"
    
    },
    {
        "img": "Content Group.png",
        "bg":"02.png"
     
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

      // #FECC00 10%, #FECC00 40.23%, #0E0E0E 57.33%, rgba(14, 14, 14, 0) 100%)'
  return (

    <Box  width= '1440px'
    height= '733px'
    padding='60px 0px 60px 0px'
    borderRadius='22px'
    gap= '54px' background={'linear-gradient(180deg, #FECC00 10%, #FECC00 40.23%, #0E0E0E 57.33%, rgba(14, 14, 14, 0) 100%)'}

    margin={5}>
        <Heading
  ml={20}
  my={10}
  textAlign={'left'}
  style={{
    fontFamily: 'Kanit',
    fontSize: '56px', 
    lineHeight: '84px', 
    letterSpacing: '0em', 
    textAlign: 'left'
  }}
>
  Roadmap
</Heading>

        <Image src="Vector.png" border={'2.25px '}position={'absolute'}
transform= {'rotateY(5deg)'} left={190}  top={'132rem'}/>
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
  <div>
    <div >
      <Image w={"40%"} ml={'100px'} src={el.bg}></Image>
   </div>
   <div style={{
    top: 0,
    left: 0,
      maxWidth: '100%', 
      maxHeight: '100%'}}>
     <Image borderRadius={18} src={el.img}  ></Image>
     <div
                      style={{
                        position: "absolute",
                        top: "25%",
                        left: "45%",
                        transform: "translate(-50%, -50%)",
                        textAlign: "center",
                        margin: "auto",
                        padding: 10,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15,
                        backgroundColor: "rgb(254,204,0)",
                        color: "black",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <h2 position="absolute">{"PHASE" + " " + i}</h2>
                    </div>
   </div>
  



  </div>
   
</SwiperSlide>
    </Box>  
})}        
      </Swiper>
    </Box>
  );
}
