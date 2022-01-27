import { HStack } from "@chakra-ui/layout";
import {
  Heading,
  IconButton,
  useColorMode,
  Button,
  Link
} from "@chakra-ui/react";
import { IoMoon, IoSunny } from "react-icons/io5";
import NextLink from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack as="nav" justifyContent="space-between" alignItems="center" py={3}>
      <NextLink href="/" passHref>
        <Link>
          <Heading size="sm">Joseph Kitheka.</Heading>
        </Link>
      </NextLink>
      <HStack alignItems="center" spacing={{ base: "" }}>
        <NextLink href="/talks" passHref>
          <Button
            _hover={{ textDecoration: "none" }}
            as={Link}
            size="sm"
            variant="ghost"
          >
            Talks
          </Button>
        </NextLink>
        <NextLink href="/bookmarks" passHref>
          <Button
            _hover={{ textDecoration: "none" }}
            as={Link}
            size="sm"
            variant="ghost"
          >
            Bookmarks
          </Button>
        </NextLink>
        <NextLink href="/blog" passHref>
          <Button
            _hover={{ textDecoration: "none" }}
            as={Link}
            size="sm"
            variant="ghost"
          >
            Blog
          </Button>
        </NextLink>
        <IconButton
          aria-label="toggle theme"
          icon={colorMode === "light" ? <IoMoon /> : <IoSunny />}
          variant="ghost"
          size="sm"
          onClick={toggleColorMode}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
