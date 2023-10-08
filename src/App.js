import React, { useState, useContext, useEffect } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Signin from './components/Signin';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import cartInfo from './components/CartContext';
import { ChakraProvider } from '@chakra-ui/react'
import Footer from './components/Footer';
import { Provider } from 'react-redux'
import AppRedux from './AppRedux';

const App = () => {
  // const [currentCartCount, setCurrentCartCount] = useState(0);

  return (
    <Provider store={AppRedux}>
      <ChakraProvider>
        {/* <cartInfo.Provider value={{ cartCount: currentCartCount, setCurrentCartCount }}> */}
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Footer />
        </Router>
        {/* </cartInfo.Provider> */}
      </ChakraProvider>
    </Provider>
  )
}

export default App