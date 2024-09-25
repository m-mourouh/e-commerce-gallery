import { mount } from '@vue/test-utils';
import EmptyCart from '@/components/EmptyCart.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createI18n } from 'vue-i18n';
import { describe, it, expect } from 'vitest';
// Mocking router
const router = createRouter({
  history: createWebHistory(),
  routes: [],
});

// Mocking i18n
const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      emptyCartMessage: 'Your cart is empty.',
      continueShopping: 'Continue Shopping',
    },
  },
});

describe('EmptyCart Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(EmptyCart, {
      global: {
        plugins: [router, i18n],
      },
    });

    // Check if the shopping cart icon is rendered
    expect(wrapper.findComponent({ name: 'SfIconShoppingCart' }).exists()).toBe(true);
    
    // Check if the empty cart message is rendered
    expect(wrapper.text()).toContain('Your cart is empty.');

    // Check if the continue shopping button is rendered
    const continueShoppingButton = wrapper.find('.continue-shopping-btn');
    expect(continueShoppingButton.exists()).toBe(true);
    expect(continueShoppingButton.text()).toBe('Continue Shopping');

    // Check if the button navigates to the correct route
    expect(continueShoppingButton.attributes('href')).toBe('/');
  });
});
