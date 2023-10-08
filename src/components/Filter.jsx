import React from 'react'
import { FaStar, FaList } from 'react-icons/fa';


const Filter = (props) => {
    return (

        <div className="Filter-container flex justify-between pr-20 pl-20 mt-5">
            <button
                onClick={props.handleButtonFilter}
                className="w-20 h-8 px-1 py-1 rounded-md text-xs font-semibold
        bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center focus:outline-none">
                {props.toggle ? <FaStar className="mr-1" size={12} /> : <FaList className="mr-1" size={12} />}
                {props.toggle ? `Best` : `Show`}
            </button>
            <div className="mt-1 flex items-center">
                <input
                    type="text"
                    placeholder="Search the item"
                    value={props.searchText}
                    onChange={props.handleSearchFilter}
                    className="flex-grow h-8 pl-3 pr-6 border border-gray-300 rounded-full text-sm
            focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:bg-gray-100"
                />
                <button
                    onClick={props.handlefilter}
                    className="ml-2 w-16 h-8 px-2 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-xs font-semibold flex items-center justify-center focus:outline-none"
                >
                    Search
                </button>
            </div>
        </div>


    )
}

export default Filter