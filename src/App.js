import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import AppRedux from './AppRedux';
import Home from './components/Home';
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart';
import Footer from './components/Footer';
import cartInfo from './components/CartContext';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {

  // Demostrating: the use of Context API in react 
  // Managing the cart count using context api in react
  const [currentCartCount, setCurrentCartCount] = useState(0);

  const storedItems = localStorage.getItem('cartItems');

  useEffect(() => {
    const parsedItems = storedItems ? JSON.parse(storedItems) : [];
    setCurrentCartCount(parsedItems.length);
  }, [storedItems]);

  //**Note**: Used Redux Toolkit to cover major global data management, but also covered a use case with Context API

  return (
    <Provider store={AppRedux}>
      {/* Providing Chakra to entire application */}
      <ChakraProvider>

        {/* Use the 'cartInfo' context provider to make the cart details available throughout the entire application */}
        <cartInfo.Provider value={{ cartCount: currentCartCount, setCurrentCartCount }}>

          <Router>

            {/* Header component */}
            <Header />

            {/* Other Routes */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />

              {/* Every category route calls the same 'Body' component, which manages product listing based on the category. The Body component determines the category from the current URL path and filters products accordingly. For more details, please visit the 'Body.jsx' component. */}
              <Route path='/beverages' element={<Body />} />
              <Route path='/electronics' element={<Body />} />
              <Route path='/beauty' element={<Body />} />
            </Routes>

            {/* Footer component */}
            <Footer />

          </Router>
        </cartInfo.Provider>
      </ChakraProvider>
    </Provider>
  )
}

export default App