import { Box, AspectRatio } from "@chakra-ui/react";

import Me from "./me.jpg";
import Image from "@/components/image";

const HeroImage = () => {
  return (
    <AspectRatio flexShrink={0} ratio={1} w={56} h={56}>
      <Box>
        <Image alt="Joseph's profile photo" src={Me} rounded="full" />
      </Box>
    </AspectRatio>
  );
};

export default HeroImage;
