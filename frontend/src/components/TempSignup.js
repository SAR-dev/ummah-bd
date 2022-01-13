import React, { useState } from 'react';
import {
  Flex,
  Icon,
  Text,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  useToast,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import { RiDoorLockFill } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { MdEmail } from 'react-icons/md';
import { FaUserNinja } from 'react-icons/fa';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const TempSignup = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Hey! That's not a valid email address.")
      .required('You need to provide email address.'),
    password: yup.string().required('Hey! You forgot to provide password.'),
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    username: yup
      .string()
      .required('You need to pick an unique username.')
      .matches(
        /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,25}$/,
        'Username may contain A-Z, a-z, 0-9, hyphen(-) only'
      ),
  });

  const {
    handleSubmit,
    setError,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = values => {
    setLoading(true);
    // Form submit function
    console.log(values)
    // After validation
    setLoading(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} spacing={4} mb={4}>
        <FormControl isInvalid={errors.first_name}>
          <Input
            type="text"
            id="first_name"
            name="last_name"
            placeholder="First Name"
            variant="outline"
            bg="ash.300"
            color="text.light"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('first_name')}
          />
          <Text
            color={errors.first_name ? 'red.500' : 'ash.500'}
            fontSize="sm"
            mt={1}
          >
            {errors.first_name
              ? errors.first_name.message
              : 'Initial of your name'}
          </Text>
        </FormControl>
        <FormControl isInvalid={errors.last_name}>
          <Input
            type="text"
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            variant="outline"
            bg="ash.300"
            color="text.light"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('last_name')}
          />
          <Text
            color={errors.last_name ? 'red.500' : 'ash.500'}
            fontSize="sm"
            mt={1}
          >
            {errors.last_name
              ? errors.last_name.message
              : 'Ending of your name'}
          </Text>
        </FormControl>
      </SimpleGrid>
      <FormControl isInvalid={errors.username} mb={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={FaUserNinja} w={6} h={6} color="text.medium" />}
          />
          <Input 
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            variant="outline"
            bg="ash.300"
            color="text.light"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('username')}
          />
        </InputGroup>
        <Text
          color={errors.username ? 'red.500' : 'ash.500'}
          fontSize="sm"
          mt={1}
        >
          {errors.username
            ? errors.username.message
            : 'Pick an unique username.'}
        </Text>
      </FormControl>
      <FormControl isInvalid={errors.email} mb={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={MdEmail} w={6} h={6} color="text.medium" />}
          />
          <Input
            type="text"
            id="email"
            name="email"
            placeholder="Email address"
            variant="outline"
            bg="ash.300"
            color="text.light"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('email')}
          />
        </InputGroup>
        <Text
          color={errors.email ? 'red.500' : 'ash.500'}
          fontSize="sm"
          mt={1}
        >
          {errors.email ? errors.email.message : 'Use your own email address.'}
        </Text>
      </FormControl>
      <FormControl isInvalid={errors.password} mb={4}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon as={RiDoorLockFill} w={6} h={6} color="text.medium" />
            }
          />
          <Input
            type={show ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            variant="outline"
            bg="ash.300"
            color="text.light"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="new-password"
            {...register('password')}
          />
          <InputRightElement>
            <IconButton
              h="1.75rem"
              icon={show ? <AiFillEyeInvisible /> : <AiFillEye />}
              size="sm"
              bg="ash.300"
              color="text.light"
              _hover={{ bg: 'ash.200' }}
              _focus={{ bg: 'ash.200' }}
              _active={{ bg: 'ash.500' }}
              onClick={handleClick}
            />
          </InputRightElement>
        </InputGroup>
        <Text
          color={errors.password ? 'red.500' : 'ash.500'}
          fontSize="sm"
          mt={1}
        >
          {errors.password ? errors.password.message : 'Use strong password.'}
        </Text>
      </FormControl>
      <Flex mb={4}>
        <Button
          w="100%"
          type="submit"
          bg="purple.500"
          color="text.light"
          _hover={{ bg: 'purple.600', transform: 'translateX(5px)' }}
          _focus={{ bg: 'purple.700' }}
          _active={{ bg: 'purple.700' }}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default TempSignup;
