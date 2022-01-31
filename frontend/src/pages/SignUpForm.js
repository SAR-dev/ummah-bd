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
} from '@chakra-ui/react';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdEmail, MdPhone } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import 'yup-phone';

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

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
    if (values.password !== values.confirm_password){
      setError("confirm_password", { type: "focus", message: "Password doesn't match!" }, { shouldFocus: true });
    }
    setLoading(false);
  };

  function fixError(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={1} spacing={5}>
        <HStack>
          <FormControl isInvalid={errors.first_name}>
            <InputGroup>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                variant="outline"
                colorScheme={'ash'}
                isDisabled={loading}
                autoComplete="new-password"
                {...register('first_name')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.first_name ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.first_name
                ? errors.first_name.message
                : 'Write your first name'}
            </Text>
          </FormControl>

          <FormControl isInvalid={errors.last_name}>
            <InputGroup>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                variant="outline"
                colorScheme={'ash'}
                isDisabled={loading}
                autoComplete="new-password"
                {...register('last_name')}
              />
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.last_name ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.last_name
                ? errors.last_name.message
                : 'Write your last name'}
            </Text>
          </FormControl>
        </HStack>

        <FormControl isInvalid={errors.email}>
          <InputGroup>
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
            {errors.email
              ? errors.email.message
              : 'Enter a valid email address'}
          </Text>
        </FormControl>

        <FormControl isInvalid={errors.phone}>
          <InputGroup>
            <InputLeftElement>
              <Icon as={MdPhone} h={5} w={5} color="ash.500" />
            </InputLeftElement>
            <Input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone No."
              variant="outline"
              colorScheme={'ash'}
              isDisabled={loading}
              autoComplete="new-password"
              {...register('phone')}
            />
          </InputGroup>
          <Text
            fontSize={'xs'}
            color={errors.phone ? 'red.500' : 'text.medium'}
            mt={1}
          >
            {errors.phone
              ? fixError(errors.phone.message)
              : 'Provide a valid phone number'}
          </Text>
        </FormControl>

        <HStack>
          <FormControl isInvalid={errors.password}>
            <InputGroup>
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
              {errors.password ? errors.password.message : 'Set a Password'}
            </Text>
          </FormControl>

          <FormControl isInvalid={errors.confirm_password}>
            <InputGroup>
              <Input
                type={showConfirmPass ? 'text' : 'password'}
                id="confirm_password"
                name="confirm_password"
                placeholder="&#8727;&#8727;&#8727;&#8727;&#8727;"
                variant="outline"
                colorScheme={'ash'}
                isDisabled={loading}
                autoComplete="new-password"
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
                  bg="transparent"
                  color="text.medium"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  rounded={'full'}
                  _hover={{ color: 'text.dark' }}
                  _focus={{ color: 'text.dark' }}
                  _active={{ color: 'text.dark' }}
                />
              </InputRightElement>
            </InputGroup>
            <Text
              fontSize={'xs'}
              color={errors.confirm_password ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.confirm_password
                ? errors.confirm_password.message
                : 'Retype your Password'}
            </Text>
          </FormControl>
        </HStack>

        <Button
          w="100%"
          type="submit"
          colorScheme={'purple'}
          _hover={{ bg: 'purple.600', transform: 'translateY(5px)' }}
          isLoading={loading}
        >
          Submit
        </Button>
      </SimpleGrid>
    </form>
  );
};
export default SignUpForm;
