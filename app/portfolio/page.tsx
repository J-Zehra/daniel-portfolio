"use client";

import {
  Box,
  Center,
  Grid,
  Highlight,
  Select,
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
import client from "@/client";
import { useQuery } from "react-query";

export default function Portfolio() {
  const { ref } = useObserver("Portfolio");

  const appContext = useApp();

  const getCategories = async () => {
    const data = await client.fetch(
      `*[_type == "categories"]{ 
        _id,
        category_name,
      }`
    );
    return data as Categories[];
  };

  const {
    data: categories,
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

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
          <Box paddingTop="2rem">
            <Select
              borderColor="#6A6A6A"
              focusBorderColor="#595959"
              w="15rem"
              fontFamily="inter"
              onChange={(e) => appContext?.setCategory(e.target.value)}
            >
              <option value="All">All</option>
              {categories?.map((category) => {
                return (
                  <option key={category._id} value={category.category_name}>
                    {category.category_name}
                  </option>
                );
              })}
            </Select>
          </Box>
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
