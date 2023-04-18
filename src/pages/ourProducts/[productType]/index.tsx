import React, { useEffect, useState } from 'react';
import { Heading, Text, Box, Grid, GridItem, Image, Button } from '@chakra-ui/react';
import Section from '../../../../component/Section';
import SectionContent from '../../../../component/Section/SectionContent';
import { useRouter } from 'next/router';
import data from '../data';
import Link from 'next/link';


const ProductType = () => {
    const router  = useRouter();
    const { productType } = router.query;
    const [url, setUrl] = useState(productType);

    
    console.log(productType);
    
    const [state, setState]= useState({});
    console.log(state);
    

    useEffect(() => {
        data.map((product) => {
            if(productType === product.label){
                setState(product);
            }
        })
    }, [])
    return(
        <>
            <Section>
                <SectionContent>
                    <Heading>
                        {state.label}
                    </Heading>
                    <Text
                        my = "1em"
                    >
                        {state.subLabel}
                    </Text>
                    <Grid
                        templateColumns = "repeat(12, 1fr)"
                        gap={4}
                    >
                        <GridItem
                            colSpan={3}
                        >
                            <Link
                                href={`/ourProducts/${productType}/product`}
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
                                        Hiii
                                    </Heading>
                                </Box>
                            </Box>
                            </Link>
                        </GridItem>
                    </Grid>
                </SectionContent>
            </Section>
        </>
    )
}

export default ProductType;