// src/components/__tests__/NavBarTop.spec.ts

import NavBarTop from '@/components/NavBarTop.vue'
import { SfIconShoppingCart } from '@storefront-ui/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

// Mock Vuex store
const store = createStore({
  getters: {
    totalProducts: () => 3
  }
})

// Mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/HomeView.vue') },
    { path: '/cart', name: 'cart', component: () => import('@/views/CartView.vue') }
  ]
})

// Mock i18n
const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      // Add necessary translations here if needed
    }
  }
})

describe('NavBarTop Component', () => {
  it('renders correctly with action items', () => {
    const wrapper = mount(NavBarTop, {
      global: {
        plugins: [store, router, i18n]
      }
    })

    // Check if the logo is rendered
    expect(wrapper.find('.logo-img').exists()).toBe(true)

    // Check if the cart button is rendered
    const cartButton = wrapper.findComponent(SfIconShoppingCart)
    expect(cartButton.exists()).toBe(true)

    // Check if the total products badge is rendered
    const badge = wrapper.find('.bg-red-500')
    expect(badge.exists()).toBe(true)
    expect(badge.text()).toBe('3')
  })

  it('emits search event and navigates correctly', async () => {
    const wrapper = mount(NavBarTop, {
      global: {
        plugins: [store, router, i18n]
      }
    })

    // Mocking router.push
    const push = vi.spyOn(router, 'push')

    // Trigger search
    const searchKeyword = 'test'
    await wrapper.findComponent({ name: 'SearchBar' }).vm.$emit('search', searchKeyword)

    // Check if router.push was called with the correct arguments
    expect(push).toHaveBeenCalledWith({ name: 'home', query: { search: searchKeyword } })
  })
})
