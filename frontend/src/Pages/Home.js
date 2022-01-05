import React from 'react';
import { Box,Text } from '@chakra-ui/react';
import NavLayout from '../Layouts/navLayout/NavLayout';

const Home = () => {
  return (
    <Box>
      <NavLayout>
        {({discover, newsfeed, marketplace, notification}) =>(
          <Box>
            {discover && <Text>discover</Text>}
            {newsfeed && <Text>newsfeed</Text>}
            {marketplace && <Text>marketplace</Text>}
            {notification && <Text>notification</Text>}
          </Box>
        )}
      </NavLayout>
    </Box>
  );
};

export default Home;
