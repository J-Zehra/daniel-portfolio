import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

export default function Slider() {
  return (
    <>
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
        style={{ padding: "1rem" }}
        modules={[EffectCoverflow, Pagination]}
      >
        {[...Array(9)].map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <Box w="20rem" borderRadius=".3rem" h="26rem" bg="palette.gray">
                {/* <Image src="https://swiperjs.com/demos/images/nature-1.jpg" alt="Sample Work" width={500} height={500}/> */}
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
