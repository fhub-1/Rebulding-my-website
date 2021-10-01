import { HStack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";

const Header = () => {
    return(
      <HStack width="full" justifyContent="space-between">
          <Heading>
            Joseph Kitheka.
          </Heading>
          <HStack>
          <Heading>Talks</Heading>
          <Heading>Bookmarks</Heading>
          <Heading>Blog</Heading>
   
          </HStack>
      </HStack>
    );
}

export default Header;