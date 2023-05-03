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
  useToast,
} from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";
import breakPoints from "../materials/utils/breakpoints";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import useApp from "../materials/hooks/useApp";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const { ref } = useObserver("Contact");
  const toast = useToast();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = () => {
    if (!firstName || !lastName || !email || !message) {
      toast({
        title: "Missing Fields.",
        description: "Please fill all the fields",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }
  };

  return (
    <>
      <VStack
        ref={ref}
        paddingBlock="10rem"
        w={breakPoints}
        margin="auto"
        spacing="3rem"
        as={motion.div}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        initial={{ opacity: 0, y: -20 }}
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            p="1.5rem 1rem"
            variant="flushed"
            borderColor="#8D8E97"
            focusBorderColor="palette.secondary"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Stack>
        <Input
          p="1.5rem 1rem"
          variant="flushed"
          borderColor="#8D8E97"
          focusBorderColor="palette.secondary"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          w="100%"
          bg="palette.secondary"
          border="1px solid"
          color="palette.primary"
          _hover={{}}
          onClick={handleSubmit}
        >
          Send Message
        </Button>
      </VStack>
    </>
  );
}
