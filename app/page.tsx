import { Box, ColorModeScript } from "@chakra-ui/react";
import  ContentMain  from "./components/ContentMain";
import { Head, Html, Main, NextScript } from "next/document";

export default function Page() {
  return (
    
    <Box w='90%' p={4} margin='0 auto' textAlign='justify' maxWidth='100rem'>
      <ContentMain />
    </Box>
  )
}