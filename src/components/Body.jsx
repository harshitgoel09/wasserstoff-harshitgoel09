import React, { useState, useEffect } from 'react'
import Filter from './Filter';
import ProductAddToCart from './ProductAddToCart';
import data from './database.json';
import { useLocation } from 'react-router-dom';
import Menu from './Menu';

const Body = () => {
    const location = useLocation();
    const [toggle, setToggle] = useState(true);
    const [filterdList, setFilterdList] = useState(data);

    const handleButtonFilter = () => {
        if (toggle) {
            let list = filterdList.filter((val) => {
                return val.item_tag === "Best Seller"
            })

            setFilterdList(list);
        } else {
            // Reset the filtered list to the original data
            filterDataByCategory(location.pathname.substring(1));
        }
        setToggle(!toggle)
    }

    const [searchText, setSearchText] = useState('');
    const handleSearchFilter = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === '') {
            filterDataByCategory(location.pathname.substring(1));
        } else {
            let list = filterdList.filter((val) => {
                return val.item_name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            setFilterdList(list);
        }
    }

    const handlefilter = () => {
        let list = filterdList.filter((val) => {
            return val.item_name.toLowerCase().includes(searchText.toLowerCase());
        })

        setFilterdList(list);
    }

    const filterDataByCategory = (category) => {
        if (category) {
            const categoryData = data.find((cat) => cat.category_name.toLowerCase() === category.toLowerCase());
            if (categoryData) {
                setFilterdList(categoryData.items);
            }
        }
    };

    useEffect(() => {
        // Extract category from URL path
        const category = location.pathname.substring(1);

        // Filter data based on the category
        filterDataByCategory(category);
    }, [location.pathname]);



    return (
        <div >
            <Menu />
            {/* Filter component */}
            <Filter handleButtonFilter={handleButtonFilter}
                handleSearchFilter={handleSearchFilter}
                searchText={searchText}
                handlefilter={handlefilter}
                toggle={toggle} />


            {/* Item component */}
            <ProductAddToCart list={filterdList} />
        </div>
    )

}

export default Body;