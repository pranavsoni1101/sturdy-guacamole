import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Grid, Box, Heading, GridItem, Image, Text, Button } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Section from '../../../component/Section';
import SectionContent from '../../../component/Section/SectionContent';
import productData from './data';

const OurProducts = () => {
    return(
        <>
            <Head>
                <title>Our Products</title>
            </Head>
            <Section>
                <SectionContent>
                    <Heading>
                        Our Products
                    </Heading>
                    <Grid
                        templateColumns = "repeat(12, 1fr)"
                        gap={4}
                    >
                        {productData.map((product, index)=> (
                            <GridItem
                                colSpan={4}
                                key = {index}
                            >
                                <Box
                                    boxShadow    = "lg"
                                    borderRadius = "lg"
                                    h = "lg"
                                >
                                    <Image 
                                        src={product.img} 
                                        alt = {product.label}
                                        borderRadius = "20px 20px 0 0"
                                        height = "xs "
                                        width= "100%"
                                    />
                                    <Box
                                        p = "1em"
                                    >
                                        <Heading 
                                            as = "h3"
                                            fontSize= "xl"
                                            textTransform= "capitalize"
                                        >
                                            {product.label}
                                        </Heading>
                                        <Text
                                            mt = "0.5em"
                                            noOfLines={3}
                                        >
                                            {product.subLabel}
                                        </Text>

                                    </Box>
                                    <Button
                                        mr={"1em"}
                                        as= {Link}
                                        float= "right"
                                        border = "2px solid"
                                        color = "brand1.500"
                                        borderColor= "brand1.500"
                                        background= "none"
                                        rightIcon={<ArrowForwardIcon />}
                                        href = {`/ourProducts/${product.label}`}
                                        _hover = {{
                                            background: "brand1.500",
                                            color: "#fff"
                                        }}
                                    >
                                        Explore More
                                    </Button>
                                </Box>
                            </GridItem>
                        ))}
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default OurProducts;