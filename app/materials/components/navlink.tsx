import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavLinkProps {
  nav: string;
}

function NavLink(props: NavLinkProps) {
  const { nav } = props;

  return (
    <Link href={nav === "Home" ? "/" : nav.toLowerCase()}>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        transition="all .2s ease"
        pos="relative"
        fontWeight="400"
        color="palette.gray"
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
