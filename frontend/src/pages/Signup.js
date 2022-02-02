import React from 'react';
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdChecklist, MdEmojiPeople, MdOutlineSecurity } from 'react-icons/md';
import { HiOutlineBan } from 'react-icons/hi';
import SignUpForm from './SignUpForm';
import Lottie from 'react-lottie';
import * as animationData from '../resources/lottie/welcome-animation.json';

function Signup() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  const WelcomeText = () => (
    <Flex alignItems={'center'}>
      <Box>
        <Box className='svg-left'>
          <Lottie options={defaultOptions} width={180} />
        </Box>
        <List spacing={4}>
          <ListItem d="flex" alignItems={'center'}>
            <ListIcon as={MdEmojiPeople} h={6} w={6} color="purple.500" />A
            place to discuss open mindedly for BD people
          </ListItem>
          <ListItem d="flex" alignItems={'center'}>
            <ListIcon as={MdOutlineSecurity} h={6} w={6} color="purple.500" />
            Free and Secure messaging system
          </ListItem>
          <ListItem d="flex" alignItems={'center'}>
            <ListIcon as={HiOutlineBan} h={6} w={6} color="purple.500" />
            No annoying advertisement
          </ListItem>
          <ListItem d="flex" alignItems={'center'}>
            <ListIcon as={MdChecklist} h={6} w={6} color="purple.500" />
            100% halal
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
  return (
    <Flex h="100vh" w="100%" alignItems={'center'} justifyContent={'center'}>
      <SimpleGrid
        columns={2}
        spacing={10}
        textAlign={'left'}
        maxW={'800px'}
        w="100%"
      >
        <WelcomeText />
        <Box>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Create an Account
          </Text>
          <Text fontSize={"sm"} color="text.medium" mb={5}>
            We have been waiting for you !!
          </Text>
          <SignUpForm />
        </Box>
      </SimpleGrid>
    </Flex>
  );
}

export default Signup;
