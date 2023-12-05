import { isEmptyObject } from "jquery";
import { Cookies } from "react-cookie";
import { act } from "react-dom/test-utils";
import { productsApi } from "../api/api";
import { cartTotal, getProducts } from "./actions";
import { ADD_TO_CART, CART_TOTAL, CHANGE_QTY, CLEAR_CART, LOADED_PRODUCTS, LOAD_CATEGORY, LOAD_MORE, LOAD_PRODUCTS, PRODUCTS_LOAD, SEARCH, SET_ACTIVE, SET_CURRENT, SET_METHOD, SET_PAG, SET_SUM, SET_VALID, SORT, USE_PROMO } from "./types";
const initialState = {
    products: [],
    currentProduct: {},
    loadedProducts: [],
    showingAmount: 0,
    cart: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [],
    cartItemsAmount: 0,
    cartTotal: 0,
    search: false,
    promocode: [],
    promocodeUsage: false,
    loadmore: true,
    productsamount: 0,
    valid: 0,
    payment: [],
    method: 10,
    active: {},
    sumcrypto: 0,
    summary: 0
}
let ShopReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SUM: {
            localStorage.setItem('cartTotal', action.data)
            return {
                ...state,
                summary: action.data,
                sumcrypto: 0,
                active: {}
            }
        }
        case SET_ACTIVE: {
            return {
                ...state,
                active: action.data
            }
        }
        case SET_METHOD: {
            let sum = (JSON.parse(localStorage.getItem('cartTotal')) / action.data.rate).toFixed(4)
            // let sum = (action.sum / action.data.rate).toFixed(4)
            return {
                ...state,
                method: action.data,
                sumcrypto: sum
            }
        }
        case LOAD_PRODUCTS: {
            localStorage.setItem('products', JSON.stringify(action.data[0].products))
            localStorage.setItem('promocode', JSON.stringify(action.data[0].promocode))
            localStorage.setItem('payment', JSON.stringify(action.data[0].payment))
            let arr = action.data[0].products.slice(0, 8)
            return {
                ...state,
                products: action.data,
                loadedProducts: arr,
                showingAmount: arr.length,
                promocode: action.data.promocode,
                payment: action.data.payment
            }
        }
        case SET_PAG: {
            return {
                ...state,
                loadmore: true
            }
        }
        case PRODUCTS_LOAD: {
            let params = action.params
            let search = action.search
            let products
            let amount
            let loadmoret = true

            if (isEmptyObject(params)) {

                if (search) {
                    let lastItem = state.loadedProducts.length
                    let arr = JSON.parse(localStorage.getItem('search')).slice(lastItem, lastItem + 8).slice(0, 8)
                    let oldProducts = []
                    let newLoaded = oldProducts.concat(arr)
                    amount = newLoaded.length
                    if (JSON.parse(localStorage.getItem('search')).length != newLoaded.length && newLoaded.length != 0) {
                        loadmoret = true
                    }
                    else {
                        loadmoret = false
                    }

                    products = JSON.parse(localStorage.getItem('search')).slice(0, 8)
                    amount = JSON.parse(localStorage.getItem('search')).length

                }

                else {
                    products = JSON.parse(localStorage.getItem('products')).slice(0, 8)
                    amount = JSON.parse(localStorage.getItem('products')).length
                }
            }
            else if (params) {
                products = JSON.parse(localStorage.getItem('products')).filter(res => res.category == params.category).slice(0, 8)
                amount = JSON.parse(localStorage.getItem('products')).filter(res => res.category == params.category).length
            }

            return {
                ...state,
                loadedProducts: products,
                showingAmount: products.length,
                productsamount: amount,
                loadmore: loadmoret
            }
        }
        case SET_CURRENT: {
            localStorage.setItem('curprod', JSON.stringify(action.data))
            return {
                ...state,
                currentProduct: action.data
            }
        }
        case LOAD_MORE: {
            let params = action.params
            let arr
            let lastItem
            let oldProducts
            let newLoaded
            let amount
            let loadmoret

            if (isEmptyObject(params)) {

                if (state.search) {
                    lastItem = state.loadedProducts.length
                    arr = JSON.parse(localStorage.getItem('search')).slice(lastItem, lastItem + 8).slice(0, 8)
                    oldProducts = [...state.loadedProducts.slice(0, lastItem)]
                    newLoaded = oldProducts.concat(arr)
                    amount = newLoaded.length

                    if (JSON.parse(localStorage.getItem('search')).length != newLoaded.length) {
                        loadmoret = true
                    }
                    else {
                        loadmoret = false
                    }
                }
                else {
                    lastItem = state.loadedProducts.length
                    arr = JSON.parse(localStorage.getItem('products')).slice(lastItem, lastItem + 8)
                    oldProducts = [...state.loadedProducts.slice(0, lastItem)]
                    newLoaded = oldProducts.concat(arr)
                    amount = newLoaded.length
                    if (JSON.parse(localStorage.getItem('products')).length != newLoaded.length) {
                        loadmoret = true
                    }
                    else {
                        loadmoret = false
                    }
                }
            }
            else if (params) {
                lastItem = state.loadedProducts.length
                arr = JSON.parse(localStorage.getItem('products')).filter(res => res.category == params.category).slice(lastItem, lastItem + 8)
                oldProducts = [...state.loadedProducts.slice(0, lastItem)]
                newLoaded = oldProducts.concat(arr)
                amount = newLoaded.length
                if (JSON.parse(localStorage.getItem('products')).filter(res => res.category == params.category).length != newLoaded.length) {
                    loadmoret = true
                }
                else {
                    loadmoret = false
                }
            }
            return {
                ...state,
                loadedProducts: newLoaded,
                showingAmount: amount,
                loadmore: loadmoret
            }
        }
        case LOAD_CATEGORY: {
            let result = JSON.parse(localStorage.getItem('products')).filter(res => res.category == action.data)

            return {
                ...state,
                loadedProducts: result
            }
        }
        case ADD_TO_CART: {
            let newObjItem
            let total = 0
            state.cart.filter(res => {
                if (res.product.id == action.data.id) {
                    newObjItem = { product: res.product, qty: res.qty + action.qty }
                }
            })
            let index = state.cart.findIndex(res => res.product.id == action.data.id)
            if (index < 0) {

                localStorage.setItem('cart', JSON.stringify([...state.cart, { product: action.data, qty: action.qty }]))
                localStorage.setItem('amount', JSON.stringify([...state.cart, { product: action.data, qty: action.qty }].length))
                return {
                    ...state,
                    cart: [...state.cart, { product: action.data, qty: action.qty }],
                    cartItemsAmount: [...state.cart, { product: action.data, qty: action.qty }].length
                }
            }
            else {
                let newCart = [
                    ...state.cart.slice(0, index),
                    newObjItem,
                    ...state.cart.slice(index + 1)
                ]
                localStorage.setItem('cart', JSON.stringify(newCart))
                localStorage.setItem('amount', JSON.stringify(newCart.length))
                return {
                    ...state,
                    cart: newCart,
                    cartItemsAmount: newCart.length
                }
            }
        }
        case CHANGE_QTY: {
            let newObjItem
            state.cart.filter(res => {
                if (res.product.id == action.data.product.id) {
                    if (action.pm && action.qty > 0)
                        newObjItem = { product: res.product, qty: action.qty - 1 }
                    else if (!action.pm)
                        newObjItem = { product: res.product, qty: 1 + action.qty }
                    else if (action.qty <= 0) {
                        newObjItem = { product: res.product, qty: action.qty }
                    }
                }
            })
            let index = state.cart.findIndex(res => res.product.id == action.data.product.id)
            if (index < 0) {
                return {
                    ...state
                }
            }
            else {
                let newCart = [
                    ...state.cart.slice(0, index),
                    newObjItem,
                    ...state.cart.slice(index + 1)
                ]
                localStorage.setItem('cart', JSON.stringify(newCart))
                return {
                    ...state,
                    cart: JSON.parse(localStorage.getItem('cart'))
                }
            }
        }
        case CLEAR_CART: {
            localStorage.setItem('cart', JSON.stringify([]))
            localStorage.setItem('amount', JSON.stringify(0))
            return {
                ...state,
                cart: JSON.parse(localStorage.getItem('cart')),
                cartItemsAmount: 0
            }
        }
        case CART_TOTAL: {
            let total = state.cart.map(res => {
                return res.product.price * res.qty
            })

            let percent
            let sum = (total.map(i => total += i, total = 0).reverse()[0])
            localStorage.setItem('cartTotal', JSON.stringify(sum))
            if (state.promocode && state.promocode.length > 0 && action.data != 0) {
                let promoarr = (JSON.parse(localStorage.getItem('promocode')))
                let result = promoarr.filter(res => (res.promo.toLowerCase()) === (state.promocode.toLowerCase()))
                if (result[0]) {

                    percent = result[0].percent
                    sum = total
                    localStorage.setItem('cartTotal', JSON.stringify(sum - ((sum * percent) / 100)))
                }
                return {
                    ...state,
                    cartTotal: JSON.stringify(sum - ((sum * percent) / 100)),
                    promocodeUsage: false
                }
            }
            return {
                ...state,
                cartTotal: sum,
                promocodeUsage: false
            }
        }
        case SEARCH: {
            let result = JSON.parse(localStorage.getItem('products')).filter(res => (res.name.toLowerCase()).includes((action.data.toLowerCase())))
            localStorage.setItem('search', JSON.stringify(result))

            return {
                ...state,
                search: action.searchon
            }
        }
        case USE_PROMO: {
            let promoarr = (JSON.parse(localStorage.getItem('promocode')))
            let percent
            let result = promoarr.filter(res => (res.promo.toLowerCase()) === (action.data.toLowerCase()))
            if (result[0]) {
                percent = result[0].percent
                localStorage.setItem('cartTotal', JSON.stringify(((state.cartTotal) - ((state.cartTotal * percent) / 100))))
                return {
                    ...state,
                    cartTotal: ((state.cartTotal) - ((state.cartTotal * percent) / 100)),
                    promocodeUsage: true,
                    valid: 1,
                    promocode: action.data.toLowerCase()
                }
            }
            else {
                percent = 0
                return {
                    ...state,
                    cartTotal: ((state.cartTotal) - ((state.cartTotal * percent) / 100)),
                    valid: 2
                }
            }

        }
        case SET_VALID: {
            return {
                ...state,
                valid: 0
            }
        }
        default:
            return state;
    }
};

export default ShopReducer

export let LoadProducts = () => {
    return (dispath) => {
        productsApi.getProducts().then(res => {
            dispath(getProducts(res.map(e => {
                return {
                    products: e.products,
                    promocode: e.promocode,
                    payment: e.payment
                }
            })))
        })
    }
}