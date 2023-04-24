import { Text } from "@chakra-ui/react";
import Link from "next/link";
import useApp from "../hooks/useApp";

interface NavLinkProps {
  nav: string;
}

function NavLink(props: NavLinkProps) {
  const { nav } = props;
  const appContext = useApp();

  return (
    <Link href={nav === "Home" ? "/" : nav.toLowerCase()}>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        transition="all .2s ease"
        pos="relative"
        fontWeight={appContext?.activeNav === nav ? "semibold" : "normal"}
        color={
          appContext?.activeNav === nav ? "palette.primary" : "palette.gray"
        }
        _hover={{
          color: "palette.primary",
        }}
      >
        {nav}
      </Text>
    </Link>
  );
}

export default NavLink;
