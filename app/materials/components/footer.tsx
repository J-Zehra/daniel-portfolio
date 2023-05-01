import {
  Box,
  Button,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import breakPoints from "../utils/breakpoints";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import StarBg from "./starBg";

export default function Footer() {
  const socials = [
    { link: "", icon: <BsFacebook /> },
    { link: "", icon: <BsTwitter /> },
    { link: "", icon: <BsInstagram /> },
  ];

  return (
    <Box bg="palette.secondary" paddingBlock="2.8rem" pos="relative">
      <VStack spacing="2.5rem" w={breakPoints} margin="auto" zIndex={1}>
        <HStack w="100%" justify="space-between">
          <Box>
            <Image
              src="/white_logo.svg"
              alt="Logo"
              width={500}
              height={500}
              style={{ width: "3rem" }}
            />
          </Box>
          <HStack spacing="1rem">
            <Input
              p="1.6rem"
              borderColor="#3F4649"
              bg="#282C2E"
              color="palette.primary"
              _placeholder={{ color: "palette.gray" }}
              placeholder="Email"
            />
            <Button w="10rem">Subscribe</Button>
          </HStack>
        </HStack>
        <HStack w="100%" justify="space-between">
          <Text color="palette.primary" fontFamily="inter">
            Copyright 2023.
          </Text>
          <HStack spacing="1.2rem">
            {socials.map((social) => {
              return (
                <Link
                  fontSize="1.25rem"
                  color="palette.gray"
                  _hover={{ color: "palette.primary" }}
                  key={social.link}
                  href={social.link}
                  target="_blank"
                >
                  {social.icon}
                </Link>
              );
            })}
          </HStack>
        </HStack>
      </VStack>
      <StarBg top="0" right="2rem" size="2rem" />
      <StarBg left="1rem" bottom="0" size="1rem" />
      <StarBg right="2rem" bottom="5rem" size="1.8rem" />
      <StarBg right="10rem" top="5rem" size="2rem" />
      <StarBg right="10rem" top="6rem" size="2rem" />
    </Box>
  );
}
