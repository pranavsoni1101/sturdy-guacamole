import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import Section from '../../../../component/Section';
import SectionContent from '../../../../component/Section/SectionContent';
import { useRouter } from 'next/router';
import data from '../data';
import Link from 'next/link';
import Head from 'next/head';
import path from 'path';
import fs from "fs/promises";
import allProducts from '../../../../backendData/data.json';

import { GetStaticPaths, GetStaticProps } from 'next';

interface PropsInterface {
    label: string | undefined;
	img: string | undefined;
	img2?: string;
	subLabel?: string;
	children?: Array<PropsInterface>;
}

const ProductType = (props: { data: PropsInterface, hasError: boolean }) => {

    const router  = useRouter();
    const { productType } = router.query!;
    
    
    const [state, setState]= useState<PropsInterface[]>([]);
    console.log("state",state);
    

    useEffect(() => {
        // localStorage.setItem("url", productType!.toString());
        
        // if(productType !== localStorage.getItem("url"))
        // localStorage.clear();
        
        allProducts.map((product) => {
            if(productType === product.label){
                setState(prevState => [
                    ...prevState,
                    product
                ]);
            }
        })

    }, [productType])
    // const {label, subLabel, img, children} = props.specificStarData!;
    // const {label, subLabel} = state;
    // const {children} : Array<PropsInterface> = state;
    return(
        <>
            <Head>
                {/* <title>{state[0].label}</title> */}
            </Head>
            <Section>
                <SectionContent>
                    <Heading>
                        {/* {state[0].label} */}
                    </Heading>
                    <Text
                        my = "1em"
                    >
                        {/* {state[0].subLabel} */}
                        {/* {props.data.subLabel} */}
                    </Text>
                    <Grid
                        templateColumns = "repeat(12, 1fr)"
                        gap={4}
                    >
                        {/* {props.data.children?.map(child => ( */}
                        {/* {state[0].children!.map((child: any) => ( */}
                            <GridItem
                                colSpan={3}
                            >
                                <Link
                                    // href={`/ourProducts/${productType}/${child.label}`}
                                    href={`/ourProducts/${productType}/product  `}
                                >
                                <Box
                                    borderRadius= "3xl"
                                    boxShadow= "xl"
                                >
                                    <Image 
                                        borderRadius= "20px 20px 0  0"
                                        src='https://images.unsplash.com/photo-1681725142773-5756fad63e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
                                    />
                                    <Box
                                        p = "1em"
                                        textAlign= "center"
                                    >
                                        <Heading
                                            as = "h4"
                                            fontSize= "md"
                                        >
                                            {/* {child.label} */}
                                        </Heading>
                                    </Box>
                                </Box>
                                </Link>
                            </GridItem>
                        {/* ))}  */}
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default ProductType;

async function getData() {
    // log
    const filePath = path.join(process.cwd(), 'backendData', 'data.json');
    const fileData = await fs.readFile(filePath);
    console.log("file fuck data, ",JSON.parse(fileData.toString()));
    const data = JSON.parse(JSON.stringify(fileData));

    return data;
  }

  export const getStaticProps: GetStaticProps = async (context) => {
    const productLabel = context.params?.productType;
    let data, foundItem;
    try{
        data = await getData();
        foundItem = data.find((item: PropsInterface) => productLabel === item.label);
    }
    catch(err){
        throw err;
    }
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  console.log("found item at",foundItem)
  return {
    props: {
      data: foundItem
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();
    // console.log("Data",data);
    
    const pathsWithParams = data.data.map((star: PropsInterface) => ({ params: { productType: star.label }}))

    return {
        paths: [],
        fallback: true
    }
  }
