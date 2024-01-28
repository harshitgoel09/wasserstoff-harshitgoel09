import { Button, Flex, Input } from '@chakra-ui/react';
import React from 'react'


const Filter = (props) => {
    return (

        <Flex className="Filter-container" justify="space-between" mx={"10%"} mt={5}>
            <Button
                onClick={props.handleButtonFilter}
                px={{ base: "10px", md: "24px" }}
                mr={1}
                rounded="md"
                fontSize="14px"
                bg="gray.200"
                _hover={{ bg: 'gray.300' }}
                color="gray.700"
                display="flex"
                alignItems="center"
                justifyContent="center"
                _focus={{ outline: 'none' }}
            >
                {props.toggle ? "Best Seller" : "Show All"}
            </Button>
            <Flex className="mt-1" alignItems="center">
                <Input
                    type="text"
                    placeholder="Search the item"
                    value={props.searchText}
                    onChange={props.handleSearchFilter}
                    height="8"
                    paddingLeft="3"
                    paddingRight="6"
                    borderWidth="1px"
                    borderColor="gray.300"
                    rounded="full"
                    fontSize="sm"
                    _focus={{ outline: 'none', ring: '2', ringColor: 'gray.300' }}
                    isDisabled={false} // Set to true if you want it to be disabled
                />
                <Button
                    onClick={props.handlefilter}

                    px={"24px"}
                    py={1}
                    bg="gray.200"
                    _hover={{ bg: 'gray.300' }}
                    color="gray.700"
                    fontSize="14px"
                    rounded={"full"}
                    marginLeft="2"
                    _focus={{ outline: 'none' }}
                    width={'fit-content'}
                >
                    Search
                </Button>
            </Flex>
        </Flex>

    )
}

export default Filter