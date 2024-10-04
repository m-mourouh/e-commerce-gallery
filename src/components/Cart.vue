<template>
  <div class="grid gap-4 mt-10">
    <SfButton variant="tertiary" @click="emptyCart" class="emty-cart-btn">
      <span class="decoration-red-700 underline text-red-700 font-bold cursor-pointer hover:text-red-500">{{$t('emptyCart')}}</span>
    </SfButton>

    <CartItem
      v-for="item in cart?.items"
      :key="item.product?.id"
      :product="item.product"
      :quantity="item.quantity"
    />
    <div>
      <p class="text-lg font-bold">{{$t('total')}}: {{ total }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { Cart } from '../types/Cart'
import CartItem from './CartItem.vue'
import { useStore } from 'vuex';
import { formatNumber } from '@/helpers';
const store = useStore()

defineProps({
  cart: {
    type: Object as PropType<Cart>,
    required: true
  }
})

// Methods
const emptyCart = () => {
    store.dispatch('emptyCart')
}

// Computed
const total = computed(() => formatNumber(store.getters.totalPrice))
</script>
