<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px] relative">
    <div class="relative p-4">
      <SfLink href="#" class="block">
        <img
          :src="product.image"
          :alt="product.title"
          class="block object-contain h-auto aspect-square max-w-full rounded-lg"
          width="300"
          height="300"
        />
      </SfLink>
    </div>
    <div class="p-4 border-t border-neutral-200">
      <SfLink href="#" variant="secondary" class="no-underline"> {{ product.title }} </SfLink>
      <div class="flex items-center pt-1">
        <SfRating size="xs" :value="product.rating ? product.rating.rate : 0" :max="5" />

        <SfLink href="#" variant="secondary" class="pl-1 no-underline">
          <SfCounter size="xs">{{ product.rating ? product.rating.count : 0 }}</SfCounter>
        </SfLink>
      </div>
      <p class="block py-2 font-normal leading-5 typography-text-sm text-neutral-700">
        {{ product.category }}
      </p>
      <span class="block pb-2 font-bold typography-text-lg mb-5">{{ $t('currency') }} {{ product.price }}</span>
      <SfButton size="sm" class="rounded-sm absolute bottom-2 left-2 add-product-btn" @click="addProduct">
        <template #prefix>
          <SfIconShoppingCart size="sm" />
        </template>
        {{ $t('addToCart') }}
        <SfLoaderCircular v-if="loading" size="xs" class="ml-2" />
      </SfButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  SfRating,
  SfCounter,
  SfLink,
  SfButton,
  SfIconShoppingCart,
  SfLoaderCircular
} from '@storefront-ui/vue'
import type { Product } from "../types/Product";
import { ref, type PropType } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const loading = ref<boolean>(false);

const props = defineProps({
  product: {
    type: Object as PropType<Product> ,
    required: true
  }
})

//Methods
const addProduct = () => {
  loading.value = true;
  store.dispatch('addProductToCart', props.product.id);

  // Simulate loading
  setTimeout(() => {
    loading.value = false;
  }, 400);
}
</script>
