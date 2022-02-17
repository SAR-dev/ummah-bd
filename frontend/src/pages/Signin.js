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
import {Link} from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import WelcomeSVGBackground from '../resources/signup.svg';
import { MdEmail } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SignInForm from './SignInForm';

const Signin = () => {
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

    console.log(values);

    setLoading(false);
  };

  return (
    <Flex
      h="100vh"
      w="100vw"
      justifyContent={'center'}
      alignItems={'center'}
      bgImage={WelcomeSVGBackground}
      bgSize={'cover'}
      bgPosition={'center'}
    >
      <Box bg="ash.50" p={10} rounded={'md'} maxW={'400px'} w={"100%"}>
        <SignInForm />
      </Box>
    </Flex>
  );
};
export default Signin;
