import React from 'react';
import {
  Box,
  Flex,
  Icon,
  Button,
  Avatar,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
  Progress,
  Link as ChakraLink,
} from '@chakra-ui/react';
import ReactTooltip from 'react-tooltip';

const NavbarUserHP = () => {
  const data = {
    achieved: 120,
    target: 300,
  };

  return (
    <Flex alignItems={'center'} mr={5}>
      <Button
        colorScheme={'ash'}
        variant={'outline'}
        bg={'ash.300'}
        borderColor={'border.medium'}
        textAlign={'start'}
        _hover={{ bg: 'ash.400' }}
        _focus={{ bg: 'ash.400' }}
        _active={{ bg: 'ash.400' }}
        data-tip 
        data-for="hp"
      >
        <SimpleGrid columns={1} spacing={1}>
          <Flex fontSize={'10px'}>
            <Text color={'text.dark'}>Saint</Text>
            <Text color={'text.medium'} ml={'auto'}>
              Legend
            </Text>
          </Flex>
          <Progress
            hasStripe
            isAnimated
            size={'sm'}
            rounded={'sm'}
            colorScheme={'teal'}
            bg={'teal.200'}
            w={24}
            value={(data.achieved / data.target) * 100}
          />
        </SimpleGrid>
      </Button>
      <ReactTooltip id="hp" place="bottom" type="dark" effect="solid">
        <SimpleGrid columns={1} fontSize={'xs'}>
          <Text>Achieved: {data.achieved}</Text>
          <Text>Target: {data.target}</Text>
        </SimpleGrid>
      </ReactTooltip>
    </Flex>
  );
};

export default NavbarUserHP;
