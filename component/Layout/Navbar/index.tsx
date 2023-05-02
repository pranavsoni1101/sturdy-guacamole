import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Image,
  useDisclosure,
  Heading,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Icon,
} from '@chakra-ui/react';
import { ChevronRightIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import navItems from './navItem';
import { BsChevronRight } from 'react-icons/bs';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex
            as  = {Link}
            href = "/"
            justify="center"
            align="center"
          >
            <Image 
              display= "inline-block"
              src= "/PASHUPATI.png"
              boxSize= "5em"
            />
            <Heading
              as = "h3"
              ml = "12px"
              display= "inline-block"
              fontSize= "xl"
            >
              Pashupati Textiles
            </Heading>
          </Flex>
          <Flex display={{ base: 'none', md: 'flex' }} mx = "auto">
            <DesktopNav />
          </Flex>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                >
                  <Text
                    p={2}
                    fontSize={'lg'}
                    fontWeight={500}
                    position = "relative"
                    color={linkColor}
                    _before = {{
                      content: '""',
                      position: "absolute",
                      width : "100%",
                      height: "2px",
                      bottom: "0",
                      left: "0",
                      backgroundColor: "brand1.500",
                      visibility: "hidden",
                      transform: "scaleX(0)",
                      transition: "all 0.3s ease-in-out"

                    }}
                    _hover={{
                      textDecoration: 'none',
                      color: "brand1.500",
                      _before: {
                        visibility: "visible",
                        transform: "scaleX(1)"
                      }
                    }}

                  >
                    {navItem.label}
                  </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  return (
      <Link
          href={`${href}`}
          role={'group'}
      >
        <Box
          display={'block'}
          p={2}
          rounded={'md'}
          _hover={{ bg: linkHoverColor }}
        >
          <Stack direction={'row'} align={'center'}>
              <Box>
                  <Text
                      transition={'all .3s ease'}
                      _groupHover={{ color: 'brand1.500' }}
                      fontWeight={500}
                  >
                      {label}
                  </Text>
                  <Text fontSize={'sm'}>{subLabel}</Text>
              </Box>
              <Flex
                  transition={'all .3s ease'}
                  transform={'translateX(-10px)'}
                  opacity={0}
                  _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                  justify={'flex-end'}
                  align={'center'}
                  flex={1}
              >
                  <Icon color={'brand1.500'} w={5} h={5} as={BsChevronRight} />
              </Flex>
          </Stack>
        </Box>
      </Link>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}


export default Navbar;