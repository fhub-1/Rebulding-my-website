import { useRouter } from "next/router";
import NextLink from "next/link";
import { VStack, Divider, Link, Stack } from "@chakra-ui/react";
import {
  TWITTER_PROFILE,
  GITHUB_PROFILE,
  YOUTUBE_CHANNEL,
  FACEBOOK_GROUP,
  TWITCH_CHANNEL
} from "../../constants";
import { Link as LinkType } from "types/link";
import { Copyright } from "./Copyright";

const firstGroup: LinkType[] = [
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
    href: TWITTER_PROFILE,
    label: "Twitter"
  },
  {
    href: GITHUB_PROFILE,
    label: "GitHub"
  },
  {
    href: YOUTUBE_CHANNEL,
    label: "Youtube"
  },
  {
    href: FACEBOOK_GROUP,
    label: "Facebook"
  },
  {
    href: TWITCH_CHANNEL,
    label: "Twitch"
  }
];

const thridGroup = [
  {
    href: "/uses",
    label: "Uses"
  },
  {
    href: "/gear",
    label: "Gear"
  },
  {
    href: "/bookmarks",
    label: "Bookmarks"
  },
  {
    href: "/books",
    label: "Books"
  },
  {
    href: "/Privacy",
    label: "Privacy Pollicy"
  }
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack pb={8} spacing={8} bg="red">
      <Divider />
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        w="full"
        spacing={8}
      >
        <VStack alignItems="flex-start" textDecoration="none">
          {firstGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link color={pathname === href ? "purple.500" : "gray.700"}>
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start" textDecoration="none">
          {secondGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link isExternal target="_blank" color="gray.700">
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start" textDecoration="none">
          {thridGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link isExternal target="_blank" color="gray.700">
                {label}
              </Link>
            </NextLink>
          ))}
          <Copyright alignItems="center" justifyContent="center" />
        </VStack>
      </Stack>
    </VStack>
  );
};

export default Footer;
