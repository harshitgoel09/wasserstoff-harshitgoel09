import { Link } from 'react-router-dom';
import { Box, Button, Heading, Text, Image } from "@chakra-ui/react";
import urbancartIMG from "../assets/urban-cart-img.svg";

const Home = () => {

    // Function to scroll to the top of the page when the "Explore Categories" button is clicked.
    // This ensures a seamless user experience when redirecting to different components in the Home page.
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (

        <Box
            display={{ md: 'flex' }}
            justifyContent={"space-between"}
            mx={"10%"}
            my={"5%"}

        >
            <Box maxW={{ md: '55%' }} my={{ lg: "5%" }}>
                
                {/* Brand Name Display */}
                <Button
                    bg="rgba(70, 58, 208, 0.14)"
                    textColor="#675DE0"
                    px={3}
                    py={2}
                    rounded="full"
                    fontSize="xs"
                    mt={[10, 0]}
                    fontWeight="semibold"
                    my={2}
                    _hover={{ bg: "rgba(70, 58, 208, 0.14)", textColor: "#675DE0" }}
                >
                    Urban Cart
                </Button>

                {/* About Brand */}
                <Heading
                    fontFamily="Playfair Display"
                    fontSize={{ base: '24px', md: "24px", lg: "30px", xl: "40px" }}
                    fontWeight="semibold"
                    lineHeight="1.1"
                >
                    Go-to destination for all things stylish and essential.
                </Heading>

                {/* Quote of Brand */}
                <Text
                    fontFamily="Open Sans"
                    fontSize={{ base: '14px', md: "14px", lg: "16px" }}
                    color="custom"
                    lineHeight="1.5"
                    maxW={{ md: '85%' }}
                    py={3}
                >
                    From fashion trends to home essentials, discover the perfect blend of urban living at your fingertips.
                </Text>

                {/* Visit Category Page Button */}
                <Link to="/beverages">
                    <Button
                        my={"1%"}
                        bg="#463AD0"
                        color="#fff"
                        _hover={{ bg: "#5045cc" }}
                        fontSize={'14px'}
                        px={6}
                        py={2}
                        fontWeight={400}
                        onClick={scrollToTop}
                    >
                        Explore Categories
                    </Button>
                </Link>

            </Box>

            {/* Urban Cart Brand Image */}
            <Box>
                <Image src={urbancartIMG} alt="Logo" w={{ base: "450px", md: "500px", lg: "400px" }} />
            </Box>

        </Box>
    );
}

export default Home;