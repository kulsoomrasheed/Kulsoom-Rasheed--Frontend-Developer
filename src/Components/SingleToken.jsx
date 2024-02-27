import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const SingleToken = ({ img, name, desc }) => {
  return (
    <Center>
      <Box>
        <Grid m={"auto"}>
        <Card
            bgColor={"black"}
            color={"white"}
            border={"3px solid rgb(110,95,26)"}
           width={"120%"}
           margin={'auto'}
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            m={"auto"}
            borderRadius={16}
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "translateY(-10px)",
              boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)",
            }}
          >
            <CardBody>
              <Image
                src={img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto"
                width={150}   _hover={{
                  transform: "scale(1.3)", 
                }}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">Bitcoin</Heading>
                <Text color={'rgb(188,187,182)'}>Symbol: BTC</Text>
                <Text color={'rgb(188,187,182)'}>Market Cao: $100000</Text>

                <Text color={'rgb(188,187,182)'}>Chain: Bitcoin</Text>
                <Button
            bgGradient="linear(to-r,rgb(254,198,0),rgb(254,178,0))"
            borderRadius={25}
            borderColor="white"
            variant="outline"
            my={5}
          >
Get Details          </Button>
              </Stack>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Grid>
      </Box>
    </Center>
  );
};

export default SingleToken;
