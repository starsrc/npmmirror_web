// src/components/SearchBar.tsx
"use client";
import { InputGroup, Input, IconButton, HStack } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

import { useState } from "react";


export default function SearchBar() {
  const [q, setQ] = useState("");
  return (
    <HStack w="full" align={"stretch"} justify="center" mb={20}>
      <InputGroup maxW={600}>
        {/* Removed InputLeftElement as it is not exported by Chakra UI */}
        <Input
          size="lg"
          placeholder="输入 NPM 包名、作者、关键词…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className=" rounded-lg px-4 py-2 focus:outline-none "
            autoFocus
          color={{ base: "black", _dark: "white" }}
          //   bg="white"}
          //   onKeyDown={(e) => e.key === "Enter" && go()}
        />
      </InputGroup>
      <IconButton
        aria-label="搜索"
        size="lg"
        //   onClick={go}
      >
        <IoSearch />
      </IconButton>
    </HStack>
  );
}
