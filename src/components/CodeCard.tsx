// src/components/CodeCard.tsx
"use client";
import { Heading, Text, Code, VStack,Card} from "@chakra-ui/react";

export default function CodeCard() {
  return (
    <Card.Root>
      <Card.Header><Heading size="md">使用说明</Heading></Card.Header>
      <Card.Body>
        <VStack align="stretch">
          <Text>使用 cnpm：</Text>
          <Code p={3} rounded="md" whiteSpace="pre">
{`npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install <pkg-name>`}
          </Code>
          <Text>或直接切换 npm 源：</Text>
          <Code p={3} rounded="md" whiteSpace="pre">
{`npm config set registry https://registry.npmmirror.com
npm install <pkg-name>`}
          </Code>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
