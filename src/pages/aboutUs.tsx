import {
	Grid,
	GridItem,
	Heading,
	Text,
	Image,
	Stack,
	StackDivider,
	Box,
	useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Section from "../../component/Section";
import SectionContent from "../../component/Section/SectionContent";

const AboutUs = () => {
	return (
		<>
			<Head>
				<title>About Us</title>
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
                                mt = "1em"
								fontSize="6xl"
							>
								About Us
							</Heading>
							<Text 
                                mt="1em" 
                                fontSize="lg"
                            >
								Pashupati Textile Prints Private Limited is a
								renowned name in Textile Industries as a
								Manufacturer and Whole seller from a long
								period. Because of our cost-effective process,
								our products are both Economical and of High
								Quality. Our Company was Established in 1973 and
								came into existence in 1996. Our Company &
								Manufacturing base is in Meerut, Uttar Pradesh,
								India.
                            </Text>
                            <Text
                                mt="1em" 
                                fontSize="lg"
                            >
                                We are known for the Quality of our products in
                                the market, whose process of manufacturing is
                                done under our guidance. Our Manufacturing Units
                                never compromises with the quality of the
                                product and at the same time ensures reasonable
                                prices.
                            </Text>
                            <Text
                                mt="1em" 
                                fontSize="lg"
                            >
                                Our End to End process includes Processing of
                                Raw Material, Weaving/ Knitting, Dying, Screen
                                Printing/ Block Printing, Stitching, Packaging,
                                Final Product.
                            </Text>
							<Text
                                mt="1em" 
                                fontSize="lg"
                            >
                                We Manufacture Bed sheets, Pillow Covers, Dewan
                                Set, Bolster Covers, Cushion Covers, A.C Quilts/
                                Dohars, Sofa Covers, Table Cover and Customized
                                Products.
                            </Text>
                            <Text
                                mt="1em" 
                                fontSize="lg"
                                mb = "2em"
                            >
								Our Products are made of 100% Cotton which makes
								our products more Affordable, Durable, Eco –
								Friendly, Easy to Wash, Hypo allergic and
								Stretchable. To hold upon our Quality Bench Mark
								we have been recognized as an ISO Certified
								9001:2015 Company which ensures that quality of
								our products is up to the
							</Text>
						</GridItem>
						<GridItem colStart={7} colEnd={12}>
							<Image
								ml="40"
                                mt = "15%"
								src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
								alt="What makes us unique"
								borderRadius="md"
							/>
						</GridItem>
					</Grid>
				</SectionContent>
			</Section>
			<Section bgColor="brand1.50" height="sm">
				<SectionContent>
					<Stack
						w="100%"
						mt="0.3em"
						divider={
							<StackDivider
								border="1px solid"
								borderColor="brand1.500"
								borderRadius="lg"
							/>
						}
						justify="center"
						spacing={10}
						direction={["column", "row"]}
					>
						<Box width="xs">
							<Heading
								textAlign="center"
								color={useColorModeValue(
									"pink.500",
									"pink.700"
								)}
							>
								Our Mission
							</Heading>
							<Text mt="1em" fontSize="xl" textAlign="center">
								To Provide the highest standard of product and
								services to both retailers and customers.
							</Text>
						</Box>
						<Box width="xs">
							<Heading
								textAlign="center"
								color={useColorModeValue(
									"green.500",
									"green.700"
								)}
							>
								Our Vision
							</Heading>
							<Text mt="1em" fontSize="xl" textAlign="center">
								To earn customers loyalty and trust for the
								company by providing them with nothing but the
								best, by means of utilizing the highest quality
								of material, equipment&apos;s and world-class
								systems.
							</Text>
						</Box>
						<Box width="xs">
							<Heading
								textAlign="center"
								color={useColorModeValue(
									"cyan.500",
									"cyan.700"
								)}
							>
								Core Values
							</Heading>
							<Text mt="1em" fontSize="xl" textAlign="center">
								Commitment, Genuine, Quality, Respect &
								Teamwork.
							</Text>
						</Box>
					</Stack>
				</SectionContent>
			</Section>
		</>
	);
};

export default AboutUs;
