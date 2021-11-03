import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: "gray.700"
      }
    },
    Text: {
      baseStyle: {
        color: "gray.700"
      }
    }
  },
  colors: {
    twitch: "#6441a5"
  },
  fonts: {
    heading: `Poppins, ${base.fonts.heading}`,
    body: `Inter, ${base.fonts.body}`
  }
});

export default theme;
