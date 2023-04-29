import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { Box, Center, HStack } from "@chakra-ui/react";
import { BsDot } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Slider() {
  const itemCount = 10;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Center pos="relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        style={{ padding: "1rem" }}
        modules={[EffectCoverflow, Pagination]}
      >
        {[...Array(itemCount)].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <Box w="20rem" borderRadius=".3rem" h="26rem" bg="palette.gray">
                {/* <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Sample Work" width={500} height={500}/> */}
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <HStack pos="absolute" bottom="-2rem" spacing=".8rem">
        {[...Array(itemCount - 1)].map((_, index) => {
          return activeIndex === index ? (
            <Box
              as={motion.div}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -10 }}
              color="palette.secondary"
            >
              <Image
                src="/assets/star(black).svg"
                alt="Star"
                width={500}
                height={500}
                style={{ width: "1.8rem" }}
              />
            </Box>
          ) : (
            <Box
              transition="all .3s ease"
              h={activeIndex === index ? ".7rem" : ".3rem"}
              w={activeIndex === index ? ".7rem" : ".3rem"}
              borderRadius="50%"
              bg="palette.secondary"
              opacity={activeIndex === index ? "1" : ".5"}
              key={index}
              fontSize="2rem"
            ></Box>
          );
        })}
      </HStack>
    </Center>
  );
}
