import { Center } from "@chakra-ui/react";
import React from "react";

export default function SplashScreen() {
  return (
    <Center h="100vh" w="100%">
      <video autoPlay muted loop>
        <source src="/assets/logo_animation2.mp4" type="video/mp4" />
      </video>
    </Center>
  );
}
