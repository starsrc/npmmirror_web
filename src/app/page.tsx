"use client";
import React from "react";
import {  VStack } from "@chakra-ui/react";
import Hero from "@/components/Hero";
import CodeCard from "@/components/CodeCard";


export default function Home() {
  return (
    <VStack align="stretch">
      <Hero />
      <CodeCard />
    </VStack>
  );
}
