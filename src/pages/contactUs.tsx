import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsLinkedin, BsInstagram, BsPerson } from 'react-icons/bs';
import {AiOutlineMobile} from "react-icons/ai"
import Link from 'next/link';

export default function contact() {
  return (
    <>
      <Container bg="brand1.50" maxW="full" mt={0} centerContent overflow="hidden">
        <Flex>
          <Box
            bg="brand1.300"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact Us</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          _hover={{ border: '2px solid', borderColor: "brand1.500" }}
                          leftIcon={<MdPhone color="white" size="20px" />}>
                          +91-9837005888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          _hover={{ border: '2px solid', borderColor: "brand1.500" }}
                          leftIcon={<MdEmail color="white" size="20px" />}>
                          ptpmeerut@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          _hover={{ border: '2px solid', borderColor: "brand1.500" }}
                          leftIcon={<MdLocationOn color="white" size="20px" />}>
                            Meerut, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        as = {Link}
                        href = "https://www.facebook.com/pashupatitextile/"
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'brand1.500' }}
                        icon={<MdFacebook size="38px" />}
                      />
                      <IconButton
                        as = {Link}
                        href = "https://www.linkedin.com/company/pashupatitextile/"
                        aria-label="LinkedIn"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'brand1.500' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                      <IconButton
                        aria-label="Instagram"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: 'brand1.500' }}
                        icon={<BsInstagram size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="phone">
                          <FormLabel>Phone</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<AiOutlineMobile color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="gst">
                          <FormLabel>Enter GST</FormLabel>
                            <Input type="text" size="md" />
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: 'gray.300',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="solid"
                            bg="#0D74FF"
                            color="white"
                            _hover={{}}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  );
}