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
    }
  },
  actions: {
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
    }
  },
  getters: {
    allProducts: (state) => state.products,
    cart: (state) => state.cart,
    totalProducts: (state) => state.totalProducts,
  }
})
