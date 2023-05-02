"use client";

import { Box, Grid, Link, Text } from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";
import Lottie from "react-lottie-player";
import ComingSoon from "../materials/animation_assets/coming_soon.json";

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
      <Lottie
        loop
        animationData={ComingSoon}
        play
        style={{ width: 500, height: 500 }}
      />
      <Text color="palette.gray" textAlign="center">
        In the meantime, check my{" "}
        <Link href="https://linktr.ee/dxf7r" color="palette.primary">
          Linktree
        </Link>
      </Text>
    </Grid>
  );
}
