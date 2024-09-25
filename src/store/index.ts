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

  },
  actions: {},
  getters: {
    allProducts: (state) => state.products,
    cart: (state) => state.cart,
    totalProducts: (state) => state.totalProducts,
  }
})
