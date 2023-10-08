import React from 'react'
import Item from './Item';

const CartList = (props) => {

    const uniquelist = props.list.filter((item, index, self) => {

        return self.indexOf(item) === index;
    })

    return (
        <Item list={uniquelist} />
    )
}

export default CartList;