"use client";

import { ChakraProvider } from "@chakra-ui/react";
import AppContext from "./materials/context/appContext";
import Navbar from "./materials/components/navbar";
import theme from "./materials/utils/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Daniel | Home</title>
        <link rel="icon" type="image/x-icon" href="/white_logo.svg" />
      </head>
      <body>
        <AppContext>
          <ChakraProvider theme={theme}>
            <Navbar
              logo="/white_logo.svg"
              navLinks={["Home", "About", "Portfolio", "Contact"]}
            />
            {children}
          </ChakraProvider>
        </AppContext>
      </body>
    </html>
  );
}
