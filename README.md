# 🛍️ Mini E-commerce Product Gallery

![Version](https://img.shields.io/badge/version-2.1.1-brightgreen)
![Framework](https://img.shields.io/badge/framework-Vue.js-green)

## 📚 Overview

This project is a simple frontend application for an e-commerce product gallery using the Fake Store API. It features a persistent shopping cart that retains its state between page refreshes.

## 🌐 Live Demo

[View Live Demo](https://your-live-demo-link.com) (add your live demo link here)

## 🛠️ Features 

- **Product List**: Displays products with images, names, and prices.
- **Persistent Cart**: Saves cart state in local storage to persist after page refreshes.
- **Responsive Design**: Optimized for both desktop and mobile screens.
- **Product Search**: Filter products by name.
- **Simple Animation**: Subtle animation when adding items to the cart.

## 📸 Visual Preview

### 🏠 Home Page
![alt text](image-4.png)

### 🛒 Cart Page
#### Cart with products
![alt text](image-7.png)
#### Empty Cart
![alt text](image-6.png)

### 🔍 Product Search
#### Products Found
![alt text](image-5.png)
#### No Product Found
![alt text](image-8.png)
### Page Not Found
![alt text](image-9.png)
## 📋 User Stories

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
  
![alt text](image.png)
## Architecture
- <b>Vue.js</b>: Utilized for building the user interface.
- <b>Local Storage</b>: Used for persisting cart data.
- <b>Fake Store API</b>: Provides product data.

## Resources
- [Fake Store API Documentation](https://fakestoreapi.com/docs)
- [Vue.js Documentation](https://vuejs.org/guide/introduction)
- [Vitest Documentation](https://vitest.dev)
