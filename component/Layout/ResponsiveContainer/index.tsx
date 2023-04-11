import { Container } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

interface ResponsiveContainerProps {
    children: ReactNode | ReactNode[]
}

const ResponsiveContainer = ({children}: ResponsiveContainerProps) => {
    return(
        <Container maxW={['95%', '90%', '85%', '90%', '85%', '75%']} transition=" 0.4s ease-in-out">
            {children}
        </Container>
    )
}

export default ResponsiveContainer;