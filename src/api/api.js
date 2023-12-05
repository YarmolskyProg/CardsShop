import axios from 'axios'
let api = 'https://63c302468bb1ca34755c0cf9.mockapi.io/products'
let instance = axios.create({
    baseURL: api
})

export let productsApi = {
    getProducts() {
        return instance.get().then(res => res.data)
    }
}   