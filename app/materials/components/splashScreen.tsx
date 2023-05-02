import { Box, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function SplashScreen() {
  return (
    <Center h="100vh" w="100%" bg="palette.primary">
      {/* <video autoPlay muted loop>
        <source src="/assets/logo_animation.gif" type="video/gif" />
      </video> */}
      <Box
        as={motion.div}
        key="logo_animation"
        initial={{ scale: 0, opacity: 0, y: -200, x: 200 }}
        exit={{
          scale: 0,
          opacity: 0,
          transition: { duration: .3 },
        }}
        animate={{ scale: 1, opacity: 1, y: 0, x: 0 }}
      >
        <Image
          src="/assets/logo_animation.gif"
          alt="My GIF"
          width={300}
          height={200}
        />
      </Box>
    </Center>
  );
}
