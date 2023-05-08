import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

import AppStoreBadge from '../../AppStoreBadge';
import PlayStoreBadge from '../../PlayStoreBadge';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'/aboutUs'}>About Us</Link>
            <Link href={'/contactUs'}>Contact Us</Link>
          </Stack>
{/* 
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack> */}

          <Stack align={'flex-start'}>
            <ListHeader>Follow Us On</ListHeader>
            <Link href={'https://www.facebook.com/pashupatitextile/'}>Facebook</Link>
            <Link href={'https://www.linkedin.com/company/pashupatitextile/'}>LinkedIn</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <Link
              href= "https://play.google.com/store/apps/details?id=pashupati.com.pashupati&hl=en_IN&gl=US&pli=1"
            >
              <PlayStoreBadge />
            </Link>
            {/* <AppStoreBadge /> */}
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2023 Pashupati Textiles. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
          {/* <Text
            my = "2em"
            // textAlign= "center"
            _before={{
              backgroundColor: "#000",
              content: '""',
              display: "inline-block",
              height: "1px",
              position: "relative",
              verticalAlign: "middle",
              width: "100%",
              right: "0.5em",
              marginLeft: "-51.5%"
            }}  
            _after={{
              backgroundColor: "#000",
              content: '""',
              display: "inline-block",
              height: "1px",
              position: "relative",
              verticalAlign: "middle",
              width: "50%",
              left: "0.5em",
              marginRight: "-60%"
            }}  
          >
            Made By Pranav Soni
          </Text> */}
      </Box>
    </Box>
  );
}