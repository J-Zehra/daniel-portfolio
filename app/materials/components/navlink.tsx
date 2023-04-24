import { Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import useApp from "../hooks/useApp";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavLinkProps {
  nav: string;
}

function NavLink(props: NavLinkProps) {
  const { nav } = props;
  const appContext = useApp();

  return (
    <Link href={nav === "Home" ? "/" : nav.toLowerCase()}>
      <HStack spacing=".1rem">
        {appContext?.activeNav === nav ? (
          <Box
            w="1.5rem"
            h="1.5rem"
            as={motion.div}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Image
              src="/assets/star.svg"
              alt="Star"
              width={500}
              height={500}
              style={{ width: "100%" }}
            />
          </Box>
        ) : null}
        <Text
          display="flex"
          justifyContent="center"
          alignItems="center"
          transition="all .2s ease"
          pos="relative"
          color={
            appContext?.activeNav === nav ? "palette.primary" : "palette.gray"
          }
          _hover={{
            color: "palette.primary",
          }}
        >
          {nav}
        </Text>
      </HStack>
    </Link>
  );
}

export default NavLink;
