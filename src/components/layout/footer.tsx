import { useRouter } from "next/router";
import NextLink from "next/link";
import { Stack, VStack, Divider, Link, SimpleGrid } from "@chakra-ui/react";

const firstGroup= [
  {
  href: '/',
  label: 'Home'
},
{
  href: '/blog',
  label: 'Blog',
},
{
  href: '/colophon',
  label: 'Colophon',
},
{
  href: '/talks',
  label: 'Talks',
},
]

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={8} spacing={8}>
      <Divider />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full">
        <VStack alignItems="flex-start">
          <NextLink href="/home" passHref>
            <Link color={pathname === "/" ? "purple.500" : "gray.500"}>
              Home
            </Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link>Blog</Link>
          </NextLink>
          <NextLink href="/colophon" passHref>
            <Link>Colophon</Link>
          </NextLink>
          <NextLink href="/talks" passHref>
            <Link>Talks</Link>
          </NextLink>
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Footer;
