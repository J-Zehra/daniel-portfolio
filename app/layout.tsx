"use client";

import { ChakraProvider } from "@chakra-ui/react";
import AppContext from "./materials/context/appContext";
import Navbar from "./materials/components/navbar";
import theme from "./materials/utils/theme";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import Footer from "./materials/components/footer";
import { useState } from "react";
import SplashScreen from "./materials/components/splashScreen";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [splashLoading, setSplashLoading] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Daniel | Home</title>
        <link rel="icon" type="image/x-icon" href="/white_logo.svg" />
      </head>
      <body>
        <AppContext>
          <ChakraProvider theme={theme}>
            {splashLoading ? (
              <SplashScreen />
            ) : (
              <>
                <Navbar
                  logo="/white_logo.svg"
                  logo_dark="/black_logo.svg"
                  navLinks={["Home", "Portfolio", "Contact", "Shop"]}
                />
                {children}
                <Footer />
              </>
            )}
          </ChakraProvider>
        </AppContext>
      </body>
    </html>
  );
}
