import { useRouter } from "next/router";
import NextLink from "next/link";
import { VStack, Divider, Link, SimpleGrid } from "@chakra-ui/react";
import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  YOUTUBE_CHANNEL,
  POLYWORK_PROFILE,
  TWITCH_CHANNEL
} from "../../constants";

const firstGroup = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/blog",
    label: "Blog"
  },
  {
    href: "/colophon",
    label: "Colophon"
  },
  {
    href: "/talks",
    label: "Talks"
  }
];
const secondGroup = [
  {
    href: "/",
    label: "Twitter"
  },
  {
    href: "/",
    label: "GitHub"
  },
  {
    href: "/",
    label: "Youtube"
  },
  {
    href: "/talks",
    label: "Polywork"
  },
  {
    href: "/talks",
    label: "Twitch"
  }
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={8} spacing={8}>
      <Divider />
      <SimpleGrid columns={{ base: 1, md: 3 }} w="full">
        <VStack alignItems="flex-start" textDecoration="none">
          {firstGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link color={pathname === href ? "purple.500" : "gray.700"}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </SimpleGrid>
    </VStack>
  );
};

export default Footer;
