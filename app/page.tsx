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
        h="100vh"
        placeContent="center"
        w="100%"
        bg="palette.secondary"
      >
        <VStack spacing="1.2rem" pos="relative">
          <Center
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
          <HStack paddingTop="1rem" spacing="1.2rem">
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
          <StarBg top="0" right="0" />
          <StarBg left="0" bottom="0" />
        </VStack>
      </Grid>
      <HomeWave />
      <About />
    </>
  );
}
