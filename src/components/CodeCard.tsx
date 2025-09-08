// src/components/CodeCard.tsx
"use client";
import {
  Heading,
  Text,
  Code,
  VStack,
  Card,
  Blockquote,
  Box,
} from "@chakra-ui/react";

export default function CodeCard() {
  return (
    <Box>
      <Blockquote.Root mb={6} borderLeftWidth={4} pl={4}>
        <Blockquote.Content color={{ base: "black", _dark: "white" }}>
          这是一个完整 npmmirror.io
          镜像，你可以用此代替官方版本(只读)，我们将尽量与官方服务实时同步。
        </Blockquote.Content>
      </Blockquote.Root>
      <Card.Root mb={8} boxShadow="md" borderWidth={1} borderColor={{ base: "gray.200", _dark: "gray.700" }} bg={{ base: "white", _dark: "gray.800" }}>
        <Card.Header>
          <Heading size="md">使用说明</Heading>
        </Card.Header>
        <Card.Body>
          <VStack align="stretch" gap={4}>
            <Text>
              你可以使用我们定制的cnpm命令行工具代替默认的 npm。 cnpm
              支持除了写相关操作外的所有命令，例如 install、info、view 等。
            </Text>
            <Code p={3} rounded="md" whiteSpace="pre">
              {`npm install -g cnpm --registry=https://registry.npmmirror.io
cnpm install <pkg-name>`}
            </Code>
            <Text>或者你直接通过添加 npm 参数 alias 一个新命令</Text>
            <Code p={3} rounded="md" whiteSpace="pre">
              {`alias cnpm="npm --registry=https://registry.npmmirror.io \ --cache=$HOME/.npm/.cache/cnpm \ --disturl=https://npmmirror.io/mirrors/node \ --userconfig=$HOME/.cnpmrc"`}
            </Code>
            <Text>
              当然，你也可以使用任意你心仪的命令行工具，只要配置 registry 即可
            </Text>
            <Code p={3} rounded="md" whiteSpace="pre">
              {`npm config set registry https://registry.npmmirror.io
npm install <pkg-name>`}
            </Code>
            <Heading size="md">安装模块</Heading>
            <Code p={3} rounded="md" whiteSpace="pre">
              {`cnpm install [name]`}
            </Code>
            <Heading size="md">同步模块</Heading>
            <Code p={3} rounded="md" whiteSpace="pre">
              {`cnpm sync cnpmcore`}
            </Code>
            <Text>
              当然, 你可以直接通过 web 方式来同步, 界面打开时会自动比对版本信息
            </Text>
            <Code p={3} rounded="md" whiteSpace="pre">
              {`open https://npmmirror.io/sync/cnpmcore`}
            </Code>
          </VStack>
        </Card.Body>
      </Card.Root>
      </Box>
  );
}
