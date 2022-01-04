import React from 'react';
import { Box } from '@chakra-ui/react';
import Navbar from '../Pages/Navbar';

const NavLayout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box>{children}</Box>
    </Box>
  );
};

export default NavLayout;
