import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
} from '@chakra-ui/react';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../';

const SocialButton = ({ children, label }) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

function Footer() {
    return (
        <Box
            bg={'#121C37'}
            color={useColorModeValue('gray.700', 'gray.200')}
            shadow={'base'} 
            position={'absolute'}
            bottom={0}
            right={0}
            left={0}
            
            >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }} >
                <Text
                    textAlign={{ base: 'center', md: 'left' }}
                    fontSize={'sm'}
                    fontWeight={'bold'}
                    color={useColorModeValue('gray.600', 'gray.300')}
                    _hover={{ color: 'white' }}
                    transition="color 0.3s" >Designed and developed by Harshit Goel </Text>


                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    spacing={{ base: 4, md: 6 }}>
                    <SocialButton>
                        <Link to="https://www.linkedin.com/in/harshitgoel09/" target='_blank'><FaLinkedin color="white" /></Link>
                    </SocialButton>
                    <SocialButton>
                        <Link to="https://github.com/harshitgoel09" target='_blank'><FaGithub color="white" /></Link>
                    </SocialButton>
                    <SocialButton>
                        <Link to="https://www.instagram.com/harshitgoel_09" target='_blank'><FaInstagram color="white" /></Link>
                    </SocialButton>
                </Stack>
            </Container>
        </Box>
    );
}

export default Footer;
