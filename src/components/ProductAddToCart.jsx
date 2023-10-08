import React from 'react';
import {
    Flex,
    Box,
    Image,
    Badge
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import ControlPanel from './ControlPanel';

// const data = {
//     isNew: true,
//     name: 'Wayfarer Classic',
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
// };

function Rating({ rating, numReviews }) {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2;
                    return (
                        <Box key={i} style={{ fontSize: '10px' }}>
                            {roundedRating - i >= 1 ? (
                                <BsStarFill
                                    key={i}
                                    style={{ marginLeft: '1', fontSize: '10px' }}
                                    color={i < rating ? 'teal.500' : 'gray.300'}
                                />
                            ) : roundedRating - i === 0.5 ? (
                                <BsStarHalf key={i} style={{ marginLeft: '1', fontSize: '10px' }} />
                            ) : (
                                <BsStar key={i} style={{ marginLeft: '1', fontSize: '10px' }} />
                            )}
                        </Box>
                    );
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="12px">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    );
}

function ProductAddToCart(props) {
    return (
        <Box mx={"10%"} my={"5%"} >
            <Flex flexWrap="wrap" gap={5} justifyContent="center">
                {props.list.map((val, idx) => (
                    <Box key={idx} w="27%">
                        <Flex alignItems="center" justifyContent="center">
                            <Box
                                w="100%"
                                borderWidth="1px"
                                rounded="lg"
                            >

                                <Image src={val.item_img} h={'250px'} w={'100%'} alt={`Picture of ${val.item_name}`} roundedTop="lg" />

                                <Box p="6">
                                    <Box display="flex" alignItems="baseline">

                                        <Badge rounded="full" px="2" fontSize="0.6em" colorScheme="red">
                                            {val.item_tag}
                                        </Badge>

                                    </Box>
                                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                                        <Box
                                            fontSize="15px"
                                            fontWeight="semibold"
                                            lineHeight="tight"
                                            // isTruncated
                                        >
                                            {val.item_name}
                                        </Box>

                                        <ControlPanel item={val} />

                                    </Flex>

                                    <Flex justifyContent="space-between" alignContent="center">
                                        <Rating rating={val.item_starcount} numReviews={val.item_reviews} />
                                        <Box fontSize="14px">
                                            <Box as="span" color={'gray.600'} fontSize="14px">
                                                ₹
                                            </Box>
                                            {val.item_price}
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
}

export default ProductAddToCart;