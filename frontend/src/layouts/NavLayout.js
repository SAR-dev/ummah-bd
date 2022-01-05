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
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { IoLogoFoursquare } from 'react-icons/io5';
import {
  RiCompassDiscoverLine,
  RiHomeWifiLine,
  RiStore2Line,
  RiNotification3Line,
} from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const NavLayout = ({ bg = 'ash.300' }) => {
  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname)
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
            <Select
              placeholder="Select option"
              w="180px"
              size="sm"
              rounded="md"
              color="text.medium"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>
          <Flex w={'600px'} flexShrink={0} mx={'auto'}>
            <SimpleGrid columns={menus.length} spacing={3} w="100%">
              {menus.map((el, i) => (
                <ChakraLink
                  as={Link}
                  to={el.path}
                  bg={"transparent"}
                  borderBottomWidth={"3px"}
                  borderBottomColor={el.path === path ? "green.500" : "transparent"}
                  color={el.path === path ? "text.dark" : "text.light"}
                  fontWeight={'medium'}
                  className="flat"
                  _hover={{ bg: 'ash.50', color: 'text.medium' }}
                  key={i}
                >
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    py={4}
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
          <Flex w={'250px'} flexShrink={0} justifyContent={'end'}>
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
