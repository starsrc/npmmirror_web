import React from 'react'
import { ColorModeButton } from "@/components/ui/color-mode"
import { Flex, Heading } from '@chakra-ui/react'
export default function Header() {
  return (
    <Flex>
      <Heading flex={1} ml={4} my={4} color={{ base: "black", _dark: "white" }}>npmmirror 镜像站</Heading>
      <ColorModeButton mr={4} my={4}/>
    </Flex>
  )
}
