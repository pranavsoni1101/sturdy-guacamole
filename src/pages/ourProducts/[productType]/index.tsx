import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import Section from '../../../../component/Section';
import SectionContent from '../../../../component/Section/SectionContent';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

import { GetServerSideProps } from 'next';


const ProductType = (props: any) => {

    const router  = useRouter();
    const { productType } = router.query!;
    console.log("this is the props",props.singleProduct.data.childrenProduct);

    const {label, subLabel, img, childrenProduct} = props.singleProduct.data
    return(
        <>
            <Head>
                <title>{label}</title>
            </Head>
            <Section>
                <SectionContent>
                    <Heading>
                        {label}
                    </Heading>
                    <Text
                        my = "1em"
                    >
                        {subLabel}
                    </Text>
                    <Grid
                        templateColumns = "repeat(12, 1fr)"
                        gap={4}
                    >
                        {childrenProduct.map((child: any) => (
                            <GridItem
                                colSpan={3}
                            >
                                <Link
                                    href={`/ourProducts/${productType}/${child.label}`}
                                >
                                <Box
                                    borderRadius= "3xl"
                                    boxShadow= "xl"
                                >
                                    <Image 
                                        borderRadius= "20px 20px 0  0"
                                        src = {`${child.img}`}
                                    />
                                    <Box
                                        p = "1em"
                                        textAlign= "center"
                                    >
                                        <Heading
                                            as = "h4"
                                            fontSize= "md"
                                        >
                                            {child.label}
                                        </Heading>
                                    </Box>
                                </Box>
                                </Link>
                            </GridItem>
                        ))}
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default ProductType;

  export const getServerSideProps: GetServerSideProps = async (context) => {
    const {productType} = context.query;
    let res = await fetch(`http://localhost:3000/api/products/${productType}`, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    })

    let singleProduct = await res.json();

    return {
      props: {singleProduct}
    }
  }
  