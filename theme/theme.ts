import { extendTheme } from "@chakra-ui/react";
import '@fontsource/nunito-sans';


const theme = extendTheme({
    colors: {
        brand1: {
            50: "#007f8220",
            300: "#007f8260",
            500: "#007f82"
            
        }
    },
    fonts: {
        heading: "Nunito Sans"
    }
})

export default theme;