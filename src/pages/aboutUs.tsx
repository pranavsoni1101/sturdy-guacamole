import { Grid, GridItem, Heading, Text, Image } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Section from '../../component/Section';
import SectionContent from '../../component/Section/SectionContent';

const AboutUs = () => {
    return(
        <>
            <Head>
                <title>About Us</title>
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
                                    About Us
                                </Heading>
                                <Text
                                    mt       = "1em"   
                                    fontSize = "lg"
                                >                                    
                                    Pashupati Textile Prints Private Limited is a 
                                    renowned name in Textile Industries as a 
                                    Manufacturer and Whole seller from a long period. 
                                    Because of our cost-effective process, our products 
                                    are both Economical and of High Quality. Our Company was 
                                    Established in 1973 and came into existence in 1996. Our 
                                    Company & Manufacturing base is in Meerut, Uttar Pradesh, India.
                                    
                                    <br />
                                    <br />
                                    
                                    We are known for the Quality of our products in the market, 
                                    whose process of manufacturing is done under our guidance. 
                                    Our Manufacturing Units never compromises with the quality 
                                    of the product and at the same time ensures reasonable prices.
                                    <br />
                                    <br />

                                    Our End to End process includes Processing of Raw 
                                    Material, Weaving/ Knitting, Dying, Screen Printing/ Block 
                                    Printing, Stitching, Packaging, Final Product.
                                    <br />
                                    <br />

                                    We Manufacture Bed sheets, Pillow Covers, Dewan Set, Bolster 
                                    Covers, Cushion Covers, A.C Quilts/ Dohars, Sofa Covers, 
                                    Table Cover and Customized Products.
                                    <br />
                                    <br />

                                    Our Products are made of 100% Cotton which makes our 
                                    products more Affordable, Durable, Eco – Friendly, 
                                    Easy to Wash, Hypo allergic and Stretchable. To hold 
                                    upon our Quality Bench Mark we have been recognized 
                                    as an ISO Certified 9001:2015 Company which ensures 
                                    that quality of our products is up to the 
                                </Text>
                            </GridItem>
                            <GridItem
                                colStart = {7}
                                colEnd = {12}
                            >
                                <Image
                                    ml="40"
                                    mt = "10%"
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

export default AboutUs;