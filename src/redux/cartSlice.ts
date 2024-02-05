import { createSlice } from "@reduxjs/toolkit";

export type cartItemType = {
    id: number,
    quantity: number
}

const cartSlice = createSlice({
    name: "cartContent",
    initialState: {
        cartItems: [] as cartItemType[],
        price: 0,
        itemsQuantity: 0
    },
    reducers: {
        addItem: (state, action) => {
            const {id, itemPrice} = action.payload;
            state.cartItems = [...state.cartItems, {id, quantity: 1}]
            state.price += itemPrice;
            state.itemsQuantity++;
        },
        increaseQuantity: (state, action) => {
            const {id, itemPrice} = action.payload;
            if (state.cartItems.find(item => item.id === id) == null) {
                state.cartItems = [...state.cartItems, {id , quantity: 1}]
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else return item;
                })
            }

            state.price += itemPrice;
            state.itemsQuantity++;
        },
        decreaseQuantity: (state, action) => {
            const {id, itemPrice} = action.payload;
            
            if (state.cartItems.find(item => item.id === id)?.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item;
                })
            }
            state.price -= itemPrice;
            state.itemsQuantity--;
        },
        removeItem: (state, action) => {
            const {id, itemPrice, quantity} = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
            state.price -= itemPrice * quantity;
            state.itemsQuantity -= quantity;
        }
    }
})

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
