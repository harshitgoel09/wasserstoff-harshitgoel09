import React from 'react'
// import cartInfo from './CartContext'
// import { useContext } from 'react'
import { useSelector } from 'react-redux';
import ProductAddToCart from './ProductAddToCart'
import { Text, Box, chakra } from '@chakra-ui/react';



const Cart = () => {
  // const cartDetails = useContext(cartInfo);
  const cartItems = useSelector((store) => {
    return (
      store.cartStore.items
    )
  });

  var cartValue = 0;
  const uniquelist = cartItems.filter((item, index, self) => {
    cartValue += item.item_price;
    return self.indexOf(item) === index;
  })


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

      <ProductAddToCart list={uniquelist} />

    </>
  )
}

export default Cart