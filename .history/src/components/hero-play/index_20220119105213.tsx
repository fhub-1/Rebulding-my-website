import { IconButton, Icon } from "@chakra-ui/react";
import { HiPlay, HiStop } from "react-icons/hi";
import { useAudio } from "react-use";

const HeroPlay = () => {
  const [audio, state, controls] = useAudio({
    src: '/assets/josephkitheka.mp3',
    autoPlay: true, // auto
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
            as={state.playing :HiPlay}
      w={{ base: 12, md: 8 }}
      h={{ base: 12, md: 8 }}
          />
        }
      variant="unstyled"
      size="xs"
      rounded="full"
      onClick={toggle}
      />
    </>
  );
};

export default HeroPlay;
