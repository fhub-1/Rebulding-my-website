import { IconButton, Icon } from "@chakra-ui/react";
import { HiPlay, HiStop } from "react-icons/hi";
import { useAudio } from "react-use";

const HeroPlay = () => {
  return (
    <>
      <IconButton
        aria-label="Play pronunciation track"
        icon={
          <Icon color="purple.500"
            as={HiPlay}
            w={{ base: 12, md: 8 }}
            h={{ base: 12, md: 8 }}
          />
        }
        variant="unstyled"
        size="xs"
        rounded="full"
      />
    </>
  );
};

export default HeroPlay;
