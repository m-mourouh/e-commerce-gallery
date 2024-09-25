<template>
    <div class="grid grid-cols-2  md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
      <ProductCard v-for="product in products" :key="product?.id" :product="product" />
    </div>
</template>

<script setup lang="ts">
import ProductCard from './ProductCard.vue';
import type { Product } from '../types/Product';
import { type PropType } from 'vue';

defineProps({
  products: {
    type: Array as PropType<Product[]>,
    required: true
  }
});

</script>
