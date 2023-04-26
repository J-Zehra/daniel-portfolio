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

export default function Footer() {
  const socials = [
    { link: "", icon: <BsFacebook /> },
    { link: "", icon: <BsTwitter /> },
    { link: "", icon: <BsInstagram /> },
  ];

  return (
    <Box bg="palette.secondary" paddingBlock="2.8rem">
      <VStack spacing="2.5rem" w={breakPoints} margin="auto">
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
                  color="palette.primary"
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
    </Box>
  );
}
