import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name: 'cart',

    initialState: initialState,

    reducers: {
        addItem: (state, action) => {
            // if we add item for the first time
            if (state.items.length === 0) {
                state.items.push(action.payload);
                state.totalQuantity = 1;
                state.totalPrice = action.payload.price;
            }

            // if we add item for the second time
            else {
                let itemExists = false;
                state.items.forEach(item => {
                    if (item.id === action.payload.id) {
                        item.quantity++;
                        state.totalQuantity++;
                        state.totalPrice += action.payload.price;
                        itemExists = true;
                    }
                })
                if (!itemExists) {
                    state.items.push(action.payload);
                    state.totalQuantity++;
                    state.totalPrice += action.payload.price;
                }
            }
        },
        removeItem: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    state.totalQuantity--;
                    state.totalPrice -= action.payload.price;
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
            }
            )
        },
        increaseQuantity: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity++;
                    state.totalQuantity++;
                    state.totalPrice += item.price;
                }
            }
            )
        },
        decreaseQuantity: (state, action) => {
            state.items.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity--;
                    state.totalQuantity--;
                    state.totalPrice -= item.price;
                }
            }
            )
        }
    }
});

export const { addItem, decreaseQuantity, increaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;