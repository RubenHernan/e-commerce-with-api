import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice"
import cart from "./slices/cart.slice"
import isLogin from "./slices/isLogin.slice"

export default configureStore({
    reducer:{
        products,
        cart,
        isLogin
    }
})