// src/components/InfoCard.tsx
"use client";
import { Card, Heading, Text } from "@chakra-ui/react";
export default function InfoCard() {
  return (
    <Card.Root mt={4} mb={10} mx={4}>
      <Card.Header><Heading size="md">功能简介</Heading></Card.Header>
      <Card.Body>
        <Text>这是一个完整 npmjs.com 镜像，支持搜索、安装、查看信息等。可替代官方源，服务实时同步。</Text>
      </Card.Body>
    </Card.Root>
  );
}
