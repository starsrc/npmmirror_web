// src/components/SearchBar.tsx
"use client";
import { InputGroup, Input, IconButton, HStack } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import { a } from "framer-motion/client";

export default function SearchBar() {
  const [q, setQ] = useState("");
  //   const router = useRouter();
  //   const go = () => q.trim() && router.push(`/search?q=${encodeURIComponent(q.trim())}`);

  return (
    <HStack w="full" align={"stretch"} justify="center" mb={20}>
      <InputGroup maxW={600}>
        {/* Removed InputLeftElement as it is not exported by Chakra UI */}
        <Input
          size="lg"
          placeholder="输入 NPM 包名、作者、关键词…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className=" rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  mx-auto"
          //   autoFocus
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
