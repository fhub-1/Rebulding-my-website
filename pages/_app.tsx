import { ChakraProvider } from "@chakra-ui/react";
import {AppProps} from "next/app";
import Layout from "../src/components/layout";

import theme from "../src/theme"
const App = ({Component, pageProps}: AppProps) => {
    return(
        // adding chakra ui
        <ChakraProvider theme={theme}>
        <Layout>
        <Component {...pageProps}/>
        </Layout>
        </ChakraProvider>
    )
};

export default App;