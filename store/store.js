import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slices/cartSlice';
import  cartUiSlice  from './slices/cartUiSlice';
export default configureStore({
    reducer: {
        cart: cartSlice,
        cartUi: cartUiSlice
    }
})
