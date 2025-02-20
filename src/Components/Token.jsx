import { Box, Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SingleToken from "./SingleToken";
import axios from 'axios'






const Token = () => {
  const [tokenData,setTokenData]= useState([])
const fetchTokenData=async()=>{
await axios.get("https://btc-be-1.onrender.com/btc").then((res)=>{
  console.log(res.data.btc);
  setTokenData(res.data.btc)
}).catch((err)=>{
  console.log(err.message);
})
}

useEffect(()=>{
  fetchTokenData()
},[])
  return (
    <div>
      <Box width={'80%'} color={"white"} m={'auto'} my={20}>
      <Heading 
  fontFamily='Kanit'
  fontWeight='600'
  fontSize='56px' 
  lineHeight='60px'
  letterSpacing='0em'
  textAlign='center'
>
  Our <span style={{ color: "rgb(254,204,0)" }}>Tokens</span>
</Heading>

        <Image src="Vectorr.png" border={'2.25px '}position={'absolute'}
transform= {'rotateY(5deg)'} right={'600px'} />
        
        <Text margin={"15px auto"}>
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </Text>
        <Grid
                animation= 'verticalAnimation 2s ease-in-out infinite'
          templateColumns={{base:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"}}
          gap={2}
          margin={"auto"}
          my={10}
          justifyContent={"center"}
          alignContent={"center"}
          alignItems={"center"}
        >
          {tokenData &&
            tokenData.map((el, i) => {
              return (
                <SingleToken key={i} img={el.img} name={el.tokenName} chain={el.chain} symbol={el.symbol} decimals={el.decimals} marketcap={el.marketcap}/>
              );
            })}
        </Grid>
      </Box>

    </div>
  );
};

export default Token;
