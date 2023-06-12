import useApp from "@/app/materials/hooks/useApp";
import client from "@/client";
import { Box, Center, Skeleton, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useQuery } from "react-query";

export default function GridView() {
  const appContext = useApp();
  const [isFlipped, setIsFlipped] = useState<number>(-1);

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

  return (
    <Wrap justify="center" spacing="1.2rem">
      {artworks?.map((item, index) => {
        return (
          <WrapItem key={index}>
            <Skeleton isLoaded={!isFetching}>
              <ReactCardFlip
                isFlipped={isFlipped === index}
                flipDirection="horizontal"
              >
                <Center
                  // as={motion.div}
                  // whileHover={{ scale: 1.01 }}
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
            </Skeleton>
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
