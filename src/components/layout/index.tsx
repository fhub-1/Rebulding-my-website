import { PropsWithChildren } from "react";
import {VStack,Container} from "@chakra-ui/react"

type Props = PropsWithChildren<{}>;

const Layout = ({children}: Props) => {
  return(
    <Container maxW="container.md">
   <VStack spacing={0}>
         {/* working on the header part */}
         {children}
         {/* Footer section */}
   </VStack>
   </Container>
  );
}

export default Layout;