"use client";

import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Highlight,
  Text,
  VStack,
} from "@chakra-ui/react";
import HomeWave from "./materials/components/homeWave";
import { AiFillFolderOpen, AiOutlineArrowRight } from "react-icons/ai";
import About from "./materials/components/about";
import useObserver from "./materials/hooks/useObserver";
import StarBg from "./materials/components/starBg";

export default function Home() {
  const { ref } = useObserver("Home");

  return (
    <>
      <Grid
        ref={ref}
        h="80vh"
        placeContent="center"
        w="100%"
        bg="palette.secondary"
        pos="relative"
      >
        <VStack spacing="1.2rem" paddingTop="10rem">
          <Center
            zIndex={1}
            fontFamily="inter"
            flexDir="column"
            fontSize="3.8rem"
            fontWeight="bold"
          >
            <Text color="palette.gray">
              <Highlight
                query="Imagination"
                styles={{ color: "palette.primary" }}
              >
                Where Imagination
              </Highlight>
            </Text>
            <Text color="palette.gray">Meets Ingenuity.</Text>
          </Center>
          <Text
            color="palette.gray"
            w="60%"
            textAlign="center"
            fontWeight="light"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </Text>
          <HStack paddingTop="1rem" zIndex={1} spacing="1.2rem">
            <Button
              leftIcon={<AiFillFolderOpen />}
              bg="palette.primary"
              _hover={{ bg: "palette.gray" }}
            >
              My Portfolio
            </Button>
            <Button
              bg="tranparent"
              border="1px solid"
              color="palette.primary"
              rightIcon={<AiOutlineArrowRight />}
              _hover={{}}
            >
              Contact Me
            </Button>
          </HStack>
        </VStack>
        {/* <StarBg top="0" right="0" size="5rem" rotation="20deg" />
        <StarBg left="0" bottom="0" size="15rem" rotation="80deg" />
        <StarBg right="2rem" bottom="5rem" size="11rem" rotation="-20deg" />
        <StarBg left="2rem" top="5rem" size="19rem"  rotation="200deg"/>
        <StarBg right="15rem" top="10rem" size="16rem" rotation="120deg"/> */}
      </Grid>
      <HomeWave />
      <About />
    </>
  );
}
