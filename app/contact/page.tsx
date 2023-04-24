"use client";

import { Box, Grid } from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";

export default function Contact() {
  const { ref } = useObserver("Contact");
  return (
    <Grid h="100vh" color="palette.primary" ref={ref} bg="palette.secondary" placeContent="center">
      Contact
    </Grid>
  );
}
