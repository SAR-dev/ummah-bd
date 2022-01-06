import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Icon,
  Button,
  Avatar,
  Image,
  SimpleGrid,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  Divider,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { IoLogoFoursquare } from 'react-icons/io5';
import { AiFillThunderbolt } from 'react-icons/ai';
import {
  RiCompassDiscoverLine,
  RiCompassDiscoverFill,
  RiHomeWifiLine,
  RiHomeWifiFill,
  RiStore2Line,
  RiStore2Fill,
  RiNotification3Line,
  RiNotification3Fill,
  RiArrowDropDownLine,
} from 'react-icons/ri';
import { FiChevronDown } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const NavLayout = ({ bg = 'ash.300' }) => {
  const [path, setPath] = useState('');
  const location = useLocation();
  const [activeGroup, setActiveGroup] = useState();

  const a = 120;
  const b = 300;
  useEffect(() => {
    setPath(location.pathname.split('/')[1]);
  }, [location]);

  const data = {
    user: {
      avatar:
        'https://fictionhorizon.com/wp-content/uploads/2021/10/20-Best-Gemini-Anime-Characters-Ranked-By-Likability-00-1024x536.jpg',
      name: 'Sayed Rafi',
      username: 'sayed-rafi',
    },
  };

  const menus = [
    {
      name: 'Discover',
      path: 'discover',
      icon: RiCompassDiscoverLine,
      icon2: RiCompassDiscoverFill,
    },
    {
      name: 'News Feed',
      path: 'feed',
      icon: RiHomeWifiLine,
      icon2: RiHomeWifiFill,
    },
    {
      name: 'Marketplace',
      path: 'marketplace',
      icon: RiStore2Line,
      icon2: RiStore2Fill,
    },
    {
      name: 'Notification',
      path: 'notification',
      icon: RiNotification3Line,
      icon2: RiNotification3Fill,
    },
  ];

  return (
    <Box w={'100%'} minH={'100vh'} bg={bg}>
      <Box
        w={'100%'}
        bg={'white'}
        borderBottomWidth={'1px'}
        borderBottomColor={'border.light'}
        boxShadow={'sm'}
      >
        <Flex maxW={'1400px'} mx={'auto'} alignItems={'center'} px={5}>
          <Flex w={'250px'} flexShrink={0}>
            <Icon as={IoLogoFoursquare} h={8} w={8} color="teal.500" mr={5} />
            <Menu>
              <MenuButton>
                <Button
                  w={'200px'}
                  size={'sm'}
                  fontWeight={'medium'}
                  justifyContent={'start'}
                  bg={'ash.300'}
                  color={'text.dark'}
                  _hover={{ color: 'text.dark' }}
                  _focus={{ color: 'text.dark' }}
                  _active={{ color: 'text.dark' }}
                  flexShrink={0}
                  className="flat"
                >
                  {activeGroup ? `u/${activeGroup}` : 'Select Community'}
                  <Icon as={FiChevronDown} ml={'auto'} />
                </Button>
              </MenuButton>
              <MenuList
                minW={'200px'}
                w={'200px'}
                maxH={'60vh'}
                className="scrolling"
              >
                <MenuGroup title="Joined Communities">
                  {[...Array(5)].map((el, i) => (
                    <MenuItem
                      onClick={() => setActiveGroup(data.user.username)}
                      key={i}
                    >
                      <Flex as={Link} to="" alignItems="center" py={1}>
                        <Avatar
                          size="sm"
                          src={data.user.avatar}
                          name={data.user.name}
                        />
                        <SimpleGrid columns={1} ml={3}>
                          <Text fontSize="sm" fontWeight="semibold">
                            {data.user.name}
                          </Text>
                          <Text fontSize="xs">{`c/${data.user.username}`}</Text>
                        </SimpleGrid>
                      </Flex>
                    </MenuItem>
                  ))}
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
          <Flex w={'600px'} flexShrink={0} mx={'auto'}>
            <SimpleGrid columns={menus.length} spacing={3} w="100%">
              {menus.map((el, i) => (
                <ChakraLink
                  as={Link}
                  to={`/${el.path}`}
                  py={2}
                  bg={'transparent'}
                  borderBottomWidth={'3px'}
                  borderBottomColor={
                    el.path === path ? 'teal.500' : 'transparent'
                  }
                  color={el.path === path ? 'teal.600' : 'text.medium'}
                  fontWeight={'medium'}
                  className="flat"
                  _hover={el.path === path ? '' : { color: 'text.dark' }}
                  key={i}
                >
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    py={2}
                    w="100%"
                    rounded="md"
                  >
                    <Icon
                      as={el.path === path ? el.icon2 : el.icon}
                      h={5}
                      w={5}
                      mr={2}
                    />
                    <Text fontSize={'sm'}>{el.name}</Text>
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
            {/* <Flex
              alignItems={'center'}
              mr={5}
              bg="ash.400"
              rounded={'full'}
              h="100%"
              px={2}
            >
              <Icon as={RiStore2Line} h={5} w={5} mr={1} />
              <Text fontWeight={'semibold'}>100</Text>
            </Flex> */}

            {/* <Flex flexFlow={"column"} alignItems={"center"} h={8}>
              <Flex
                w="100px"
                h="20px"
                rounded={'full'}
                borderWidth={'1px'}
                justifyContent={'center'}
                alignItems={'center'}
                position="relative"
              >
                <Flex
                  w={`${(a /b) * 100}%`}
                  roundedLeft={'full'}
                  h="20px"
                  bg="teal.500"
                  justifyContent={'center'}
                  alignItems={'center'}
                ></Flex>
                <Icon
                  as={AiFillThunderbolt}
                  position={'absolute'}
                  left={`${(a / b) * 100 -12}%`}
                  h={8}
                  w={8}
                  color={'yellow.300'}
                />
                <Flex
                  w={`${((b - a) / b) * 100}%`}
                  roundedRight={'full'}
                  h="20px"
                  justifyContent={'center'}
                  alignItems={'center'}
                ></Flex>
              </Flex>
              <Text fontSize={"12px"}>{a}/{b}</Text>
            </Flex> */}

            <Flex alignItems={'center'} h={8} mr={5}>
              <Icon as={AiFillThunderbolt} h={10} w={10} color={'yellow.300'} />

              <Flex flexFlow={'column'} w="90%">
                <Flex alignItems={'center'}>
                  <Text fontSize={'12px'}>
                    {a}/{b}
                  </Text>
                  <Divider borderColor="border.dark" mx={1} />
                </Flex>
                <Flex
                  w="100px"
                  h="20px"
                  rounded={'full'}
                  borderWidth={'1px'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Flex
                    w={`${(a / b) * 100}%`}
                    roundedLeft={'full'}
                    h="20px"
                    bg="teal.500"
                    justifyContent={'center'}
                    alignItems={'center'}
                  ></Flex>
                  <Flex
                    w={`${((b - a) / b) * 100}%`}
                    roundedRight={'full'}
                    h="20px"
                    justifyContent={'center'}
                    alignItems={'center'}
                  ></Flex>
                </Flex>
              </Flex>
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
