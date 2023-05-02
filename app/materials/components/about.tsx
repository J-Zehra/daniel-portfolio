import {
  Box,
  Button,
  Center,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import breakPoints from "../utils/breakpoints";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import useApp from "../hooks/useApp";
import { AiFillFolderOpen, AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";

export default function About() {
  const appContext = useApp();
  const router = useRouter();

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -75% 0px" });

  useEffect(() => {
    if (isInView) {
      appContext?.setIsSectionInView(true);
    } else {
      appContext?.setIsSectionInView(false);
    }
  }, [appContext, isInView]);

  return (
    <VStack
      w={breakPoints}
      spacing="6rem"
      h={{ base: "100%", md: "100vh" }}
      paddingBlock={{ base: "8rem", md: 0 }}
      align="center"
      justify="center"
      // paddingBlock="8rem 8rem"
      margin="auto"
      ref={ref}
      as={motion.div}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      initial={{ opacity: 0, y: -20 }}
    >
      {/* <HStack align="start" spacing=".5rem" w="100%">
        <Box
          w="1.5rem"
          h="2.5rem"
          bg="palette.secondary"
          borderRadius=".5rem"
        />
        <VStack align="start" justify="start" spacing="0rem">
          <Text
            fontSize={{ base: "1.5rem", md: "2rem" }}
            fontFamily="inter"
            fontWeight="bold"
            color="palette.secondary"
          >
            About
          </Text>
          <Text opacity=".8" fontSize={{ base: ".9rem", md: "1.1rem" }}>
            Get to know me.
          </Text>
        </VStack>
      </HStack> */}
      <Stack
        w="100%"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "5rem", md: 0 }}
      >
        <Center justifyContent={{ base: "center", md: "start" }} flex={1}>
          <Box
            w={{ base: "16rem", md: "22rem" }}
            h={{ base: "16rem", md: "22rem" }}
            pos="relative"
            bg="palette.secondary"
            borderRadius="50%"
          >
            <Image
              src="/assets/pfp_white.svg"
              alt="Profile Pic"
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
            <Box
              pos="absolute"
              bg="white"
              p=".6rem"
              borderRadius=".3rem"
              bottom="0"
              left="0"
              w="6rem"
              h="6rem"
              boxShadow="3px 3px 15px rgba(0, 0, 0, .6)"
            >
              <Image
                src="/assets/QR_code.svg"
                alt="Profile Pic"
                width={500}
                height={500}
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
        </Center>
        <Center flex={1} flexDir="column">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <HStack paddingTop="1rem" zIndex={1} w="100%" spacing="1.2rem">
            <Button
              leftIcon={<AiFillFolderOpen />}
              bg="palette.secondary"
              color="palette.primary"
              _hover={{ bg: "palette.secondary_hover" }}
              onClick={() => router.push("portfolio")}
            >
              My Portfolio
            </Button>
            <Button
              bg="tranparent"
              border="1px solid"
              color="palette.secondary"
              rightIcon={<AiOutlineArrowRight />}
              _hover={{}}
              onClick={() => router.push("contact")}
            >
              Contact Me
            </Button>
          </HStack>
        </Center>
      </Stack>
    </VStack>
  );
}
