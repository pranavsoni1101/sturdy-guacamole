import { Grid, GridItem, Heading, Text, Image, Button } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Carousel from "../../component/Carousel";
import Section from "../../component/Section";
import SectionContent from "../../component/Section/SectionContent";

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Section>
				<SectionContent>
					<Grid 
                        templateColumns="repeat(12, 1fr)" 
                        gap={4}
                    >
						<GridItem 
                            colSpan={6}
                        >
							<Heading 
                                as="h1" 
                                mt = "13%"
                                size="4xl"
                            >
								Welcome To Pashupati Textile Prints Pvt Ltd
							</Heading>
							<Text 
                                mt="1em" 
                                fontSize="2xl"
                            >
								Pashupati Textile Prints Pvt. Ltd. is a renowned
								name in Textile Industry as a Manufacturer and
								Whole seller of Textile Products. At Pashupati,
								we take pride in everything we produce. Although
								our industry has changed immensely over time,
								there are some things that remain constant such
								as our attention to detail, the quality of our
								goods and our care for those who use our
								products. Please browse through our site to get
								a better idea of who we are and what we do
							</Text>
							<Button
								p="1em 2em"
								as={Link}
								mt="1em"
								href="/aboutUs"
								size="lg"
								color="brand1.500"
								float="right"
								border="3px solid"
								transition="all 0.3s ease-in-out "
								background="none"
								borderColor="brand1.500"
								borderRadius="xl"
								textTransform="capitalize"
								_hover={{
									color: "#fff",
									background: "brand1.500",
								}}
							>
								Read Our Story
							</Button>
						</GridItem>
						<GridItem colStart={7} colEnd={12}>
							<Image
                                mt = "15%"
 								ml="40"
								src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
								alt="What makes us unique"
								borderRadius="md"
							/>
						</GridItem>
					</Grid>
				</SectionContent>
			</Section>
            <br />
            <br />
            <br />
            <br />
            <br />

			<Section
                height = "15em"
                bgColor = "brand1.50"
            >
				<SectionContent>
                </SectionContent>
			</Section>
            <Section>
                <SectionContent>
                    <Carousel />
                </SectionContent>
            </Section>
		</>
	);
};

export default Home;
