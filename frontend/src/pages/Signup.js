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

function Signup() {
  const WelcomeText = () => (
    <Flex alignItems={'center'}>
      <Box>
        <Text fontSize={'4xl'} fontWeight={'bold'} mb={5}>
          Create an Account
        </Text>
        <List spacing={3}>
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
        maxW={'900px'}
        w="100%"
      >
        <WelcomeText />
        <SignUpForm />
      </SimpleGrid>
    </Flex>
  );
}

export default Signup;
