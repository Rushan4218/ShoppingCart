import { createSlice } from "@reduxjs/toolkit";

export type cartItemType = {
    id: number,
    quantity: number
}

const cartItemsString: string | null = localStorage.getItem("CARTITEMS");
const priceString: string | null = localStorage.getItem("PRICE");
const itemsQuantityString: string | null = localStorage.getItem("ITEMSQUANTITY");

const cartSlice = createSlice({
    name: "cartContent",
    initialState: {
        cartItems: (cartItemsString == null) ? [] : JSON.parse(cartItemsString) as cartItemType[],
        price: (priceString == null) ? 0 : JSON.parse(priceString),
        itemsQuantity: (itemsQuantityString == null) ? 0 : JSON.parse(itemsQuantityString)
        // cartItems: [] as cartItemType[],
        // price: 0,
        // itemsQuantity: 0
    },
    reducers: {
        addItem: (state, action) => {
            const {id, price} = action.payload;
            state.cartItems = [...state.cartItems, {id, quantity: 1}]
            state.price += price;
            state.itemsQuantity++;
        },
        increaseQuantity: (state, action) => {
            const {id, price} = action.payload;
            console.log(price);
            if (state.cartItems.find(item => item.id === id) == null) {
                state.cartItems = [...state.cartItems, {id , quantity: 1}]
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity + 1}
                    } else return item;
                })
            }

            state.price += price;
            state.itemsQuantity++;
        },
        decreaseQuantity: (state, action) => {
            const {id, price} = action.payload;
            
            if (state.cartItems.find(item => item.id === id)?.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                state.cartItems = state.cartItems.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1}
                    } else return item;
                })
            }
            state.price -= price;
            state.itemsQuantity--;
        },
        removeItem: (state, action) => {
            const {id, price, quantity} = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== id);
            state.price -= price * quantity;
            state.itemsQuantity -= quantity;
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
            state.price = 0;
            state.itemsQuantity = 0;
        }
    }
})

export const { addItem, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
