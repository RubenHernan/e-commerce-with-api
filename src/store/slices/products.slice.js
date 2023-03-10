import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: "products",
    initialState: null,
    reducers: {
        setProducts: (state,action) => action.payload
    }
})

const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const getAllProductsThunk = () => (dispatch) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/products/";
    axios.get(url)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))
}

export const getProductsByName = (title, category = false) => dispatch => {

let url = "";

if(category){
    url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${title}`

}else{
    url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?title=${title}`

}
    axios.get(url)
        .then(res => dispatch(setProducts(res.data)))
        .catch(err => console.log(err))
}