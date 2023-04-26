"use client";

import {
  Box,
  Center,
  Grid,
  Highlight,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import useObserver from "../materials/hooks/useObserver";
import HomeWave from "../materials/components/homeWave";
import Slider from "./components/slider";
import breakPoints from "../materials/utils/breakpoints";
import ViewTab from "./components/viewTab";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineViewCarousel } from "react-icons/md";

export default function Portfolio() {
  const { ref } = useObserver("Portfolio");
  return (
    <>
      <Box h="30vh" bg="palette.secondary" ref={ref}>
        <VStack h="100%" justify="end">
          <Center
            zIndex={1}
            fontFamily="inter"
            flexDir="column"
            fontSize="3rem"
            fontWeight="bold"
          >
            <Text color="palette.gray">
              <Highlight
                query="Portfolio"
                styles={{ color: "palette.primary" }}
              >
                My Portfolio
              </Highlight>
            </Text>
          </Center>
          <Text
            color="palette.gray"
            w="60%"
            textAlign="center"
            fontWeight="light"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </VStack>
      </Box>
      <HomeWave />
      <Box w={breakPoints} margin="auto" h="50rem">
        <Tabs align="end">
          <TabList borderBottom="none">
            <Tab
              fontSize="2rem"
              _selected={{
                color: "palette.secondary",
                opacity: "1",
                borderBottom: "1px solid rgba(0, 0, 0, .8)",
              }}
              color="palette.seconadary"
              opacity=".5"
            >
              <MdOutlineViewCarousel />
            </Tab>
            <Tab
              fontSize="1.5rem"
              _selected={{
                color: "palette.secondary",
                opacity: "1",
                borderBottom: "1px solid rgba(0, 0, 0, .8)",
              }}
              color="palette.seconadary"
              opacity=".5"
            >
              <BsFillGridFill />
            </Tab>
          </TabList>

          <TabPanels paddingTop="2.6rem">
            <TabPanel>
              <Slider />
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
