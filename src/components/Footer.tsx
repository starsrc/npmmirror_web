import React from 'react'
import { Em, Flex } from '@chakra-ui/react'
export default function Footer() {
  return (
    <Flex color={{ base: "black", _dark: "white" }} justify="center" my={4}>
      <Em>© 2024 npmmirror 镜像站. All rights reserved.</Em>
    </Flex>
  )
}
