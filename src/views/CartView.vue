<template>
  <div class="container px-2 mx-auto my-10 md:my-24 md:px-0">
    <h1 class="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl mb-4">{{ $t('cart') }}</h1>
    <hr>
    <div v-if="cart?.items.length">
        <Cart :cart="toRaw(cart)" />
    </div>
    <div v-else  class="mt-24">
        <EmptyCart />
    </div>
</div>
</template>

<script lang="ts" setup>
import { computed, onMounted, toRaw } from 'vue';
import { useStore } from 'vuex';
import Cart from '../components/Cart.vue';
import EmptyCart from '../components/EmptyCart.vue';

const store = useStore()
const cart = computed(() => store.getters.cart)

//Life cycle hooks
onMounted(async () => {
 await store.dispatch('fetchCart')
})
</script>
