<template>
  <main>
    <div class="container px-2 mx-auto my-5 md:my-24 md:px-0">
    <h1 class="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-4">{{ $t('productGallery') }}</h1>
    <hr>
    <div v-if="products.length">
      <ProductGallery :products="products" />
    </div>
    <div class="flex items-center flex-col" v-else>
        <p class="text-body text-center mt-24">{{ $t('noProductFound') }}</p>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
import ProductGallery from '../components/ProductGallery.vue';
import { computed, onMounted, watch } from 'vue'
import { ref } from 'vue'
import { useStore  } from 'vuex'
import { useRoute } from 'vue-router'
import type { Product } from '../types/Product';

const store = useStore()
const route = useRoute()
const products = ref<Product[]>([])
const filteredProducts = ref<Product[]>([])

//computed properties
const allProducts  = computed(() => store.getters.allProducts)
const searchQuery = computed(() => route.query.search || '')

// methods
const filterProducts = () => {
  const { products: productData } = allProducts.value
  if (searchQuery.value) {
    filteredProducts.value = productData.filter((product: Product) =>
      product.title.toLowerCase().includes(searchQuery.value.toString().toLowerCase())
    )
    products.value = filteredProducts.value
  } else {
    products.value = productData
  }
}

// watchers
watch([allProducts, searchQuery], filterProducts)

//life cycle hooks
onMounted(async () => {
  await store.dispatch('getProducts')
  await store.dispatch('fetchCart')
  const { products: productData } = allProducts.value
  products.value = productData
  filterProducts()
})

</script>
