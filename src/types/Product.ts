export interface Product {
  title: any
  id: number
  description: string
  price: number
  image: string
  category: string
  rating?: Rating
}

export interface Rating {
  rate: number
  count: number
}