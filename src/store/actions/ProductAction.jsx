import axios from '../../api/AxiosConfig'
import { toast } from 'react-toastify'
import {loadproduct} from '../reducers/ProductSlice'

export const asyncLoadProduct = () => async (dispatch, getState) => {
    try {
        const {data} = await axios.get('/products')
        dispatch(loadproduct(data))
        
    } catch (error) {
        toast.error("Something Went Wrong")
    }
}
export const asyncProductUpdate = (id,product) => async (dispatch, getState) => {
    try {
        await axios.patch("/products/" + id , product)
        dispatch(asyncLoadProduct())
        toast.success("Product Updated")
    } catch (error) {
        toast.error("Something Went Wrong")

    }
}
export const asyncProductDelete = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/products/" + id)
        dispatch(asyncLoadProduct())
        toast.success("Product Deleted")
    } catch (error) {
        toast.error("Something Went Wrong")

    }
}
export const asyncProductCreation = (product) => async (dispatch, getState) => {
    try {
        await axios.post("/products", product)
        dispatch(asyncLoadProduct())
        toast.success("Product Created")
    } catch (error) {
        toast.error("Something Went Wrong")

    }
}