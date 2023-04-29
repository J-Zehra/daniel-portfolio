"use client";

import {
  Box,
  Button,
  Center,
  Grid,
  Highlight,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";
import breakPoints from "../materials/utils/breakpoints";

export default function Contact() {
  const { ref } = useObserver("Contact");
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
        </VStack>
      </Box>
      <VStack paddingBlock="5rem" w={breakPoints} margin="auto" spacing="3rem">
        <Stack w="100%" direction="row" spacing="5rem">
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
