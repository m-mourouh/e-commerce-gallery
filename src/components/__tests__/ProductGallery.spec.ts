import ProductGallery from '@/components/ProductGallery.vue';
import type { Product } from '@/types/Product';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { createProduct } from './factories/productFactory'; // Adjust the path as necessary
import { createStore } from 'vuex';


// Mocking Vue I18n
const i18n = {
    install: (app: any) => {
      app.config.globalProperties.$t = (key: string) => key
    }
  }

// Mocking Vuex store
const store = createStore({})
describe('ProductGallery Component', () => {
  it('renders the correct number of ProductCard components', () => {
    const products: Product[] = [];
    // Create 4 products
    [1, 2, 3, 4].forEach(id => {
      products.push(createProduct({ id, title: `Product ${id}` }));
    });

    const wrapper = mount(ProductGallery, {
      props: { products },
      global: {
        plugins: [i18n, store]
      }
    });

    // Check the number of ProductCard components rendered
    const productCards = wrapper.findAllComponents({ name: 'ProductCard' });
    expect(productCards.length).toBe(products.length);

    // Check if each ProductCard has the correct product prop
    productCards.forEach((card, index) => {
      expect(card.props().product).toEqual(products[index]);
    });
  });

  it('renders correctly with no products', () => {
    const wrapper = mount(ProductGallery, {
      props: { products: [] },
    });

    // Check that no ProductCard components are rendered
    const productCards = wrapper.findAllComponents({ name: 'ProductCard' });
    expect(productCards.length).toBe(0);
  });
});
