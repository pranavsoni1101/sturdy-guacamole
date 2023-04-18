import React, { useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import Section from '../../../../component/Section';
import SectionContent from '../../../../component/Section/SectionContent';
import { useRouter } from 'next/router';
import data from '../data';


const ProductType = () => {
    const router  = useRouter();
    const { productType } = router.query;

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
                        {/* {state.label} */}
                    </Heading>
                </SectionContent>
            </Section>
        </>
    )
}

export default ProductType;