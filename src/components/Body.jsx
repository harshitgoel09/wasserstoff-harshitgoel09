import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Filter from './Filter';
import Category from './Category';
import ProductAddToCart from './ProductAddToCart';
import data from './database.json';

const Body = () => {
    const location = useLocation();

    // Toggle state is used for managing the Filter Button's on/off status.
    // For more details on its usage, refer to the implementation below handleButtonFilter function and Filter.jsx component.
    const [toggle, setToggle] = useState(true);

    // 'filteredList' state and the 'setFilteredList' function are used to manage and update the list of items after applying filters.
    const [filteredList, setFilteredList] = useState(data);

    // searchText and setSearchText are used to implement dynamic search functionality,
    // allowing the user to filter the list of items based on the entered keyword or query in the search bar.
    const [searchText, setSearchText] = useState('');



    // Filter 1.0: Used to filter the items containing the tag "Best Seller".
    const handleButtonFilter = () => {
        if (toggle) {
            let list = filteredList.filter((val) => {
                return val.item_tag === "Best Seller"
            })

            setFilteredList(list);
        } else {
            // Reset the filtered list to the original data
            filterDataByCategory(location.pathname.substring(1));
        }
        setToggle(!toggle)
    }


    // Filter 2.0.1: Used to filter the items Dynamically as the user types
    const handleSearchFilter = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === '') {
            filterDataByCategory(location.pathname.substring(1));
        } else {
            let list = filteredList.filter((val) => {
                return val.item_name.toLowerCase().includes(e.target.value.toLowerCase());
            })
            setFilteredList(list);
        }
    }

    // Filter 2.0.2: Filters the items when the user hits the search button
    const handleFilter = () => {
        let list = filteredList.filter((val) => {
            return val.item_name.toLowerCase().includes(searchText.toLowerCase());
        })

        setFilteredList(list);
    }

    //Function to filter data.json by category
    const filterDataByCategory = (category) => {
        if (category) {
            const categoryData = data.find((cat) => cat.category_name.toLowerCase() === category.toLowerCase());
            if (categoryData) {
                setFilteredList(categoryData.items);
            }
        }
    };

    // useEffect: Listens for changes in the URL path to dynamically update the filtered list
    useEffect(() => {
        // Extract category from URL path
        const category = location.pathname.substring(1);

        // Filter data.json based on the category
        filterDataByCategory(category);
    }, [location.pathname]);



    return (
        <div >
            {/* Category Component:
            - Displays all categories for which there is data available in data.json */}
            <Category />

            {/* Filter component */}
            <Filter handleButtonFilter={handleButtonFilter}
                handleSearchFilter={handleSearchFilter}
                searchText={searchText}
                handleFilter={handleFilter}
                toggle={toggle} />

            {/* Product Card Component: 
                - Receives the filtered list as props.
                - Rerenders whenever the list is updated due to filtration.
                - Displays product cards based on the provided filtered list.
            */}
            <ProductAddToCart list={filteredList} />
        </div>
    )

}

export default Body;