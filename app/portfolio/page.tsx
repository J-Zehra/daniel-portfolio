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
import GridView from "./components/gridView";
import useApp from "../materials/hooks/useApp";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Portfolio() {
  const { ref } = useObserver("Portfolio");

  const appContext = useApp();

  return (
    <>
      <Box
        w={breakPoints}
        ref={ref}
        margin="auto"
        paddingTop="8rem"
        paddingBottom="5rem"
        as={motion.div}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        initial={{ opacity: 0, y: -20 }}
      >
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

          <TabPanels paddingTop="2rem">
            <TabPanel>
              <Slider />
            </TabPanel>
            <TabPanel>
              <GridView />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}
