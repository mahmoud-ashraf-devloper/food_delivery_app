import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    totalQuantity: 0,
    totalAmount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,


    reducer: {
        addItem(state, action) {
            const newItem = action.payload
            const isAlreadyExists = state.cartItems.find(item => item.id === newItem.id)
            if (!isAlreadyExists) {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    image: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,

                })
            }
            else {
                isAlreadyExists.quantity++
                isAlreadyExists.totalPrice = Number(isAlreadyExists.totalPrice) + Number(isAlreadyExists.price)
            }

            state.totalAmount = state.cartItems.reduce((total, item) => (total + (Number(item.price) * Number(item.quantity))))
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice