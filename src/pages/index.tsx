import { Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Section from '../../component/Section';
import SectionContent from '../../component/Section/SectionContent';

const Home = () => {
    return(
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Section>
                <SectionContent>
                <Grid
                            templateColumns = "repeat(12, 1fr)"
                            gap={4}
                        >
                            <GridItem
                                colSpan={6}
                            >
                                <Heading
                                    as = "h1"
                                    size="2xl" 
                                >
                                    Welcome To
Pashupati Textile Prints Pvt Ltd    
                                </Heading>
                                <Text
                                    mt       = "1em"   
                                    fontSize = "xl"
                                >
                                    Pashupati Textile Prints Pvt. Ltd. is a renowned name 
                                in Textile Industry as a Manufacturer and Whole seller 
                                of Textile Products. 

                                At Pashupati, we take pride in everything we produce. 
                                Although our industry has changed immensely over time, 
                                there are some things that remain constant such as our 
                                attention to detail, the quality of our goods and our 
                                care for those who use our products.
                                
                                Please browse through our site to get a better 
                                idea of who we are and what we do
                                </Text>
                            </GridItem>
                            <GridItem
                                colStart = {7}
                                colEnd = {12}
                            >
                                <Image
                                    ml="40"
                                    src='https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
                                    alt             = 'What makes us unique'
                                    borderRadius    = "md"
                                />
                            </GridItem>
                        </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;