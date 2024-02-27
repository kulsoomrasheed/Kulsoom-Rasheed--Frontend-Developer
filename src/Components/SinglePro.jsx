import React from "react";
import {
  Box,
  Center,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

const SinglePro = ({ img, name, desc }) => {
  return (
    <Center>
      <Box>
        <Grid m={"auto"}>
          <Card
            bgColor={"black"}
            color={"white"}
            border={"1px solid yellow"}
            maxW="sm"
            justifyContent={"center"}
            alignContent={"center"}
            alignItems={"center"}
            m={"auto"}
            borderRadius={16}
          >
            <CardBody>
              <Image
                src={img}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                mx="auto"
                width={210}
              />
              <Divider color={"yellow"} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{name}</Heading>
                <Text>{desc}</Text>
              </Stack>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </Grid>
      </Box>
    </Center>
  );
};

export default SinglePro;
