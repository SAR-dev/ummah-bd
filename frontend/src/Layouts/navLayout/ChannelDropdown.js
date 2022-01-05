import React from 'react';
import { Box, Text, Button, Flex, Select, Icon, Image } from '@chakra-ui/react';
import { AiFillCaretDown } from 'react-icons/ai';

const ChannelDropdown = () => {
  return (
    <Box m={3}>
      <Select placeholder="Subscribtion" _focus={{outline:"none"}}>
        <option value="channel1" p={3} >Channel 1</option>
        <option value="channel2" p={3} >Channel 2</option>
        <option value="channel3" p={3} >Channel 3</option>
      </Select>
    </Box>
  );
};
export default ChannelDropdown;
