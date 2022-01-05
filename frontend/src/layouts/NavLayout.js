import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Icon,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Avatar,
  Image,
  SimpleGrid,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Input,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { IoLogoFoursquare } from 'react-icons/io5';
import {
  RiCompassDiscoverLine,
  RiHomeWifiLine,
  RiStore2Line,
  RiNotification3Line,
  RiArrowDropDownLine,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const NavLayout = ({ bg = 'ash.300' }) => {
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  const data = {
    user: {
      avatar:
        'https://fictionhorizon.com/wp-content/uploads/2021/10/20-Best-Gemini-Anime-Characters-Ranked-By-Likability-00-1024x536.jpg',
      name: 'Sayed Rafi',
    },
  };

  const menus = [
    { name: 'Discover', path: '/discover', icon: RiCompassDiscoverLine },
    { name: 'News Feed', path: '/feed', icon: RiHomeWifiLine },
    { name: 'Marketplace', path: '/marketplace', icon: RiStore2Line },
    {
      name: 'Notification',
      path: '/notification',
      icon: RiNotification3Line,
    },
  ];

  return (
    <Box w={'100%'} minH={'100vh'} bg={bg}>
      <Box
        w={'100%'}
        bg={'white'}
        borderBottomWidth={'1px'}
        borderBottomColor={'border.light'}
      >
        <Flex maxW={'1400px'} mx={'auto'} alignItems={'center'} px={5}>
          <Flex w={'250px'} flexShrink={0}>
            <Icon as={IoLogoFoursquare} h={8} w={8} color="green.500" mr={5} />
            {/* <Select
              placeholder="Select option"
              w="180px"
              size="sm"
              rounded="md"
              color="text.medium"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select> */}
            <Popover isLazy trigger="click">
              <PopoverTrigger>
                <Flex
                  borderWidth={'2px'}
                  borderColor="border.medium"
                  justifyContent="center"
                  alignItems="center"
                  cursor="pointer"
                >
                  <Text
                    w="180px"
                    size="sm"
                    rounded="md"
                    color="text.medium"
                    textAlign="center"
                  >
                    Subscription
                  </Text>
                  <Icon as={RiArrowDropDownLine} />
                </Flex>
              </PopoverTrigger>
              <PopoverContent w="200px">
                <PopoverBody
                  h="400px"
                  className="scrolling"
                  _focus={{ outline: 'none' }}
                >
                  <Flex flexFlow={'column'}>
                    {[...Array(20)].map((el, i) => (
                      <Flex
                        key={i}
                        alignItems={'center'}
                        justifyContent={'space-around'}
                        w="100%"
                        py={1}
                        my={1}
                        cursor="pointer"
                        boxShadow={'sm'}
                        _hover={{ bg: 'ash.300' }}
                      >
                        <Image
                          src="https://wallpapercave.com/wp/wp6409639.jpg"
                          h={8}
                          w={8}
                          fallbackSrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
                          rounded={'full'}
                          objectFit={'cover'}
                        />
                        <Text color={'text.medium'}>Channel {i + 1}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
          <Flex w={'600px'} flexShrink={0} mx={'auto'}>
            <SimpleGrid columns={menus.length} spacing={3} w="100%">
              {menus.map((el, i) => (
                <ChakraLink
                  as={Link}
                  to={el.path}
                  bg={'transparent'}
                  borderBottomWidth={'3px'}
                  borderBottomColor={
                    el.path === path ? 'green.500' : 'transparent'
                  }
                  color={el.path === path ? 'text.dark' : 'text.light'}
                  fontWeight={'medium'}
                  className="flat"
                  _hover={
                    el.path === path
                      ? ''
                      : { bg: 'ash.50', color: 'text.medium' }
                  }
                  key={i}
                >
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    py={2}
                    w="100%"
                    rounded="md"
                  >
                    <Icon as={el.icon} h={5} w={5} mr={2} />
                    <Text>{el.name}</Text>
                  </Flex>
                </ChakraLink>
              ))}
            </SimpleGrid>
          </Flex>
          <Flex
            w={'250px'}
            flexShrink={0}
            justifyContent={'end'}
            alignItems={'center'}
          >
            <Flex alignItems={'center'} mr={2} bg="ash.400"
              rounded={"full"} h="100%" px={2}
            >
              <Icon as={RiStore2Line} h={5} w={5} mr={1} />
              <Text fontWeight={'semibold'}>100</Text>
            </Flex>
            <Menu>
              <MenuButton role="group">
                <Box
                  p="3px"
                  rounded="full"
                  bg="transparent"
                  _groupHover={{ bg: 'blue.500' }}
                >
                  <Image
                    src={data.user.avatar}
                    fallbackSrc="https://via.placeholder.com/300/CCCCCC/CCCCCC"
                    rounded={'full'}
                    objectFit={'cover'}
                    h={8}
                    w={8}
                  />
                </Box>
              </MenuButton>
              <MenuList>
                <MenuGroup title="Profile">
                  <MenuItem>My Account</MenuItem>
                  <MenuItem>Payments </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup title="Help">
                  <MenuItem>Docs</MenuItem>
                  <MenuItem>FAQ</MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NavLayout;
