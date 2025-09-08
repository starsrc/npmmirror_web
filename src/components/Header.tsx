import React from 'react'
import { Flex, Heading } from '@chakra-ui/react'
export default function Header() {
  return (
    <Flex>
      <Heading flex={1} ml={4} my={4} color={{ base: "black", _dark: "white" }}>NPMMIRROR.IO</Heading>
    </Flex>
  )
}
