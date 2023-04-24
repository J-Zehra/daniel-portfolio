"use client";

import { Box, Grid } from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";

export default function Shop() {
  const { ref } = useObserver("Shop");
  return (
    <Grid
      h="100vh"
      ref={ref}
      bg="palette.secondary"
      color="palette.primary"
      placeContent="center"
    >
      Shop
    </Grid>
  );
}
