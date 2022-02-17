import React, { useState, useEffect } from 'react';
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
  SimpleGrid,
  Checkbox,
  Tooltip,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const SignInForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Hey! That's not a valid email address.")
      .required('You need to provide email address.'),
    password: yup.string().required('Password is required.'),
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
    // const userData = {
    //     email: values.email,
    //     first_name: values.first_name,
    //     last_name: values.last_name,
    //     password: values.password,
    //     re_password: values.re_password,
    //   };
    //   signup(userData).then(data => {
    //     if (data.error) {
    //       Object.entries(data.error).forEach(([key, value]) => {
    //         if (
    //           [
    //             'email',
    //             'first_name',
    //             'last_name',
    //             'password',
    //             're_password',
    //           ].includes(key)
    //         ) {
    //           setError(key, {
    //             type: 'manual',
    //             message: capitalize(value[0]),
    //           });
    //         } else {
    //           toast({
    //             status: 'error',
    //             title: capitalize(key),
    //             description: value,
    //           });
    //         }
    //       });
    //       setLoading(false);
    //     } else {
    //       setCompleted(true);
    //     }
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={1} spacing={5}>
        <Box>
          <Text fontSize={'2xl'} fontWeight={'bold'}>
            Sign In
          </Text>
          <Text fontSize={'sm'} color="text.medium" mb={5}>
            Welcome back! We have missed you.
          </Text>
        </Box>
        <FormControl isInvalid={errors.email}>
          <InputGroup size="sm">
            <InputLeftElement>
              <Icon as={MdEmail} h={5} w={5} color="ash.500" />
            </InputLeftElement>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              variant="outline"
              colorScheme={'ash'}
              isDisabled={loading}
              autoComplete="new-password"
              {...register('email')}
            />
          </InputGroup>
          <Text
            fontSize={'xs'}
            color={errors.email ? 'red.500' : 'text.medium'}
            mt={1}
          >
            {errors.email ? errors.email.message : 'Enter your email address'}
          </Text>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <InputGroup size="sm">
            <Input
              type={showPass ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="&#8727;&#8727;&#8727;&#8727;&#8727;"
              variant="outline"
              colorScheme={'ash'}
              isDisabled={loading}
              autoComplete="new-password"
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
                bg="transparent"
                color="text.medium"
                onClick={() => setShowPass(!showPass)}
                rounded={'full'}
                _hover={{ color: 'text.dark' }}
                _focus={{ color: 'text.dark' }}
                _active={{ color: 'text.dark' }}
              />
            </InputRightElement>
          </InputGroup>
          <Text
            fontSize={'xs'}
            color={errors.password ? 'red.500' : 'text.medium'}
            mt={1}
          >
            {errors.password
              ? errors.password.message
              : 'Provide your Password'}
          </Text>
        </FormControl>

        <Flex justifyContent={'space-between'}>
          <Checkbox
            defaultIsChecked
            size="sm"
            name="rememberme"
            {...register('rememberme')}
            mb={2}
          >
            <Text color="text.medium" fontSize="sm">
              Remember me
            </Text>
          </Checkbox>
          <Text color="blue.700" fontSize="sm" as={Link} to="/">
            Forgot Password ?
          </Text>
        </Flex>

        <Button
          size="sm"
          w="100%"
          type="submit"
          colorScheme={'purple'}
          _hover={{ bg: 'purple.600', transform: 'translateY(5px)' }}
          isLoading={loading}
        >
          Login
        </Button>

        <Flex>
          <Text fontSize={'sm'}>Not registered yet ?</Text>
          <Text color="blue.700" fontSize="sm" ml={1} as={Link} to="/">
            Create an Account
          </Text>
        </Flex>
      </SimpleGrid>
    </form>
  );
};
export default SignInForm;
