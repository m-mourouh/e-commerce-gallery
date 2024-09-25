import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    addToCart: 'Add to cart',
    productGallery: 'Our products',
    currency: 'USD',
    brandName: "Store",
    category: 'Category',
    cart: 'Cart',
    remove: 'Remove',
    emptyCart: 'Empty cart',
    emptyCartMessage: 'Your cart is empty',
    continueShopping: 'Continue shopping',
    noProductFound: 'No product found',
    pageNotFound: 'Page not found',
  },
  fr: {
    addToCart: 'Ajouter au panier',
    productGallery: 'Nos produits',
    currency: 'EUR',
    brandName: "Store",
    category: 'Catégorie',
    cart: 'Panier',
    remove: 'Supprimer',
    emptyCart: 'Vider le panier',
    emptyCartMessage: 'Votre panier est vide',
    continueShopping: 'Continuer vos achats',
    noProductFound: 'Aucun produit trouvé',
    pageNotFound: 'Page non trouvée',
  },

}

const i18n = createI18n({
  locale: 'en',
  messages
})

export default i18n
