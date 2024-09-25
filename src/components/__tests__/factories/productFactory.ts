import type { Product } from '../../../types/Product';

export const createProduct = (overrides: Partial<Product> = {}): Product => {
  return {
    id: 1,
    title: 'Sample Product',
    description: 'Sample Description',
    image: 'https://via.placeholder.com/300',
    rating: { rate: 4.5, count: 10 },
    category: 'Sample Category',
    price: 29.99,
    ...overrides,
  };
};
