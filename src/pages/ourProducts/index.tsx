import React, { FC } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Grid, Box, Heading, GridItem, Image, Text, Button } from '@chakra-ui/react';
import Section from '../../../component/Section';
import SectionContent from '../../../component/Section/SectionContent';
import { GetServerSideProps, GetStaticProps } from 'next';

interface Props {
    allProducts: any;
    label: string;
	img: string;
	img2?: string;
	subLabel?: string;
	children?: Array<Props>;
}

const OurProducts = (props :any) => {
    // console.log("this is products api fetch", props.allProducts.data);

    const allProducts = props.allProducts.data;
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
                        {allProducts.map((product: Props , index: number)=> (
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
                                            hii
                                        </Heading>
                                        <Text
                                            mt = "0.5em"
                                            noOfLines={3}
                                        >
                                            {product.subLabel}
                                            Hello
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
                                        replace
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

export const getServerSideProps: GetServerSideProps = async () => {
    let res = await fetch("http://localhost:3000/api/products", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    let allProducts = await res.json();

    return {
      props: {allProducts}
    }
  }
  