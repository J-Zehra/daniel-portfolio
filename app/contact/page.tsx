"use client";

import {
  Box,
  Button,
  Center,
  Grid,
  HStack,
  Highlight,
  Input,
  Link,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";
import breakPoints from "../materials/utils/breakpoints";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useEffect, useRef } from "react";
import useApp from "../materials/hooks/useApp";
import { useInView } from "framer-motion";

export default function Contact() {
  const { ref } = useObserver("Contact");
  const appContext = useApp();
  const socials = [
    { link: "", icon: <BsFacebook /> },
    { link: "", icon: <BsTwitter /> },
    { link: "", icon: <BsInstagram /> },
  ];

  const ref2 = useRef(null);
  const isInView = useInView(ref2, { margin: "0px 0px -75% 0px" });

  useEffect(() => {
    if (isInView) {
      appContext?.setIsSectionInView(true);
    } else {
      appContext?.setIsSectionInView(false);
    }
  }, [appContext, isInView]);

  return (
    <>
      <Box h="45vh" bg="palette.secondary" ref={ref}>
        <VStack h="100%" justify="center">
          <Center
            zIndex={1}
            fontFamily="inter"
            flexDir="column"
            fontSize="3rem"
            fontWeight="bold"
          >
            <Text color="palette.gray">
              <Highlight
                query="Portfolio"
                styles={{ color: "palette.primary" }}
              >
                Contact Me
              </Highlight>
            </Text>
          </Center>
          <Text
            color="palette.gray"
            w="60%"
            textAlign="center"
            fontWeight="light"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
          <HStack spacing="1.2rem" paddingTop="1rem">
            {socials.map((social) => {
              return (
                <Link
                  fontSize="1.25rem"
                  color="palette.gray"
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  _hover={{ color: "palette.primary" }}
                >
                  {social.icon}
                </Link>
              );
            })}
          </HStack>
        </VStack>
      </Box>
      <VStack
        ref={ref2}
        paddingBlock="5rem"
        w={breakPoints}
        margin="auto"
        spacing="3rem"
      >
        <Stack
          w="100%"
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "3rem", md: "5rem" }}
        >
          <Input
            p="1.5rem 1rem"
            variant="flushed"
            borderColor="#8D8E97"
            focusBorderColor="palette.secondary"
            placeholder="First Name"
          />
          <Input
            p="1.5rem 1rem"
            variant="flushed"
            borderColor="#8D8E97"
            focusBorderColor="palette.secondary"
            placeholder="Last Name"
          />
        </Stack>
        <Input
          p="1.5rem 1rem"
          variant="flushed"
          borderColor="#8D8E97"
          focusBorderColor="palette.secondary"
          placeholder="Email"
        />
        <Textarea
          p="1.5rem 1rem"
          variant="flushed"
          borderColor="#8D8E97"
          focusBorderColor="palette.secondary"
          placeholder="Message"
          maxH="20rem"
          h="15rem"
          minHeight="10rem"
        />
        <Button
          w="100%"
          bg="palette.secondary"
          border="1px solid"
          color="palette.primary"
          _hover={{}}
        >
          Send Message
        </Button>
      </VStack>
    </>
  );
}
