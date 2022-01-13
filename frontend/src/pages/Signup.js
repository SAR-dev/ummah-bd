import React, { useState } from 'react';

// chakra components
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
  HStack,
  IconButton,
} from '@chakra-ui/react';

// Icons
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdEmail, MdPhone } from 'react-icons/md';
import { RiDoorLockFill } from 'react-icons/ri';

// react hook form
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'yup-phone';

// Images
import Bg from '../resources/signupbg.jpg';

// main component
const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [passDoesntMatched, setPassDoesntMatched] = useState(false);

  const validationSchema = yup.object().shape({
    first_name: yup.string().required('First name is required.'),
    last_name: yup.string().required('Last name is required.'),
    email: yup
      .string()
      .email("Hey! That's not a valid email address.")
      .required('You need to provide email address.'),
    phone: yup.string().phone().required('A phone number is required'),
    password: yup.string().required('Hey! You forgot to provide password.'),
    confirm_password: yup.string().required('Plese retype your password'),
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
    if (values.password !== values.confirm_password) {
      setPassDoesntMatched(true);
    } else {
      console.log(values);
    }
    // After validation
    setLoading(false);
  };

  const FullForm = () => (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First name and last name */}
      <HStack mb={5}>
        <FormControl isInvalid={errors.first_name}>
          <InputGroup>
            <Input
              type="text"
              size={'lg'}
              id="first_name"
              name="first_name"
              placeholder="First Name"
              variant="outline"
              bg="ash.300"
              color="text.dark"
              isRequired
              isDisabled={loading}
              _hover={{ bg: 'ash.200' }}
              _focus={{ bg: 'ash.200' }}
              autoComplete="off"
              {...register('first_name')}
            />
          </InputGroup>
          <Text
            fontSize={'sm'}
            color={errors.first_name ? 'red.500' : 'text.medium'}
            pl={3}
          >
            {errors.first_name
              ? errors.first_name.message
              : 'Write your First Name'}
          </Text>
        </FormControl>

        <FormControl isInvalid={errors.last_name}>
          <InputGroup>
            <Input
              type="text"
              size={'lg'}
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              variant="outline"
              bg="ash.300"
              color="text.dark"
              isRequired
              isDisabled={loading}
              _hover={{ bg: 'ash.200' }}
              _focus={{ bg: 'ash.200' }}
              autoComplete="off"
              {...register('last_name')}
            />
          </InputGroup>
          <Text
            fontSize={'sm'}
            color={errors.last_name ? 'red.500' : 'text.medium'}
            pl={3}
          >
            {errors.last_name
              ? errors.last_name.message
              : 'Write your Last Name'}
          </Text>
        </FormControl>
      </HStack>

      {/*  Email */}
      <FormControl isInvalid={errors.email} my={5}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={MdEmail} w={6} h={6} />
          </InputLeftElement>
          <Input
            size={'lg'}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            variant="outline"
            bg="ash.300"
            color="text.dark"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('email')}
          />
        </InputGroup>
        <Text
          fontSize={'sm'}
          color={errors.email ? 'red.500' : 'text.medium'}
          pl={3}
        >
          {errors.email ? errors.email.message : 'Put your Email'}
        </Text>
      </FormControl>

      {/*  Phone */}
      <FormControl isInvalid={errors.phone} my={5}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={MdPhone} w={6} h={6} />
          </InputLeftElement>
          <Input
            size={'lg'}
            type="phone"
            id="phone"
            name="phone"
            placeholder="Phone"
            variant="outline"
            bg="ash.300"
            color="text.dark"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('phone')}
          />
        </InputGroup>
        <Text
          fontSize={'sm'}
          color={errors.phone ? 'red.500' : 'text.medium'}
          pl={3}
        >
          {errors.phone ? errors.phone.message : 'Put your Phone number'}
        </Text>
      </FormControl>

      {/*  Password */}
      <FormControl isInvalid={errors.password} my={5}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={RiDoorLockFill} w={6} h={6} />
          </InputLeftElement>
          <Input
            type={showPass ? 'text' : 'password'}
            size={'lg'}
            id="password"
            name="password"
            placeholder="Password"
            variant="outline"
            bg="ash.300"
            color="text.dark"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('password')}
          />
          <InputRightElement>
            <IconButton
              icon={
                <Icon
                  as={showPass ? AiFillEyeInvisible : AiFillEye}
                  w={6}
                  h={6}
                />
              }
              variant={'ghost'}
              onClick={() => setShowPass(!showPass)}
              rounded={'full'}
              _hover={{ bg: 'ash.400' }}
              _focus={{ bg: 'none' }}
              _active={{ bg: 'none' }}
            />
          </InputRightElement>
        </InputGroup>
        <Text
          fontSize={'sm'}
          color={errors.password ? 'red.500' : 'text.medium'}
          pl={3}
        >
          {errors.password ? errors.password.message : 'Set a Password'}
        </Text>
      </FormControl>

      {/* Confirm Password */}
      <FormControl isInvalid={errors.confirm_password} my={5}>
        <InputGroup>
          <InputLeftElement>
            <Icon as={RiDoorLockFill} w={6} h={6} />
          </InputLeftElement>
          <Input
            type={showConfirmPass ? 'text' : 'password'}
            size={'lg'}
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            variant="outline"
            bg="ash.300"
            color="text.dark"
            isRequired
            isDisabled={loading}
            _hover={{ bg: 'ash.200' }}
            _focus={{ bg: 'ash.200' }}
            autoComplete="off"
            {...register('confirm_password')}
          />
          <InputRightElement>
            <IconButton
              icon={
                <Icon
                  as={showConfirmPass ? AiFillEyeInvisible : AiFillEye}
                  w={6}
                  h={6}
                />
              }
              variant={'ghost'}
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              rounded={'full'}
              _hover={{ bg: 'ash.400' }}
              _focus={{ bg: 'none' }}
              _active={{ bg: 'none' }}
            />
          </InputRightElement>
        </InputGroup>
        <Text
          fontSize={'sm'}
          color={errors.confirm_password ? 'red.500' : 'text.medium'}
          pl={3}
        >
          {errors.confirm_password
            ? errors.confirm_password.message
            : 'Retype your Password'}
        </Text>
      </FormControl>

      {passDoesntMatched && 
        <Text bg="red.300" textAlign={"center"} p={1} rounded="md" color={"text.dark"} my={1} >
          Password Doesnt matched
        </Text>}

      {/* Submit Button */}
      <Flex mb={4}>
        <Button
          size={'lg'}
          w="100%"
          type="submit"
          bg="purple.500"
          color="text.light"
          _hover={{ bg: 'purple.600', transform: 'scale(1.05)' }}
          _focus={{ bg: 'purple.700' }}
          _active={{ bg: 'purple.700' }}
          isLoading={loading}
        >
          Submit
        </Button>
      </Flex>
    </form>
  );

  return (
    <Box>
      <Box position="relative">
        <Image src={Bg} h={'100vh'} w={'100vw'} objectFit={'cover'} />
        <Flex
          position="absolute"
          top={'25vh'}
          right={'300px'}
          flexFlow={'column'}
        >
          <Text
            fontSize={'30px'}
            my={5}
            textAlign={'center'}
            fontWeight={'semibold'}
          >
            Sign up
          </Text>
          <Flex
            bg="white"
            borderWidth={'2px'}
            borderColor={'border.medium'}
            boxShadow={'sm'}
            rounded={'md'}
            p={5}
          >
            <FullForm />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
export default Signup;
