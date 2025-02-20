import { Box, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SinglePro from "./SinglePro";
import "../App.css"
const data = [
  {
    img: "33.png",
    name: "Bita Marketplace",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "2.png",
    name: "Bitadex",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "5.png",
    name: "Bitapad",
    desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
  },
  {
    img: "1.png",
    name: "BitaLend",
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
    <Box
    w='100%' padding={10}
    bgGradient='linear( black,  rgb(40,35,12) )' opacity={1} transition={'all 1s'}
  ><Image
  style={{
    position: 'absolute',
    width: '487px',
    height: '487px',
    top: '573px',
    left:'1024px',
    animation: 'verticalAnimation 2s ease-in-out infinite', 
    transform:"rotateX(-9.39deg)",
    opacity:'70%',

  }}
  src="7.png"
  alt="Animated Image"
/>
      <Box width={'80%'} color={"white"} m={'auto'} my={20}>
      <Heading 
  fontFamily='Kanit'
  fontWeight='600'
  fontSize='56px' 
  lineHeight='60px'
  letterSpacing='0em'
  textAlign='center'
>
  Our <span style={{ color: "rgb(254,204,0)" }}>Products</span>
</Heading>

        <Image src="Vectorr.png" border={'2.25px '}position={'absolute'}
transform= {'rotateY(5deg)'} right={'600px'} />
        <Text margin={"15px auto"}>
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </Text>
        <Grid 
                animation='verticalAnimation 2s ease-in-out infinite' 

           templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
           gap={6}
           margin={"auto"}
           my={10}
           justifyContent={"center"}
           alignItems={"center"}
         >
           {data &&
             data.map((el, i) => {
               const cardStyles = {
                 width: '100%', 
                 height: '100%', 
                 transform: 'rotateY(25deg)',
                 animation: 'slidein 3s linear 1s infinite alternate',               };
     
               return (
                 <SinglePro key={i} img={el.img} name={el.name} desc={el.desc} style={cardStyles} />
               );
             })}
         </Grid>
      </Box><Image
      style={{
        position: 'absolute',
        width: '572px',
        height: '572px',
        top: '30%',
        animation: 'verticalAnimation 2s ease-in-out infinite', 
      }}
      transform={"rotateX(-14.39deg)"}
      src="92.png"
      alt="Animated Image"
      opacity={'70%'}
    />
    </Box>
  );
};

export default Products;
