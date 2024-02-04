import { createSlice } from "@reduxjs/toolkit";

export type cartItemType = {
    id: number,
    quantity: number
}

const cartSlice = createSlice({
    name: "cartContent",
    initialState: {
        cartItems: [] as cartItemType[]
    },
    reducers: {
        addItem: (state, action) => {
            const id = action.payload;
            state.cartItems = [...state.cartItems, {id, quantity: 1}]
        },
        increaseQuantity: (state, action) => {
            const id: number = action.payload;
            if (state.cartItems.find(item => item.id === id) == null) {
                state.cartItems = [...state.cartItems, {id , quantity: 1}]
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else return item;
                })
            }
        },
        decreaseQuantity: (state, action) => {
            const id: number = action.payload;
        
            
            if (state.cartItems.find(item => item.id === id)?.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item;
                })
            }
        },
        removeItem: (state, action) => {
            const id: number = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
        }
    }
})

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
