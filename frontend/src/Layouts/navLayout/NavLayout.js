import React, { useEffect, useReducer } from 'react';
import {
  Box,
  Text,
  Tooltip,
  IconButton,
  Button,Wrap,WrapItem,
  Icon,
  Flex,
  Image,Avatar,
} from '@chakra-ui/react';

import Logo from '../../Resources/UMMAH.png';
import ChannelDropdown from './ChannelDropdown';
import ProfileMenu from './ProfileMenu';


import { BiWorld } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { FaStoreAlt } from 'react-icons/fa';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';

const initialState = {
  discover: true,
  newsfeed: false,
  marketplace: false,
  notification: false,
};
const reducer = (state, action) => {
  switch (action) {
    case 'discover':
      return {
        discover: true,
        newsfeed: false,
        marketplace: false,
        notification: false,
      };
    case 'newsfeed':
      return {
        discover: false,
        newsfeed: true,
        marketplace: false,
        notification: false,
      };
    case 'marketplace':
      return {
        discover: false,
        newsfeed: false,
        marketplace: true,
        notification: false,
      };
    case 'notification':
      return {
        discover: false,
        newsfeed: false,
        marketplace: false,
        notification: true,
      };
    default:
      return state;
  }
};

const Navbar = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const Triger = ({ label, ChildState, icon }) => {
    return (
      <Tooltip label={label}>
        <Wrap
          align="center"
          justify="center"
          w="60px"
          h="100%"
          borderBottom={state[ChildState] ? '5px solid' : ''}
          borderColor="#181919"
        >
          <WrapItem
            w="100%"
            align="center"
            justifyContent="center"
            variant="ghost"
            color={state[ChildState] ? 'ash.900' : 'ash.500'}
            _hover={state[ChildState] ? '' : { color: '#626364' }}
            _focus={{ outline: 'none' }}
            onClick={() => {
              dispatch(ChildState);
            }}
          >
            <Icon as={icon} fontSize="36px" />
          </WrapItem>
        </Wrap>
      </Tooltip>
    );
  };

  return (
    <Box w="1500px" mx="auto">
      <Flex
        boxShadow="sm"
        alignItems="center"
        justifyContent="space-between"
        pt={3}
      >
        <Flex alignItems="center">
          <Image src={Logo} w="150px" p={3} />
          <ChannelDropdown />
        </Flex>
        <Flex
          w="750px"
          justifyContent="space-around"
          alignItems="center"
          px={5}
        >
          <Triger label="Discover" ChildState="discover" icon={BiWorld} />
          <Triger label="News Feed" ChildState="newsfeed" icon={AiFillHome} />
          <Triger
            label="Marketplace"
            ChildState="marketplace"
            icon={FaStoreAlt}
          />
          <Triger
            label="Notification"
            ChildState="notification"
            icon={IoMdNotifications}
          />
        </Flex>
        <Flex alignItems="center">
          <Wrap
            bg="#dddee2"
            justify="center"
            align="center"
            spacing={5}
            px={3}
            py="5px"
            rounded="full"
            // _focus={{ outline: 'none', backgroundColor: '#dddee2' }}
            // _hover={{ backgroundColor: '#dddee2' }}
            // bg="#dddee2"
          >
            <WrapItem>
              <Icon as={BsFillBookmarkHeartFill} />
            </WrapItem>
            <WrapItem>
              <Text fontWeight="semibold">100</Text>
            </WrapItem>
          </Wrap>
          <ProfileMenu />
        </Flex>
      </Flex>
      <Box>
        {children({
          discover: state.discover,
          newsfeed: state.newsfeed,
          marketplace: state.marketplace,
          notification: state.notification,
        })}
      </Box>
    </Box>
  );
};
export default Navbar;
