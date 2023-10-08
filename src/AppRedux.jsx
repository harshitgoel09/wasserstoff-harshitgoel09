import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const AppRedux = configureStore({
    reducer: {
        cartStore: cartReducer
    }
})

export default AppRedux;