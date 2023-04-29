import { Box, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

export default function GridView() {
  const itemCount = 10;
  return (
    <Wrap justify="center" spacing="1.2rem">
      {[...Array(itemCount)].map((_, index) => {
        return (
          <WrapItem key={index}>
            <Box
              as={motion.div}
              whileHover={{ scale: 1.01 }}
              w="20rem"
              borderRadius=".3rem"
              h="26rem"
              bg="palette.gray"
              cursor="pointer"
            >
              {/* <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Sample Work" width={500} height={500}/> */}
            </Box>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
