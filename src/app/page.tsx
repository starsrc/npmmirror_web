"use client";
import React from "react";
import { SimpleGrid, VStack } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import InfoCard from "@/components/InfoCard";
import CodeCard from "@/components/CodeCard";
import StatusPanel from "@/components/StatusPanel";

export default function Home() {
  return (
    <VStack align="stretch">
      <Hero />
      <SimpleGrid columns={{ base: 1, md: 3 }} >
        <VStack align="stretch" gridColumn={{ md: "span 2" }}>
          <InfoCard />
          <CodeCard />
        </VStack>
        <StatusPanel />
      </SimpleGrid>
    </VStack>
  );
}
