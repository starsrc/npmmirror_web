// src/components/StatusPanel.tsx
"use client";
import { Card, Heading, VStack, Text } from "@chakra-ui/react";
export default function StatusPanel() {
  return (
    <Card.Root maxH={"200px"} overflowY="auto" maxW={"100%"}>
      <Card.Header><Heading size="md">同步状态</Heading></Card.Header>
      <Card.Body>
        <VStack align="stretch">
          <Text fontSize="sm" color="gray.500">最近同步时间:xxxxxxxx</Text>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
