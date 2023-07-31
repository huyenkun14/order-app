/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/cartItem';

const initialState: CartItem[] = [];

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state: any, action: PayloadAction<CartItem>) => {
            const itemInCart = state.find((item: any) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        remove: (state: any, action: PayloadAction<number>) => {
            const newState = state.filter((item: any) => item.id !== action.payload);
            return newState;
        },
        incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.find((item) => item?.id === action.payload);
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.find((item) => item.id === action.payload);
            if (item && item.quantity === 1) {
                item.quantity = 1
            } else if (item) {
                item.quantity--;
            }
        },
    },
});

export const { add, remove, incrementQuantity, decrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
