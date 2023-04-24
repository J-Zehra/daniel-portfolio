import { Box, Center, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import breakPoints from "../utils/breakpoints";
import Image from "next/image";

export default function About() {
  return (
    <VStack w={breakPoints} spacing="6rem" paddingBlock="3rem" margin="auto">
      <HStack align="start" spacing=".5rem" w="100%">
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
      </HStack>
      <Stack w="100%" direction="row">
        <Box flex={1}>
          <Box
            w="25rem"
            h="25rem"
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
        </Box>
        <Center flex={1}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Center>
      </Stack>
    </VStack>
  );
}