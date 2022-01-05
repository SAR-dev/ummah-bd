import React from 'react';
import {
  Box,
  Text,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
  MenuCommand,
  MenuDivider,
  Avatar,
} from '@chakra-ui/react';

const ProfileMenu = () => {
  return (
    <Menu
      closeOnSelect={true}
      placement="bottom-end"
    >
      <MenuButton>
        <Avatar size="md" mx={3} />
      </MenuButton>
      <MenuList>
        <MenuItem isFocusable> a </MenuItem>
        <MenuItem isFocusable> a </MenuItem>
        <MenuItem isFocusable> a </MenuItem>
        <MenuItem isFocusable> a </MenuItem>
        <MenuItem isFocusable> a </MenuItem>
      </MenuList>
    </Menu>
  );
};
export default ProfileMenu;
