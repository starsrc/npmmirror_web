import type { Metadata } from "next";
import React from "react";
import { Provider } from "@/components/ui/provider";
import { Box, Container } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "龙总专用npmmirror 镜像站",
  description: "稳定、简洁的 NPM 包镜像与搜索,龙总出品，必属精品",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Provider>
          <Box bg={{ base: "white", _dark: "black" }} minH="100vh">
            <Header />
            <Container>{children}</Container>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
