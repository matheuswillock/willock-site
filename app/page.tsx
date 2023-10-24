import { Box } from "@chakra-ui/react";
import  ContentMain  from "./components/ContentMain";

export default function Page() {
  return (
    
    <Box w='90%' p={4} margin='0 auto' textAlign='justify' maxWidth='100rem'>
      <ContentMain />
    </Box>
  )
}