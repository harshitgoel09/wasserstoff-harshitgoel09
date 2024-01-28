import React from 'react'
import { useSelector } from 'react-redux';
import ProductAddToCart from './ProductAddToCart'
import { Text, Box, chakra } from '@chakra-ui/react';



const Cart = () => {

  // Selects the 'items' array from the Redux store's 'cartStore' slice using the useSelector hook
  const cartItems = useSelector((store) => {
    return (
      store.cartStore.items
    )
  });

  // Calculate Total Amount of Cart 
  const cartValue = cartItems.reduce((total, item) => total + item.item_price, 0);

  // Unique Item List
  const uniquelist = Array.from(new Set(cartItems.map(JSON.stringify))).map(JSON.parse);


  return (
    <>
      {cartItems.length === 0 ?

        (<Box textAlign="center" p="4">
          <Text fontSize="xl" fontWeight="bold">
            Your cart is empty.
            <chakra.span color="teal.500">
              Time to fill it with amazing items!
            </chakra.span> 🛍️
          </Text>
        </Box>) :

        (<Box textAlign="center" p="4">
          <Text fontSize="xl" fontWeight="bold">
            Let's review and manage your selected items.
            <chakra.span color="teal.500"> Happy shopping!</chakra.span> 🛒
            ₹{cartValue}
          </Text>
        </Box>)
      }

      {/* Reusable Product Card Component on Cart Page */}
      <ProductAddToCart list={uniquelist} />

    </>
  )
}

export default Cart