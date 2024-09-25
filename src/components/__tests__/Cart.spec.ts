import { mount } from '@vue/test-utils';
import Cart from '@/components/Cart.vue'; 
import CartItem from '@/components/CartItem.vue'; 
import { createStore } from 'vuex';
import { describe, it, expect, vi } from 'vitest';
import { createProduct } from './factories/productFactory';

// Mock Vuex store
const store = createStore({
  actions: {
    emptyCart: vi.fn(),
  },
});

// Mocking Vue I18n
const i18n = {
    install: (app: any) => {
      app.config.globalProperties.$t = (key: string) => key
    }
}

describe('Cart Component', () => {
  it('renders correctly and displays cart items', () => {
    // Sample cart data using the product factory
    const cart = {
      items: [
        { product: createProduct({ id: 1, title: 'Product 1' }), quantity: 2 },
        { product: createProduct({ id: 2, title: 'Product 2' }), quantity: 1 },
      ],
    };

    const wrapper = mount(Cart, {
      props: { cart },
      global: {
        plugins: [store, i18n],
      },
    });

    // Check if the CartItem components are rendered
    const cartItems = wrapper.findAllComponents(CartItem);
    expect(cartItems.length).toBe(cart.items.length);
    
    // Check if each CartItem receives the correct props
    expect(cartItems[0].props('product')).toEqual(cart.items[0].product);
    expect(cartItems[0].props('quantity')).toBe(cart.items[0].quantity);
    
    expect(cartItems[1].props('product')).toEqual(cart.items[1].product);
    expect(cartItems[1].props('quantity')).toBe(cart.items[1].quantity);
  });

  it('dispatches emptyCart action when empty cart button is clicked', async () => {
    const dispatch = vi.spyOn(store, 'dispatch');
    const wrapper = mount(Cart, {
      props: { cart: { items: [] } },
      global: {
        plugins: [store, i18n],
      },
    });

    // Trigger empty cart button click
    const emptyCartButton = wrapper.find('.emty-cart-btn');
    await emptyCartButton.trigger('click');

    // Check if the emptyCart action was called
    expect(dispatch).toHaveBeenCalledWith('emptyCart');
  });
});
