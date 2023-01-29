import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../../actionTypes';
import { initialStates, productReducer } from '../../productReducer';
const ProductContexts = createContext()

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialStates)
    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        axios.get(`http://localhost:5000/products`)
            .then(result => {
                dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: result.data })
            })
            .catch(() => {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            })
    }, [])
    const value = { state, dispatch }

    return (
        <ProductContexts.Provider value={value}>
            {children}
        </ProductContexts.Provider>
    );
};

export default ProductProvider;
export const useProducts = () => {
    const exportProducts = useContext(ProductContexts)
    return exportProducts
}