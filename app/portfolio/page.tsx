"use client";

import { Box, Grid } from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";

export default function Portfolio() {
  const { ref } = useObserver("Portfolio");
  return (
    <Grid h="100vh" ref={ref} bg="palette.secondary" placeContent="center">
      Portfolio
    </Grid>
  );
}
