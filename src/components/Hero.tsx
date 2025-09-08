// src/components/Hero.tsx
"use client";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <VStack align="stretch">
      <Box mx={4} textAlign="center" my={8} color={{ base: "black", _dark: "white" }}>
        <Heading size="2xl" mb={2} >NPM Mirror</Heading>
        <Text color="gray.600">Stable, simple, and high-speed NPM mirror.</Text>
      </Box>
      <SearchBar />
    </VStack>
  );
}
