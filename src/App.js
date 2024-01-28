import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import cartInfo from './components/CartContext';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import { Provider } from 'react-redux'
import AppRedux from './AppRedux';
import Home from './components/Home';

const App = () => {
  const [currentCartCount, setCurrentCartCount] = useState(0);

  const storedItems = localStorage.getItem('cartItems');
  const parsedItems = storedItems ? JSON.parse(storedItems) : [];

  useEffect(() => {
    if (storedItems) {
      setCurrentCartCount(parsedItems.length);
    }
  }, [parsedItems]);

  return (
    <Provider store={AppRedux}>
      <ChakraProvider>
        <cartInfo.Provider value={{ cartCount: currentCartCount, setCurrentCartCount }}>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/beverages' element={<Body />} />
              <Route path='/electronics' element={<Body />} />
              <Route path='/beauty' element={<Body />} />
            </Routes>
            <Footer />
          </Router>
        </cartInfo.Provider>
      </ChakraProvider>
    </Provider>
  )
}

export default App