<template>
  <div
    class="flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4"
  >
    <div class="relative overflow-hidden rounded-md w-[100px] sm:w-[176px]">
      <SfLink href="#">
        <img
          class="w-full h-auto border rounded-md border-neutral-200"
            :src="product.image"
          alt="Smartwatch Fitness Tracker"
          width="176"
          height="176"
        />
      </SfLink>
    </div>
    <div class="flex flex-col pl-4 min-w-[180px] flex-1">
      <SfLink
        href="#"
        variant="secondary"
        class="no-underline typography-text-sm sm:typography-text-lg"
      >
        {{ product.title }}
      </SfLink>
      <div class="my-2 sm:mb-0">
        <ul class="font-normal leading-5 typography-text-xs sm:typography-text-sm text-neutral-700">
          <li class="mb-2">
            <span class="mr-1">{{ $t('category') }}:</span>
            <span class="font-medium"> {{ product.category }}</span>
          </li>
        </ul>
      </div>
      <div class="items-center sm:mt-auto sm:flex">
        <span class="font-bold sm:ml-auto sm:order-1 typography-text-sm sm:typography-text-lg">
          {{ $t('currency') }} {{ formatNumber(product.price * count)}}
        </span>
        <div class="flex items-center justify-between mt-4 sm:mt-0">
          <div class="flex border border-neutral-300 rounded-md">
            <SfButton
              variant="tertiary"
              :disabled="count <= min"
              square
              class="rounded-r-none"
              :aria-controls="inputId"
              aria-label="Decrease value"
              @click="dec()"
            >
              <SfIconRemove />
            </SfButton>
            <input
              :id="inputId"
              v-model="count"
              type="number"
              class="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
              :min="min"
            />
            <SfButton
              variant="tertiary"
              square
              class="rounded-l-none"
              :aria-controls="inputId"
              aria-label="Increase value"
              @click="inc()"
            >
              <SfIconAdd />
            </SfButton>
          </div>
          <button
            aria-label="Remove"
            type="button"
            class="text-neutral-500 typography-text-xs font-light ml-auto flex items-center px-3 py-1.5"
            @click="removeProduct"
          >
            <SfIconDelete />
            <span class="hidden ml-1.5 sm:block">{{ $t('remove') }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { QuantityActions } from '../types/Cart';
import type { Product } from '../types/Product';
import {
  SfButton,
  SfIconAdd,
  SfIconDelete,
  SfIconRemove,
  SfLink,
  useId
} from '@storefront-ui/vue'
import { useCounter } from '@vueuse/core'
import {ref, watch, type PropType } from 'vue'
import { useStore } from 'vuex';
import { formatNumber } from '@/helpers';

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  } 
})

const store = useStore()

const inputId = useId()
const min = ref<number>(1)
const { count, inc, dec } = useCounter(props.quantity, { min: min.value })

// watchers
watch(count, (newCount, oldCount) => {
  if(oldCount < newCount)
  store.dispatch('updateProductQuantity', { productId: props.product.id, quantity: newCount, action: QuantityActions.INCREMENT })
  else
  store.dispatch('updateProductQuantity', { productId: props.product.id, quantity: newCount, action: QuantityActions.DECREMENT })
})

// Methods
const removeProduct = async () => {
  store.dispatch('removeProductFromCart', { productId: props.product.id });
  await store.dispatch('fetchCart') //Update cart
}

</script>
