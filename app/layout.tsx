"use client";

import { ChakraProvider } from "@chakra-ui/react";
import AppContext from "./materials/context/appContext";

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
          <ChakraProvider>{children}</ChakraProvider>
        </AppContext>
      </body>
    </html>
  );
}
