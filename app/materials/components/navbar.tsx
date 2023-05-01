import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import breakPoints from "../utils/breakpoints";
import Image from "next/image";
import NavLink from "./navlink";
import useApp from "../hooks/useApp";
import MobileMenu from "./mobileMenu";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar(props: NavItems): ReactElement {
  const { logo, navLinks, logo_dark } = props;
  const appContext = useApp();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TRACK SCREEN SIZE TO ADJUST THE NAV APPEARANCE
  const [isSmallerThan850] = useMediaQuery("(max-width: 48em)");

  return (
    <Box
      zIndex={999}
      w="100%"
      pos="fixed"
      transition="all .1s ease"
      bg={
        appContext?.isSectionInView && appContext.activeNav !== "Home"
          ? "palette.secondary"
          : "transparent"
      }
      backdropFilter={appContext?.scrolled ? "blur(15px)" : "none"}
      h={appContext?.scrolled ? "4rem" : "5rem"}
      boxShadow={appContext?.scrolled ? "0 0 10px rgba(0, 0, 0, .5)" : "none"}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        h="100%"
        margin="auto"
        w={breakPoints}
      >
        {/* LOGO */}
        <Link href="/">
          <Image
            src={appContext?.activeNav === "Home" ? logo_dark : logo}
            alt="logo"
            width={500}
            height={500}
            style={{ width: "2.5rem" }}
          />
        </Link>
        {/* NAVIGATION LINKS */}
        {isSmallerThan850 ? (
          <Box
            fontSize="1.8rem"
            color={
              appContext?.activeNav === "Home"
                ? "palette.secondary"
                : "palette.primary"
            }
            onClick={onOpen}
          >
            <AiOutlineMenu />
          </Box>
        ) : (
          <HStack spacing="2rem">
            {navLinks.map((nav) => {
              return <NavLink nav={nav} key={nav} />;
            })}
          </HStack>
        )}
      </Flex>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Navbar;
