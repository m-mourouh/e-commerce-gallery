import Header from '@/components/Header.vue'
import NavbarTop from '@/components/NavbarTop.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

// Mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [] 
})

// Mock Vuex store
const store = createStore({});
  
describe('Header Component', () => {
  it('renders NavbarTop component', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router, store]
      }
    })

    // Check if NavbarTop is rendered
    const navbarTop = wrapper.findComponent(NavbarTop);
    expect(navbarTop.exists()).toBe(true)
  })
})
