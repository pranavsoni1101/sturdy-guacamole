import { Box, Flex, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import ResponsiveContainer from '../Layout/ResponsiveContainer';

interface SectionProps {
    bgColor: string; 
    children: ReactNode | ReactNode[]; 
    height: string;
}

const Section = ({ bgColor, children, height, bgImg }: any) => (
    <Box
        width="100%"
        height= {height || "100%"}
        bgColor={bgColor}
        bgImage = {`url(${bgImg})`}
        // marginBottom = "3em"
        paddingTop="2em"
        paddingBottom="2em"
    >
      <ResponsiveContainer>
        <Flex minH="400px" marginY="32px">
          <VStack
            spacing="10"
            alignItems="flex-start"
            flexGrow= {1}
          >
            {children}
          </VStack>
        </Flex>
      </ResponsiveContainer>
    </Box>
);

export default Section;
