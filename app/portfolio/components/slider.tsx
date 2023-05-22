import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import Image from "next/image";
import {
  AspectRatio,
  Box,
  Center,
  HStack,
  Skeleton,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import client from "@/client";
import ReactCardFlip from "react-card-flip";
import useApp from "@/app/materials/hooks/useApp";

export default function Slider() {
  const itemCount = 10;
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<number>(-1);
  const appContext = useApp();

  const getArtworks = async () => {
    let data: Artworks[] = [];

    if (appContext?.category === "All") {
      data = await client.fetch(
        `*[_type == "artworks"]{ 
          _id,
          artwork_name,
          description,
          artwork_image { asset -> {url} }
        }`
      );
    } else {
      data = await client.fetch(
        `*[_type == "artworks" && category == "${appContext?.category}"]{ 
          _id,
          artwork_name,
          description,
          artwork_image { asset -> {url} }
        }`
      );
    }

    return data as Artworks[];
  };

  const {
    data: artworks,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["artworks", appContext?.category],
    queryFn: getArtworks,
  });

  console.log(artworks);

  return (
    <Center
      pos="relative"
      sx={{
        ".swiper-button-next, .swiper-button-prev": {
          color: "palette.secondary",
        },
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
        }}
        coverflowEffect={{
          rotate: -30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        navigation
        centeredSlides={true}
        style={{ padding: "1rem" }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {artworks?.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Skeleton isLoaded={!isFetching}>
                <AspectRatio ratio={2 / 3} w="20rem">
                  <ReactCardFlip
                    isFlipped={isFlipped === index}
                    flipDirection="horizontal"
                  >
                    <Tooltip label="Flip!" cursor="pointer" placement="top">
                      <Center
                        flexDir="column"
                        // justifyContent="space-between"
                        w="20rem"
                        borderRadius=".5rem"
                        h="25rem"
                        onClick={() => setIsFlipped(index)}
                      >
                        <Text
                          bg="palette.secondary"
                          textAlign="center"
                          fontFamily="Akira"
                          p="1.2rem"
                          borderTopRadius=".5rem"
                          fontSize="1.2rem"
                          fontWeight="semibold"
                          w="100%"
                          h="15%"
                          color="palette.primary"
                        >
                          {item.artwork_name}
                        </Text>
                        <Box w="100%" h="85%">
                          <Image
                            src={item.artwork_image.asset.url}
                            alt="Sample Work"
                            width={500}
                            height={500}
                            style={{
                              width: "100%",
                              height: "100%",
                              borderBottomLeftRadius: ".5rem",
                              borderBottomRightRadius: ".5rem",
                            }}
                          />
                        </Box>
                      </Center>
                    </Tooltip>
                    <Center
                      flexDir="column"
                      // justifyContent="space-between"
                      w="20rem"
                      borderRadius=".5rem"
                      h="25rem"
                      p="1.5rem"
                      bg="palette.secondary"
                      onClick={() => setIsFlipped(-1)}
                    >
                      <Text
                        textAlign="center"
                        fontFamily="inter"
                        fontSize="1rem"
                        fontWeight="medium"
                        color="palette.primary"
                      >
                        {item.description}
                      </Text>
                    </Center>
                  </ReactCardFlip>
                </AspectRatio>
              </Skeleton>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <HStack pos="absolute" bottom="-2rem" spacing=".8rem">
        {[...Array(artworks && artworks?.length)].map((_, index) => {
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
