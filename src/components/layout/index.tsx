import { PropsWithChildren } from "react";
import {VStack,Container} from "@chakra-ui/react"
import Header from "./header";

type Props = PropsWithChildren<{}>;

const Layout = ({children}: Props) => {
  return(
    <Container maxW="container.md">
   <VStack spacing={0}>
         <Header/>
         {children}
         {/* Footer section */}
   </VStack>
   </Container>
  );
}

export default Layout;