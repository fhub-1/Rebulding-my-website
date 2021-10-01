import { ChakraProvider } from "@chakra-ui/react";
import {AppProps} from "next/app";

import theme from "../src/theme"
const App = ({Component, pageProps}: AppProps) => {
    return(
        // adding chakra ui
        <ChakraProvider theme={theme}>
        <Component {...pageProps}/>
        </ChakraProvider>
    )
};

export default App;