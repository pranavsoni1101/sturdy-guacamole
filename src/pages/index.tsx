import { Heading } from '@chakra-ui/react';
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
                    <Heading>Hi this is heading</Heading>
                </SectionContent>
            </Section>
        </>
    )
}

export default Home;