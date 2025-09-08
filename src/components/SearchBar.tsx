// src/components/SearchBar.tsx
"use client";
import { InputGroup, Input, IconButton, HStack } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const [q, setQ] = useState("");
//   const router = useRouter();
//   const go = () => q.trim() && router.push(`/search?q=${encodeURIComponent(q.trim())}`);

  return (
    <HStack w="full">
      <InputGroup>
        {/* Removed InputLeftElement as it is not exported by Chakra UI */}
        <Input
          size="lg"
          placeholder="输入 NPM 包名、作者、关键词…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        //   onKeyDown={(e) => e.key === "Enter" && go()}
        />
      </InputGroup>
      <IconButton aria-label="搜索" size="lg" 
    //   onClick={go}
       ><IoSearch/></IconButton>
    </HStack>
  );
}
