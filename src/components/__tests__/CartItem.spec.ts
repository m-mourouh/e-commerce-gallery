import CartItem from '@/components/CartItem.vue'
import { QuantityActions } from '@/types/Cart'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createStore } from 'vuex'
import { createProduct } from './factories/productFactory'

// Mocking Vuex store
const store = createStore({
  state: {
    cart: []
  },
  actions: {
    updateProductQuantity: vi.fn(),
    removeProductFromCart: vi.fn(),
    fetchCart: vi.fn()
  }
})

// Mocking Vue I18n
const i18n = {
  install: (app: any) => {
    app.config.globalProperties.$t = (key: string) => key
  }
}

describe('CartItem Component', () => {
  it('renders the product details correctly', () => {
    const product = createProduct()

    const wrapper = mount(CartItem, {
      props: { product, quantity: 2 },
      global: {
        plugins: [store, i18n]
      }
    })

    // Check if product title is rendered
    expect(wrapper.text()).toContain(product.title)

    // Check if product price is rendered
    expect(wrapper.text()).toContain(product.price)

    // Check if product category is rendered
    expect(wrapper.text()).toContain(product.category)

    // Check if product image is rendered with the correct src
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(product.image)
  })

  it('increments and decrements product quantity correctly', async () => {
    const product = createProduct()

    const dispatch = vi.spyOn(store, 'dispatch')
    const wrapper = mount(CartItem, {
      props: { product, quantity: 2 },
      global: {
        plugins: [store, i18n]
      }
    })

    const incrementButton = wrapper.find('[aria-label="Increase value"]')
    const decrementButton = wrapper.find('[aria-label="Decrease value"]')

    // Simulate increment
    await incrementButton.trigger('click')
    expect(dispatch).toHaveBeenCalledWith('updateProductQuantity', {
      productId: product.id,
      quantity: 3,
      action: QuantityActions.INCREMENT
    })

    // Simulate decrement
    await decrementButton.trigger('click')
    expect(dispatch).toHaveBeenCalledWith('updateProductQuantity', {
      productId: product.id,
      quantity: 2,
      action: QuantityActions.DECREMENT
    })
  })

  it('removes the product from the cart when "Remove" button is clicked', async () => {
    const product = createProduct()
    const dispatch = vi.spyOn(store, 'dispatch')
    const wrapper = mount(CartItem, {
      props: { product, quantity: 1 },
      global: {
        plugins: [store, i18n]
      }
    })

    const removeButton = wrapper.find('[aria-label="Remove"]')

    // Simulate product removal
    await removeButton.trigger('click')

    expect(dispatch).toHaveBeenCalledWith('removeProductFromCart', { productId: product.id })
    expect(dispatch).toHaveBeenCalledWith('fetchCart')
  })
})
