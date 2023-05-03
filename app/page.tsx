"use client";

import { Box } from "@chakra-ui/react";
import About from "./materials/components/about";
import useObserver from "./materials/hooks/useObserver";

export default function Home() {
  const { ref } = useObserver("Home");

  return (
    <Box ref={ref}>
      <About />
    </Box>
  );
}
