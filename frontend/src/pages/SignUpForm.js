import {
  Box,
  Button,
  Checkbox,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  SimpleGrid,
  Text,
  useToast,
  Tooltip,
} from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import * as yup from 'yup';

import { signup, capitalize } from '../helpers';

const SignUpForm = ({ setCompleted }) => {
  const toast = useToast();
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
    password: yup.string().required('Password is required.'),
    re_password: yup.string().required('Retype your password'),
    agreed: yup.bool().oneOf([true], 'Accept terms & conditions is required'),
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
    if (values.password !== values.re_password) {
      setError(
        're_password',
        { type: 'focus', message: "Password doesn't match!" },
        { shouldFocus: true }
      );
    } else {
      const userData = {
        email: values.email,
        username: values.email.split('@')[0],
        first_name: values.first_name,
        last_name: values.last_name,
        password: values.password,
        re_password: values.re_password,
      };
      signup(userData).then(data => {
        if (data.error) {
          Object.entries(data.error).forEach(([key, value]) => {
            if (
              [
                'email',
                'first_name',
                'last_name',
                'password',
                're_password',
              ].includes(key)
            ) {
              setError(key, {
                type: 'manual',
                message: capitalize(value[0]),
              });
            } else {
              toast({
                status: 'error',
                title: capitalize(key),
                description: value,
              });
            }
          });
        } else {
          setCompleted(true);
        }
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={1} spacing={5}>
        <HStack>
          <FormControl isInvalid={errors.first_name}>
            <InputGroup size="sm">
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
            <InputGroup size="sm">
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
            {errors.email
              ? errors.email.message
              : 'Enter a valid email address'}
          </Text>
        </FormControl>

        <HStack>
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
              {errors.password ? errors.password.message : 'Set a Password'}
            </Text>
          </FormControl>

          <FormControl isInvalid={errors.re_password}>
            <InputGroup size="sm">
              <Input
                type={showConfirmPass ? 'text' : 'password'}
                id="re_password"
                name="re_password"
                placeholder="&#8727;&#8727;&#8727;&#8727;&#8727;"
                variant="outline"
                colorScheme={'ash'}
                isDisabled={loading}
                autoComplete="new-password"
                {...register('re_password')}
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
              color={errors.re_password ? 'red.500' : 'text.medium'}
              mt={1}
            >
              {errors.re_password
                ? errors.re_password.message
                : 'Retype your Password'}
            </Text>
          </FormControl>
        </HStack>

        <Box>
          <FormControl isInvalid={errors.agreed}>
            <Checkbox
              defaultIsChecked
              size="sm"
              name="agreed"
              {...register('agreed')}
              mb={2}
            >
              {errors.agreed ? (
                <Tooltip
                  hasArrow
                  fontSize="xs"
                  label={errors.agreed.message}
                  isOpen
                  placement="right"
                  bg="ash.700"
                  arrowSize={8}
                >
                  <Text color="text.medium" fontSize="xs">
                    I accept the licence agreement
                  </Text>
                </Tooltip>
              ) : (
                <Text color="text.medium" fontSize="xs">
                  I accept the licence agreement
                </Text>
              )}
            </Checkbox>
          </FormControl>
          <Button
            size="sm"
            w="100%"
            type="submit"
            colorScheme={'purple'}
            _hover={{ bg: 'purple.600', transform: 'translateY(5px)' }}
            isLoading={loading}
          >
            Submit
          </Button>
        </Box>
      </SimpleGrid>
    </form>
  );
};
export default SignUpForm;
