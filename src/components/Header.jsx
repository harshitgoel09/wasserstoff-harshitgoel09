import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, Flex, Icon, useDisclosure } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaOpencart } from "react-icons/fa";
import cartInfo from './CartContext'
import { useContext } from 'react'

const Header = () => {
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const links = [
        { to: "/", text: "Home" },
        { to: "/beverages", text: "Products" },
        { to: "/cart", text: "Cart" },
    ];

    const { cartCount } = useContext(cartInfo);

    return (
        <Box boxShadow="base">
            <Flex justify="space-between" alignItems="center" mr={'8%'}>

                <Link to='/' className='text-stone-600 font-bold ml-2 rounded-md shadow-3xl'>
                    <div className='company-logo ml-10 p-5 flex hover:bg-gray-100 '>
                        <FaOpencart className='h-5 w-7 mt-1 shadow-xl rounded-3xl shadow-blue-200/10' />
                        Urban Cart
                    </div>
                </Link>
                <Button
                    display={{ base: 'block', md: 'none' }}
                    onClick={onOpen}
                    variant="outline"
                    size="sm"
                    leftIcon={<Icon as={FaBars} />}
                >
                </Button>

                {/* Show navigation links for medium and larger screens */}
                <ul className="hidden md:flex space-x-8">
                    {links.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                className={`${location.pathname === link.to ? 'blue' : 'black'}  hover:text-blue`}
                            >
                                {link.text === "Cart" ? `Cart - ${cartCount}`: link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Flex>


            {/* Hamburger menu for small screens */}
            <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerBody>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.to} className="py-2">
                                        <Link
                                            to={link.to}
                                            className={`${location.pathname === link.to ? 'blue' : 'black'}  hover:text-blue`}
                                            onClick={onClose}
                                        >
                                            {link.text === "Cart" ? `Cart - ${cartCount}`: link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

export default Header;