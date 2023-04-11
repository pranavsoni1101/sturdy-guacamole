import React, { ReactNode} from "react";
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from "next/app";
// import Layout from "../components/Layout";
// import theme from "../theme/theme";

import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps): ReactNode => {

    return (

        <ChakraProvider >
            <CSSReset />
            {/* <Layout> */}
                <Component {...pageProps} />
            {/* </Layout> */}
        </ChakraProvider>
    )
}
export default App;