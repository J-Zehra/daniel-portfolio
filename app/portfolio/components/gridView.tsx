import client from "@/client";
import { Box, Center, Skeleton, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";

export default function GridView() {
  const itemCount = 10;

  const getArtworks = async () => {
    const data = await client.fetch(
      `*[_type == "artworks"]{ 
        _id,
        name,
        artwork_image { asset -> {url} }
      }`
    );
    return data as Artworks[];
  };

  const {
    data: artworks,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["artworks"],
    queryFn: getArtworks,
  });

  return (
    <Wrap justify="center" spacing="1.2rem">
      {artworks?.map((item, index) => {
        return (
          <WrapItem key={index}>
            <Skeleton isLoaded={!isFetching && !isLoading}></Skeleton>
            <Center
              as={motion.div}
              whileHover={{ scale: 1.01 }}
              flexDir="column"
              // justifyContent="space-between"
              w="20rem"
              borderRadius=".5rem"
              h="30rem"
            >
              <Text
                bg="palette.secondary"
                textAlign="center"
                fontFamily="inter"
                p="1.2rem"
                borderTopRadius=".5rem"
                fontSize="1.2rem"
                fontWeight="semibold"
                w="100%"
                h="15%"
                color="palette.primary"
              >
                {item.name}
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
          </WrapItem>
        );
      })}
    </Wrap>
  );
}
