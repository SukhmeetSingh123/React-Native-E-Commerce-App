import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './slices/ProductSlice'
import WishlistReducer from './slices/WishListSlice'
import CartReducer from './slices/CartSlice'
export const store =configureStore({
    reducer:{
        product:ProductReducer,
        wishlist:WishlistReducer,
        cart:CartReducer
    }
})