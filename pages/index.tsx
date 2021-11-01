import {
  VStack,
  HStack,
  Stack,
  Heading,
  IconButton,
  Icon,
  Text
} from "@chakra-ui/react";
import { HiPlay, HiPause } from "react-icons/hi";

const IndexPage = () => (
  <VStack spacing={20}>
    <Stack>
      <VStack spacing={3} alignItems="flex-start">
        <HStack spacing={3}>
          <Heading size="lg">Hi, I'm Joseph Kitheka.</Heading>
          <IconButton
            aria-label="Play pronunciation track"
            icon={<Icon color="purple.400" as={HiPlay} w={6} h={6} />}
            variant="unstyled"
            size="xs"
            rounded="full"
          />
        </HStack>
        <Text>
          I'm a <strong>Self-Taught-Developer</strong> that loves building
          products and web applications that impact{" "}
          <strong>millions of lives</strong>. Currently working on{" "}
          <strong>Hack the coding has Team leader</strong>.I'm also a{" "}
          <strong>Youtube Content Creator</strong>
        </Text>
      </VStack>
    </Stack>
  </VStack>
);
export default IndexPage;
