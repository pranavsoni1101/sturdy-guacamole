import { Box } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
    children: ReactNode | ReactNode[]
}

const Layout = ({children}: LayoutProps) =>  {
    return(
        <>
            {/* Navbar goes here */}
            <Navbar />
            <Box>
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default Layout;