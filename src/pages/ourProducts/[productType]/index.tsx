import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import Section from '../../../../component/Section';
import SectionContent from '../../../../component/Section/SectionContent';
import { useRouter } from 'next/router';
import data from '../data';
import Link from 'next/link';
import Head from 'next/head';
import path from 'path';
import fs from 'fs';
import fsPromises from "fs/promises";
import allProducts from '../../../../backendData/data.json';

import { GetStaticPaths, GetStaticProps } from 'next';
import matter from 'gray-matter';

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
    console.log("router as path",router.asPath);
    
    
    const [state, setState]= useState({});
    console.log("state",state);
    

        console.log("this is the props",props);
    useEffect(() => {
        let windowStorage = window.sessionStorage.getItem("data");
        setState(JSON.parse(windowStorage!));
        window.sessionStorage.setItem("data", JSON.stringify(props));

    //     allProducts.products.map((product) => {
    //         if(productType === product.label){
    //             setState(prevState => [
    //                 ...prevState,
    //                 product
    //             ]);
    //         }
    //     })

    }, [])

    return(
        <>
            <Head>
                {/* <title>{state.data.label}</title> */}
            </Head>
            <Section>
                <SectionContent>
                    <Heading>
                        {/* {props.data.label} */}
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
    // const filePath = path.join(process.cwd(), 'backendData','data.json');
    // const jsonData = await fsPromises.readFile(filePath);
    // const data = JSON.parse(jsonData.toString());
  
    const fullPath = path.join(process.cwd(), 'backendData', 'data.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const data = JSON.parse(fileContents);
  
    return data;
  }

  export const getStaticProps: GetStaticProps = async (context) => {
    const prodLabel = context.params?.productType;
    const data = await getData();
    const foundItem = data.products.find((item: PropsInterface) => prodLabel === item.label);
  
    if (!foundItem) {
      return {
        props: { hasError: true },
      }
  }
  
  return {
    props: {
        productData: foundItem
    }
  }
}


//   export const getStaticProps: GetStaticProps = async (context) => {
//     const productLabel = context.params?.productType;
//     let data, foundItem;
//     try{
//         data = await getData();        
//         foundItem = data.products.find((item: PropsInterface) => productLabel === item.label);
//     }
//     catch(err){
//         throw err;
//     }
//     if (!foundItem) {
//       return {
//         props: { hasError: true },
//       }
//   }
//   console.log("found item at",foundItem)
//   return {
//     props: {
//       data: foundItem
//     }
//   }
// }

export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();
    // console.log("Data",JSON.parse(data));
    
    const pathsWithParams = data.products.map((star: PropsInterface) => ({ params: { productType: star.label }}))

    // const pathsWithParams = data.data.map((star: PropsInterface) => ({ params: { productType: star.label }}))

    return {
        paths: [],
        fallback: true
    }
  }
