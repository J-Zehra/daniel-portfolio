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
          </Box>
        </Center>
        <Center flex={1} flexDir="column">
          <Text>
            Daniel Serra is a Visual Artist of Cuban origin who currently
            attends Miami International University of Arts and Design as a
            senior student. He has made an impact at his university through his
            proficiency in Digital Media, with a specialization in Illustration
            and Augmented Reality Experiences.
          </Text>
          <Text paddingTop="1rem">
            Through his unique artistic approach, Serra conveys compelling
            fantasy narratives that are distinguished by their remarkable
            intuitiveness and simplicity. His works transcend the conventional
            confines of linear storytelling and embody a cohesive and
            self-contained artistic expression.
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
