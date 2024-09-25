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
  </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { Cart } from '../types/Cart'
import CartItem from './CartItem.vue'
import { useStore } from 'vuex';

defineProps({
  cart: {
    type: Object as PropType<Cart>,
    required: true
  }
})

const store = useStore()

// Methods
const emptyCart = () => {
    store.dispatch('emptyCart')
}
</script>
