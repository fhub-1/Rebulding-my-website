import { IconButton, Icon } from "@chakra-ui/react";
import { HiPlay, HiStop } from "react-icons/hi";
import { useAudio } from "react-use";

const HeroPlay = () => {
  const [audio, state, controls] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: false,
  });

  const play = () => {
    controls.play();
  };

  const stop = () => {
    controls.pause();
    controls.seek(0);
  };

  const toggle = () => {
    if (state.playing) {
      stop();
    } else {
      play();
    }
  }

  return (
    <>
      {audio}
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
