import type { Cart } from '@/types/Cart'
import type { Product } from '@/types/Product'
import axios from 'axios'
import { createStore } from 'vuex'
import { QuantityActions } from '@/types/Cart'

interface State {
  products: Product[]
  cart: Cart | null
  totalProducts: number
}

export const store = createStore<State>({
  state() {
    return {
      products: [],
      cart: null,
      totalProducts: 0
    }
  },
  mutations: {
    setTotalProducts(state, { quantity, action }) {
      if (action === QuantityActions.INCREMENT) {
        state.totalProducts += 1
      } else if (action === QuantityActions.DECREMENT) {
        state.totalProducts -= 1
      } else {
        state.totalProducts = quantity
      }
    },
    setProducts(state, products) {
      state.products = products
    },
    setCart(state, items) {
      state.cart = { items }
    },
    removeProductFromCart(state, productId) {
        if (state.cart) {
          state.cart.items = state.cart.items.filter((item) => item.product.id !== productId)
        }
    },
  },
  actions: {
    async getProducts({ commit }) {
      await axios
        .get('/products')
        .then((res) => {
          const products: Product[] = res.data
          commit('setProducts', { products })
        })
        .catch((err) => {
          console.error(err)
        })
    },
    addProductToCart({ commit }, productId) {
      const cart = localStorage.getItem('cart')
      if (cart) {
        const cartItems = JSON.parse(cart)
        const product = cartItems.find((item: any) => item.productId === productId)
        if (product) {
          product.quantity++
        } else {
          cartItems.push({ productId, quantity: 1 })
        }
        localStorage.setItem('cart', JSON.stringify(cartItems))
        const newCartQty = cartItems.reduce((acc: number, item: any) => acc + item.quantity, 0)
        commit('setTotalProducts', { quantity: newCartQty, action: QuantityActions.SET })
      } else {
        localStorage.setItem('cart', JSON.stringify([{ productId: productId, quantity: 1 }]))
        commit('setTotalProducts', { quantity: 1, action: QuantityActions.INCREMENT })
      }
    },
    fetchCart({ commit }) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      if (cart && cart.length > 0) {
        const cartItemsPromises = cart.map(async (item: any) => {
          try {
            const res = await axios.get(`/products/${item.productId}`)
            const product = res.data
            return { product, quantity: item.quantity }
          } catch (err) {
            console.error(err)
            return null
          }
        })
        Promise.all(cartItemsPromises).then((cartItems) => {
          const validCartItems = cartItems.filter((item) => item !== null)
          commit('setCart', validCartItems)
            const newCartQty = validCartItems.reduce((acc: number, item: any) => acc + item.quantity, 0)
            commit("setTotalProducts", { quantity: newCartQty, action: QuantityActions.SET})
            
        })
      }
    },
    updateProductQuantity({ commit }, { productId, quantity, action }) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const product = cart.find((item: any) => item.productId === productId)
      if (product) {
        product.quantity = quantity
        localStorage.setItem('cart', JSON.stringify(cart))
        commit('setTotalProducts', { quantity: 1, action })
      }
    },
    removeProductFromCart({ commit }, { productId }) {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]')
      const updatedCart = cart.filter((item: any) => item.productId !== productId)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
      const newCartQty = updatedCart.reduce((acc: number, item: any) => acc + item.quantity, 0)
      commit('setTotalProducts', { quantity: newCartQty, action: QuantityActions.SET })
      commit('removeProductFromCart', productId)
    }
  },
  getters: {
    allProducts: (state) => state.products,
    cart: (state) => state.cart,
    totalProducts: (state) => state.totalProducts,
  }
})
