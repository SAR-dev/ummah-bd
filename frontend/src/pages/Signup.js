import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Box,
  Input,
  VStack,
  Icon,Text,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';

import { RiCheckboxCircleFill, RiCloseCircleFill } from 'react-icons/ri';
import { MdAccountCircle,MdAlternateEmail, MdPhone } from 'react-icons/md';
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';

const Signup = () => {
  const [errorShow, setErrorShow] = useState(false);

  const [passShow, setPassShow] = useState({
    pass:false,
    confirmPass:false,
  })
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    if(data.password===data.confirmPassword){
      alert(JSON.stringify(data));
    }
    else{
      setError('passwordMatched', {
        type: 'manual',
        message: 'Passowrds Doesnt match',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack w="600px" mx="auto" my={10} spacing={5}>
        {/* first name */}
        <InputGroup h="40px" alignItems={'center'} >
          <InputLeftElement pointerEvents="none">
            <Icon as={MdAccountCircle} fontSize={'30px'} />
          </InputLeftElement>
          <Input
            colorScheme={"teal"}
            type="text"
            size="lg"
            placeholder="First name"
            {...register('firstname', { required: true, maxLength: 80 })}
          />
          {errorShow && (
            <InputRightElement>
              {errors.firstname ? (
                <Icon
                  as={RiCloseCircleFill}
                  color="red.500"
                  fontSize={'22px'}
                />
              ) : (
                <Icon
                  as={RiCheckboxCircleFill}
                  color="green.500"
                  fontSize={'22px'}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>

        {/* email */}
        <InputGroup h="40px" alignItems={'center'} >
          <InputLeftElement pointerEvents="none">
            <Icon as={MdAlternateEmail} fontSize={'30px'} />
          </InputLeftElement>
          <Input
            colorScheme={"teal"}
            type="email"
            size="lg"
            placeholder="Email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errorShow && (
            <InputRightElement>
              {errors.email ? (
                <Icon
                  as={RiCloseCircleFill}
                  color="red.500"
                  fontSize={'22px'}
                />
              ) : (
                <Icon
                  as={RiCheckboxCircleFill}
                  color="green.500"
                  fontSize={'22px'}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>

        {/* phone */}
        <InputGroup h="40px" alignItems={'center'} >
          <InputLeftElement pointerEvents="none">
            <Icon as={MdPhone} fontSize={'30px'} />
          </InputLeftElement>
          <Input
            colorScheme={"teal"}
            type="tel"
            size="lg"
            placeholder="Phone"
            {...register('phone', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          {errorShow && (
            <InputRightElement>
              {errors.phone ? (
                <Icon
                  as={RiCloseCircleFill}
                  color="red.500"
                  fontSize={'22px'}
                />
              ) : (
                <Icon
                  as={RiCheckboxCircleFill}
                  color="green.500"
                  fontSize={'22px'}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>

        {/* password */}
        <InputGroup h="40px" alignItems={'center'} >
          <InputLeftElement
            cursor="pointer"
            onClick={() => setPassShow({ ...passShow, pass: !passShow.pass })}
          >
            <Icon
              as={passShow.pass ? AiFillEye : AiFillEyeInvisible}
              fontSize={'30px'}
            />
          </InputLeftElement>
          <Input
            colorScheme={"teal"}
            type={passShow.pass ? 'text' : 'password'}
            size="lg"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {errorShow && (
            <InputRightElement>
              {errors.password ? (
                <Icon
                  as={RiCloseCircleFill}
                  color="red.500"
                  fontSize={'22px'}
                />
              ) : (
                <Icon
                  as={RiCheckboxCircleFill}
                  color="green.500"
                  fontSize={'22px'}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>

        {/* Confirm Password */}
        <InputGroup h="40px" alignItems={'center'} >
          <InputLeftElement
            cursor="pointer"
            onClick={() =>
              setPassShow({ ...passShow, confirmPass: !passShow.confirmPass })
            }
          >
            <Icon
              as={passShow.confirmPass ? AiFillEye : AiFillEyeInvisible}
              fontSize={'30px'}
            />
          </InputLeftElement>
          <Input
            colorScheme={"teal"}
            type={passShow.confirmPass ? 'text' : 'password'}
            size="lg"
            placeholder="Confirm Password"
            {...register('confirmPassword', { required: true })}
          />
          {errorShow && (
            <InputRightElement>
              {errors.confirmPassword ? (
                <Icon
                  as={RiCloseCircleFill}
                  color="red.500"
                  fontSize={'22px'}
                />
              ) : (
                <Icon
                  as={RiCheckboxCircleFill}
                  color="green.500"
                  fontSize={'22px'}
                />
              )}
            </InputRightElement>
          )}
        </InputGroup>
        {errorShow && (
          <Box>
            {errors.passwordMatched && (
              <Text>{errors.passwordMatched.message}</Text>
            )}
          </Box>
        )}
        <Button type="submit" onClick={() => setErrorShow(true)}>
          Submit
        </Button>
      </VStack>
    </form>
  );
};
export default Signup;
