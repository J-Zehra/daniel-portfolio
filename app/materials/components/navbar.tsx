import { Box, Flex, HStack, Link, Text, useMediaQuery } from "@chakra-ui/react";
import { ReactElement } from "react";
import breakPoints from "../utils/breakpoints";
import Image from "next/image";
import NavLink from "./navlink";

function Navbar(props: NavItems): ReactElement {
  const { logo, navLinks } = props;

  // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
  const [isSmallerThan850] = useMediaQuery("(max-width: 48em)");

  return (
    <Box w="100%" pos="fixed" h="5rem">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        margin="auto"
        w={breakPoints}
      >
        {/* LOGO */}
        <Link href="/">
          <Image src={logo} alt="logo" width={500} height={500} />
        </Link>
        {/* NAVIGATION LINKS */}
        {isSmallerThan850 ? (
          <Text>Mobile View</Text>
        ) : (
          <HStack spacing="2rem">
            {navLinks.map((nav) => {
              return <NavLink nav={nav} key={nav} />;
            })}
          </HStack>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
