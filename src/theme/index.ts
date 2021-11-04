import { extendTheme, theme as base } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: (props) => ({
        color: mode("gray.700", "white")(props)
      })
    },
    Text: {
      baseStyle: (props) => ({
        color: mode("gray.700", "white")(props)
      })
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
