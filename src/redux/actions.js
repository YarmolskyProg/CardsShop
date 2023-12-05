import { ADD_TO_CART, CART_TOTAL, CHANGE_QTY, CLEAR_CART, LOADED_PRODUCTS, LOAD_CATEGORY, LOAD_MORE, LOAD_PRODUCTS, PRODUCTS_LOAD, SEARCH, SET_ACTIVE, SET_CURRENT, SET_METHOD, SET_PAG, SET_SUM, SET_VALID, SORT, USE_PROMO } from "./types";

export const getProducts = (data) => ({
    type: LOAD_PRODUCTS,
    data: data
})
export const setCurrent = (data) => ({
    type: SET_CURRENT,
    data: data
})
export const loadedProducts = (data) => ({
    type: LOADED_PRODUCTS,
    data: data
})
export const loadMore = (params) => ({
    type: LOAD_MORE,
    params
})
export const loadCategory = (data) => ({
    type: LOAD_CATEGORY,
    data
})
export const addToCart = (data, qty) => ({
    type: ADD_TO_CART,
    data: data,
    qty: qty
})
export const changeQty = (data, qty, pm) => ({
    type: CHANGE_QTY,
    data: data,
    qty: qty,
    pm: pm
})
export const clearCart = () => ({
    type: CLEAR_CART
})
export const cartTotal = (data) => ({
    type: CART_TOTAL,
    data
})
export const Search_item = (data, searchon) => ({
    type: SEARCH,
    data: data,
    searchon: searchon
})
export const use_Promo = (data) => ({
    type: USE_PROMO,
    data
})
export const productsLoad = (params, search) => ({
    type: PRODUCTS_LOAD,
    params,
    search
})
export const setPag = () => ({
    type: SET_PAG
})
export const setValid = () => ({
    type: SET_VALID
})
export const sortProd = (data) => ({
    type: SORT,
    data
})
export const setMethod = (data, sum) => ({
    type: SET_METHOD,
    data,
    sum
})
export const setActive = (data) => ({
    type: SET_ACTIVE,
    data
})
export const setSum = (data) => ({
    type: SET_SUM,
    data
})