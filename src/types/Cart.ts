import type { Product } from "./Product"

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  id?: number
  userId?: number
  date?: string
  items: CartItem[]
}

export enum QuantityActions {
  INCREMENT = 'INCREMENT',
  DECREMENT = 'DECREMENT',
  SET = 'SET'
}