import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "./slices/shoppingCart";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
})


export default store
