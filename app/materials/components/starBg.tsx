import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function StarBg({
  top,
  right,
  left,
  bottom,
  size,
}: {
  size: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}) {
  return (
    <Box
      pos="absolute"
      top={top ? top : ""}
      right={right ? right : ""}
      left={left ? left : ""}
      bottom={bottom ? bottom : ""}
    >
      <Image
        src="/assets/star_bg.svg"
        alt="Star"
        width={500}
        height={500}
        style={{ width: size }}
      />
    </Box>
  );
}
