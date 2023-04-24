import { extendTheme } from "@chakra-ui/react";

const colors = {
  palette: {
    primary: "#EFEEFE",
    secondary: "#1C1F20",
    gray: "rgba(245, 254, 255, .69)",
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body: `'Poppins', sans-serif`,
};

const styles = {
  global: {
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
      border: "0",
      padding: "0",
    },
    body: {
      overflowX: "hidden",
      bg: "palette.primary",
      color: "palette.secondary",
    },
    _placeholder: {
      color: "rgba(38, 50, 56, .6)",
      fontSize: ".9rem",
    },
    "::-webkit-scrollbar": {
      width: "10px",
    },
    button: {
      p: "1.7rem",
      fontFamily: "inter",
      _hover: {},
    },
    // "::-webkit-scrollbar-track": {
    //   background: "#F6F5FF",
    // },
    // "::-webkit-scrollbar-thumb": {
    //   background: "#B0AFBF",
    //   borderRadius: "10rem",
    // },
  },
};

const theme = extendTheme({ colors, fonts, styles });
export default theme;
