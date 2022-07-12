import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    showCart: false,
};

export const cartUiSlice = createSlice({
    name: 'cartUi',

    initialState: initialState,

    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart;
        }
    }
})

export const { toggleCart } = cartUiSlice.actions;
export default cartUiSlice.reducer;