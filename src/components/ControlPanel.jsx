import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../cartSlice';
import { FaMinus, FaPlus } from 'react-icons/fa';
import cartInfo from './CartContext'
import { useContext } from 'react'
import {
    Flex,
    IconButton,
    Text,
} from '@chakra-ui/react';

const ControlPanel = (props) => {
    const cartItems = useSelector((store) => store.cartStore.items);
    const dispatch = useDispatch();

    const itemQuantity = cartItems.filter(
        (cartItem) => cartItem.item_id === props.item.item_id
    ).length;

    const {cartCount, setCurrentCartCount } = useContext(cartInfo);

    return (
        <Flex align="center">
            <IconButton
                aria-label="Remove from Cart"
                icon={<FaMinus />}
                variant="ghost"
                colorScheme="red"
                style={{ fontSize: "12px" }}
                onClick={() => {
                    setCurrentCartCount(cartCount-1);
                    dispatch(removeItem(props.item.item_id))
                }}
                isDisabled={itemQuantity === 0}

            />

            <Text mx={'10%'} fontSize="14px">
                {itemQuantity}
            </Text>
            <IconButton
                aria-label="Add to Cart"
                icon={<FaPlus />}
                variant="ghost"
                colorScheme="green"
                style={{ fontSize: "12px" }}
                onClick={() => {
                    setCurrentCartCount(cartCount+1);
                    dispatch(addItem(props.item))
                }}
            />
        </Flex>


    );
};

export default ControlPanel;
