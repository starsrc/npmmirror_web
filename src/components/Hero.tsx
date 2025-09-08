// src/components/Hero.tsx
"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <VStack align="stretch">
      <Box mx={4} textAlign="center" my={8}>
        <Heading size="2xl" mb={2} >npmmirror 镜像站</Heading>
        <Text color="gray.600">稳定、简洁的 NPM 包镜像与搜索</Text>
      </Box>
      <SearchBar />
    </VStack>
  );
}
