import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './reducers/CartSlice'
import ProductSlice from './reducers/ProductSlice'
import UserSlice from './reducers/UserSlice'


export const Store = configureStore({
    reducer:{
        userReducer:UserSlice,
        productReducer:ProductSlice,
        cartReducer:CartSlice
    }
})
