import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Center,
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

function SimpleCard() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            // bg={useColorModeValue('gray.50', 'gray.800')}
            >
            <Stack spacing={8} mx={'auto'} maxW={'md'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'130%'}>Unlock the full shopping experience</Heading>
                    <Text fontSize={'lg'} color={'teal.600'}>
                        Sign in!
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link to='/forgetpassword'>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                                Sign in
                            </Button>
                            <Stack direction={{ base: 'column', sm: 'row' }}>
                                <Text fontWeight={'bold'} >New user?</Text>
                                <Link to='/signup' color={'blue.400'}> Sign up</Link>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default SimpleCard;
