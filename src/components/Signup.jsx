// import React, { useState } from 'react';

// const Signup = () => {
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const handleInput = (e) => {
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value;

//     setUser((prevUser) => ({
//       ...prevUser,
//       [fieldName]: fieldValue,
//     }));
//   };

//   return (
//     <>
//       <h1>Signup or Register on our Store</h1>
//       <form>
//         <div>
//           <span>Name: </span>
//           <input
//             type="text"
//             placeholder="enter your name"
//             name="name"
//             value={user.name}
//             onChange={handleInput}
//           />
//         </div>
//         <div>
//           <span>Email: </span>
//           <input
//             type="text"
//             placeholder="enter your email"
//             name="email"
//             value={user.email}
//             onChange={handleInput}
//           />
//         </div>
//         <div>
//           <span>Phone No.: </span>
//           <input
//             type="text"
//             placeholder="enter your phone number"
//             name="phone"
//             value={user.phone}
//             onChange={handleInput}
//           />
//         </div>
//         <div>
//           <span>Password: </span>
//           <input
//             type="password"
//             placeholder="enter your password"
//             name="password"
//             value={user.password}
//             onChange={handleInput}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from "react-router-dom";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      // bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack direction={{ base: 'column', sm: 'row' }}>
              <Text fontWeight={'bold'}>
                Already a user?
              </Text>
              <Link to='/signin'>sign in</Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Signup;