import React, { ReactNode} from "react";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from "next/app";
import Layout from "../../component/Layout";
// import theme from "../theme/theme";

import "../styles/globals.css";
import theme from "../../theme/theme";

const App = ({ Component, pageProps }: AppProps): ReactNode => {

    return (

        <ChakraProvider theme={theme} >
            <CSSReset />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}
export default App;