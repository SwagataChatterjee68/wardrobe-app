import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: JSON.parse(localStorage.getItem("cart")) || []
};

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadcart: (state, action) => {
            state.carts = action.payload;
            localStorage.setItem("cart", JSON.stringify(state.carts));
        },
        addToCart: (state, action) => {
            state.carts.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.carts));
        },
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter(item => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.carts));
        },
        clearCart: (state) => {
            state.carts = [];
            localStorage.setItem("cart", JSON.stringify(state.carts));
        }
    },
});

export default CartSlice.reducer;
export const { loadcart, addToCart, removeFromCart, clearCart } = CartSlice.actions;
