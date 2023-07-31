/* eslint-disable prettier/prettier */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const rootReducer = combineReducers({
    cart: cartReducer,
    // more reducer
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
