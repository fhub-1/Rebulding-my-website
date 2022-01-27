import { GetStaticProps } from "next"
import { promises as fs } from "fs";
import path from "path";

import {
  VStack,
  Stack,
  Heading,
  Icon,
  Text,
  Link,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import ExternalLink from "../src/components/external-link";
import { Link as LinkType } from "../types/link";
import { TWITCH_CHANNEL, FACEBOOK_GROUP, DISCORD_SERVER } from "../src/constants";
import HeroImage from "../src/components/hero-image";
import { Course } from "../types/Course";
import HeroPlay from "../src/components/hero-play";
import CourseCard from "../src/components/course-card";

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

type Props = {
  courses: Course[];
};



const IndexPage = ({ courses }: Props) => {
  return (
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
      <VStack w='full' alignItems="flex-start" spacing='4'>
        <Heading size='md'>Coureses.</Heading>
        <List spacing='6'>
          {courses.map((course) => (
            <ListItem key={course.url}>
              <CourseCard {...course} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </VStack>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const jsonPath = path.join(process.cwd(), 'data/courses.json');
  const coursesContent = await fs.readFile(jsonPath, 'utf8');
  const { courses } = JSON.parse(coursesContent) as { courses: Course[] };
  const props: Props = {
    courses,
  };

  return {
    props,
  }
}

export default IndexPage;
