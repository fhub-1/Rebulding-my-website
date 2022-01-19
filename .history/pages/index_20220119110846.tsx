import {
  VStack,
  HStack,
  Stack,
  Heading,
  IconButton,
  Icon,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

import { HiPlay, HiPause } from "react-icons/hi";
import ExternalLink from "../src/components/external-link";
import { Link as LinkType } from "types/link";
import { TWITCH_CHANNEL, FACEBOOK_GROUP, DISCORD_SERVER } from "src/constants";
import HeroImage from "../src/components/hero-image";
import HeroPlay from "@/components/hero-play";

type SocialLink = LinkType & { color: string };

const socialLinks: SocialLink[] = [
  {
    href: TWITCH_CHANNEL,
    label: "TWITCH_CHANNEL",
    color: "twitch",
  },
  {
    href: FACEBOOK_GROUP,
    label: "Facebook_Group",
    color: "blue.700",
  },
  {
    href: DISCORD_SERVER,
    label: "Discord_Server",
    color: "purple.700",
  },
];

const IndexPage = () => (
  <VStack spacing={20} w="full">
    <Stack
      alignItems="center"
      spacing={12}
      direction={{ base: "column-reverse", md: "row" }}
      w="full"
    >
      <VStack spacing={3} alignItems="flex-start" w="full">
        <Stack
          spacing={3}
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems="center"
        >
          <Heading size="lg">Hi, I'm Joseph Kitheka.</Heading>
          <HeroPlay />
        </Stack>
        <Text lineHeight="175%">
          I'm a{" "}
          <strong>
            <ExternalLink href="https://www.linkedin.com/in/joseph-kitheka-4827a01a7/">
              Self-Taught-Developer
            </ExternalLink>
          </strong>{" "}
          that loves building products and web applications that impact{" "}
          <strong>millions of lives</strong>. Currently working on{" "}
          <strong>
            <ExternalLink href="https://www.facebook.com/groups/3343365749039855/">
              {" "}
              Hack the coding has Team leader
            </ExternalLink>
          </strong>
          .I'm also a{" "}
          <strong>
            <ExternalLink href="https://www.youtube.com/channel/UCAOdLWYUTCgX5PjNSI2DNIg">
              Youtube Content Creator
            </ExternalLink>
          </strong>
        </Text>
        <Stack spacing={3} direction={{ base: "column", md: "row" }}>
          {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              variant="ghost"
              href={href}
              targt="_blank"
              px={{ base: 0, md: 4 }}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              color={color}
              rightIcon={<Icon as={FiArrowUpRight} />}
            >
              {label}
            </Button>
          ))}
        </Stack>
      </VStack>
      <HeroImage />
    </Stack>
    <VStack>
      <Heading size='md' alignItems="flex-start">Coures.</Heading>
    </VStack>
  </VStack>
);
export default IndexPage;
