import React, { useState, useContext } from 'react'
// import cartInfo from './CartContext';
import Filter from './Filter';
import ProductAddToCart from './ProductAddToCart';
// import {useDispatch} from 'react-redux';
// import { addItem, removeItem } from '../cartSlice';

const data = [
    {
        item_id: 1,
        item_img: 'https://images.unsplash.com/photo-1472555794301-77353b152fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4600&q=80',
        item_name: "Velvet Vanilla Delight",
        item_starcount: "4.5",
        item_reviews: 42,
        item_price: 349,
        item_tag: "Best Seller"
    },
    {
        item_id: 2,
        item_img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        item_name: "Double Delight Oreo Shake",
        item_starcount: "4.0",
        item_reviews: 30,
        item_price: 399,
        item_tag: "Best Seller"
    },
    {
        item_id: 3,
        item_img: 'https://images.unsplash.com/photo-1553787499-6f9133860278?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        item_name: "Caramel Dream Delight",
        item_starcount: "4.2",
        item_reviews: 22,
        item_price: 349,
        item_tag: "New Arrivals"
    },
    {
        item_id: 4,
        item_img: 'https://images.unsplash.com/photo-1594488506255-a8bbfdeedbaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        item_name: "Mystic Mocha",
        item_starcount: "4.7",
        item_reviews: 45,
        item_price: 349,
        item_tag: "Best Seller"
    },
    {
        item_id: 5,
        item_img: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1898&q=80',
        item_name: "Chocolate Fudge Paradise",
        item_starcount: "4.1",
        item_reviews: 28,
        item_price: 349,
        item_tag: "New Arrivals"
    },
    {
        item_id: 6,
        item_img: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80',
        item_name: "Mango Tango Delight",
        item_starcount: "4.3",
        item_reviews: 33,
        item_price: 299,
        item_tag: "New Arrivals"
    },
    {
        item_id: 7,
        item_img: 'https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
        item_name: "Minty Lime Breeze",
        item_starcount: "3.0",
        item_reviews: 15,
        item_price: 399,
        item_tag: "Best Seller"
    },
    {
        item_id: 8,
        item_img: 'https://images.unsplash.com/photo-1541745038731-f1c2b5a1a49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1963&q=80',
        item_name: "Blueberry Breeze",
        item_starcount: "3.8",
        item_reviews: 20,
        item_price: 349,
        item_tag: "New Arrivals"
    }
];

const Body = () => {
    const [toggle, setToggle] = useState(true);
    const [filterdList, setFilterdList] = useState(data);
    const handleButtonFilter = () => {
        if (toggle) {
            let list = data.filter((val) => {
                return val.item_tag === "Best Seller"
            })

            setFilterdList(list);
        } else {
            setFilterdList(data)
        }
        setToggle(!toggle)
    }

    const [searchText, setSearchText] = useState('');
    const handleSearchFilter = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === '') {
            setFilterdList(data);
        } else {
            let list = data.filter((val) => {
                return val.item_name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            setFilterdList(list);
        }
    }

    const handlefilter = () => {
        let list = data.filter((val) => {
            return val.item_name.toLowerCase().includes(searchText.toLowerCase());
        })

        setFilterdList(list);
    }


    // const { cartCount, setCurrentCartCount } = useContext(cartInfo);
    // const dispatch = useDispatch();
    // const handleAddToCart = (val) => {
    //     // setCurrentCartCount(cartCount + 1)
    //     dispatch(addItem(val));
    // }

    // const handleRemoveFromCart = (id) => {
    //     dispatch(removeItem(id));
    // }


    return (
        <div >
            {/* className='bg-gray-50 h-screen' */}
            {/* Filter component */}
            <Filter handleButtonFilter={handleButtonFilter}
                handleSearchFilter={handleSearchFilter}
                searchText={searchText}
                handlefilter={handlefilter}
                toggle={toggle} />


            {/* Item component */}
            {/* <Item list={filterdList} /> */}
            <ProductAddToCart list={filterdList} />


        </div>
    )

}

export default Body;