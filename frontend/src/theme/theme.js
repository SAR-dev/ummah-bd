import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '768px',
  md: '960px',
  lg: '1200px',
  xl: '1920px',
});

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const light = extendTheme({
  config,
  breakpoints: breakpoints,
  fonts: {
    heading: 'Open Sans',
    body: 'Rubik, sans-serif',
  },
  colors: {
    ash: {
      50: '#fbfcfd',
      100: '#f7f9fc',
      200: '#f6f8fb',
      300: '#f5f7fb',
      400: '#dddee2',
      500: '#c4c6c9',
      600: '#626364',
      700: '#4a4a4b',
      800: '#313132',
      900: '#181919',
    },
    border: {
      "light": '#f6f8fb',
      "medium": '#dddee2',
      "dark": '#c4c6c9',
    },
    text: {
      "light": '#c4c6c9',
      "medium": '#626364',
      "dark": '#313132',
    }
  },
});
