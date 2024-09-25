# 🛍️ Mini E-commerce Product Gallery

![Version](https://img.shields.io/badge/version-2.1.1-brightgreen)
![Framework](https://img.shields.io/badge/framework-Vue.js-green)

## Overview

This project is a simple front-end application for an e-commerce product gallery using the Fake Store API. It features a persistent shopping cart that retains its state between page refreshes.

## App Demo

https://github.com/user-attachments/assets/ee6bd5d8-e8ca-4237-8608-f95bf5a73024


## Features 

- **Product List**: Displays products with images, names, and prices.
- **Persistent Cart**: Saves cart state in local storage to persist after page refreshes.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Product Search**: Filter products by name.
- **Simple Animation**: Subtle animation when adding items to the cart.

## Visual Preview

### Home Page
![image-4](https://github.com/user-attachments/assets/7ebb635f-8e27-4380-949b-a1e20bbcfaed)


### Cart Page
#### Cart with products
![image-7](https://github.com/user-attachments/assets/f9bc8157-c154-4872-82ea-a4a98879a658)

#### Empty Cart
![image-6](https://github.com/user-attachments/assets/17054b74-4c00-4b1e-93eb-3a1a83da3f3f)


### Product Search

#### Products Found
![image-5](https://github.com/user-attachments/assets/158ab206-a567-4cb2-b28c-c879de72de16)

#### No Product Found
![image-8](https://github.com/user-attachments/assets/5fbb1363-0c79-4cab-9179-251f02b1d5af)

### Page Not Found
![image-9](https://github.com/user-attachments/assets/b32a2135-e841-462d-abd2-d1b75522b1c4)

## User Stories

### User Story 1

> As a customer, I want to view a list of products so that I can choose what to buy.

- Fetches and displays a list of products from the [Fake Store API](https://fakestoreapi.com/products).
- Each product includes an image, name, price, and "Add to Cart" button.

### User Story 2: Persistent Cart

> As a customer, I want my shopping cart to persist when I refresh the page, so that I don't lose my selections accidentally.

- Implements a shopping cart using local storage to save the cart's state.
- Allows adding, viewing, and removing products from the cart.
- Implemented a shopping cart that saves its state in local storage.

## Setup Instructions


### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/m-mourouh/e-commerce-gallery.git
   cd your-repo-name
2. Install dependencies:
      ```bash
   yarn
3. Start the development server:
   ```bash
   yarn dev

## Unit Tests
Unit tests are implemented using Vitest. To run the tests, use the following command:
```bash 
yarn vitest -ui
```
### Tested Components
- <b>Cart</b>: Includes tests for adding and removing items.
- <b>CartItem</b>: Verifies correct rendering and functionality.
- <b>EmptyCart</b>: Ensures correct display when the cart is empty.
- <b>Header</b>: Tests rendering and interactions.
- <b>NavbarTop</b>: Validates navigation functionality.
- <b>ProductCard</b>: Ensures product details render correctly and items are added to the cart.
- <b>ProductGallery</b>: Tests product fetching and display.
- <b>SearchBar</b>: Verifies search functionality.
- 
## Unit Tests Demo

https://github.com/user-attachments/assets/20f6c7da-ca43-42d2-a161-753c1eddfd72


## Architecture
- <b>Vue.js</b>: Utilized for building the user interface.
- <b>Local Storage</b>: Used for persisting cart data.
- <b>Fake Store API</b>: Provides product data.

## Resources
- [Fake Store API Documentation](https://fakestoreapi.com/docs)
- [Vue.js Documentation](https://vuejs.org/guide/introduction)
- [Vitest Documentation](https://vitest.dev)
