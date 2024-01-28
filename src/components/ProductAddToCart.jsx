import React from 'react';
import ControlPanel from './ControlPanel';
import {
    Flex,
    Box,
    Image,
    Badge,
    CardBody,
    Heading,
    SimpleGrid,
    Card,
    Stack
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

// Component for displaying rating and reviews
function Rating({ rating, numReviews }) {
    return (
        <Box display="flex" alignItems="center" >
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    return (
                        <Box key={i} style={{ fontSize: '10px' }}>
                            {roundedRating - i >= 1 ? (
                                <BsStarFill
                                    key={i}
                                    style={{ marginLeft: '1', fontSize: '12px' }}
                                    color={i < rating ? 'teal.500' : 'gray.300'}
                                />
                            ) : roundedRating - i === 0.5 ? (
                                <BsStarHalf key={i} style={{ marginLeft: '1', fontSize: '12px' }} />
                            ) : (
                                <BsStar key={i} style={{ marginLeft: '1', fontSize: '12px' }} />
                            )}
                        </Box>
                    );
                })}
            <Box as="span" ml="2" color="gray.600" fontSize={{ base: "10px", md: "12px" }}>
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

// Product Card Component for creating cards for each product
function ProductAddToCart(props) {
    return (
        <Box mx={"10%"} my={"5%"} >
            
            {/* Using SimpleGrid for responsive grid layout */}
            <SimpleGrid my={'2%'} spacing={6} templateColumns={{ base: '1fr', sm: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} >
                {props.list.map((val, index) => (

                    // Product Card
                    <Card key={index} w={{ base: '50vw', sm: '40vw', md: '30vw', lg: '22vw' }} h={'fit-content'} mb="4%" borderColor={'gray.500'} borderRadius={'4px'} boxShadow='base' >

                        {/* Product Image */}
                        <Image src={val.item_img} alt='project-image'
                            height={{ base: '150px', sm: '160px', md: '220px' }} width={'100vw'} borderTopLeftRadius={'4px'} borderTopRightRadius={'4px'}
                        />

                        {/* Product Body */}
                        <CardBody>

                            {/* Product Body Stack */}
                            <Stack spacing='4' px={5}>

                                {/* Product Tag: eg.. Best Seller, New, etc. */}
                                <Badge rounded="full" px="2" fontSize="11px" colorScheme="red" fontWeight={500} width={'fit-content'}>{val.item_tag}</Badge>

                                <Flex justifyContent={'space-between'}>
                                    {/* Product Name */}
                                    <Heading fontSize={{ base: "10px", sm: '14px', md: "12px", lg: "14px" }} fontWeight={500}>{val.item_name}</Heading>

                                    {/* Control Panel Component is used to manage the Add/Remove Item functionality in the product card. */}
                                    <ControlPanel item={val} />
                                </Flex>

                                <Flex justifyContent="space-between">
                                    {/* Product Raiting and Reviews */}
                                    <Rating rating={val.item_starcount} numReviews={val.item_reviews} />

                                    {/* Product Price and Currency Symbol */}
                                    <Box fontSize={{ base: "12px", md: "14px" }}>
                                        <Box as="span" color={'gray.600'} fontSize={{ base: "12px", md: "14px" }}>
                                            ₹
                                        </Box>
                                        {val.item_price}
                                    </Box>
                                </Flex>

                            </Stack>

                        </CardBody>

                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}

export default ProductAddToCart;