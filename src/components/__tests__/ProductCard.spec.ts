import ProductCard from '@/components/ProductCard.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createStore } from 'vuex'
import { createProduct } from './factories/productFactory'

// Mocking Vue I18n
const i18n = {
  install: (app: any) => {
    app.config.globalProperties.$t = (key: string) => key
  }
}

// Mocking Vuex store
const store = createStore({
  state: {
    cart: []
  },
  actions: {
    addProductToCart: vi.fn()
  }
})

describe('ProductCard Componenet', () => {
  it('renders the product details correctly', () => {
    const product = createProduct()
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        plugins: [i18n, store]
      }
    })

    // Check if product title is rendered
    expect(wrapper.text()).toContain(product.title)

    // Check if product price is rendered
    expect(wrapper.text()).toContain('29.99')

    // Check if product category is rendered
    expect(wrapper.text()).toContain(product.category)

    // Check if rating component exists
    expect(wrapper.findComponent({ name: 'SfRating' }).exists()).toBe(true)

    // Check if image is rendered with correct src
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(product.image)
  })

  it('adds product to cart when "Add to Cart" button is clicked', async () => {
    const product = createProduct()
    const dispatch = vi.spyOn(store, 'dispatch')
    const wrapper = mount(ProductCard, {
      props: { product },
      global: {
        plugins: [i18n, store]
      }
    })

    const addButton = wrapper.find('.add-product-btn')
    expect(addButton.exists()).toBe(true)

    // Simulate button click
    await addButton.trigger('click')

    // Check if loading state is shown after clicking the button
    expect(wrapper.findComponent({ name: 'SfLoaderCircular' }).exists()).toBe(true)

    // Check if the 'addProductToCart' action was called with the correct product ID
    expect(dispatch).toHaveBeenCalledWith('addProductToCart', product.id)
  })
})
