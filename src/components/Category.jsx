import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './database.json';
import { Box } from '@chakra-ui/react';

const getRandomAnimation = () => {
    const animations = [
        'loadingBorder',
        'fadeIn',
        'fadeOut',
        'rotate',
        'bounce',
        'pulse',
        'slideIn',
        'slideOut',
        'zoomIn',
        'zoomOut',
    ];

    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Category = () => {
    const [selectedLink, setSelectedLink] = useState('/beverages');
    const animation = getRandomAnimation();

    const handleLinkClick = (to) => {
        setSelectedLink(to);
    };

    return (
        <>
            <Box as="ul" className="flex p-5" listStyleType="none">
                {/* Loop through data.json and create an <li> element for each category name with enhanced user experience animation. */}
                {data.map((category) => (
                    <li key={category.category} className="mr-6">
                        <Link
                            to={`/${category.category_name.toLowerCase()}`}
                            className="group relative"
                            onMouseEnter={() => setSelectedLink(`/${category.category_name.toLowerCase()}`)}
                            onMouseLeave={() => setSelectedLink('/')}
                        >
                            <Box
                                borderBottom={`2px solid ${selectedLink === `/${category.category_name.toLowerCase()}` ? '#121C37' : 'transparent'}`}
                                padding="4px 8px"
                                transition="all 0.3s ease-in-out"
                                transform="scale(1)"
                                display="inline-block"
                                position="relative"
                                onClick={() => handleLinkClick(`/${category.category_name.toLowerCase()}`)}
                            >
                                {category.category_name}
                            </Box>
                            {selectedLink === `/${category.category_name.toLowerCase()}` && (
                                <Box
                                    className={`absolute w-full h-2 bg-${animation} transition-all duration-500 ease-in-out`}
                                    style={{
                                        bottom: 0,
                                        left: 0,
                                    }}
                                ></Box>
                            )}
                        </Link>
                    </li>
                ))}
            </Box>
        </>
    );
};

export default Category;
