<template>
  <form
    role="search"
    class="flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0"
    @submit.prevent
  >
    <SfInput
      v-model="inputValue"
      type="search"
      class="[&::-webkit-search-cancel-button]:appearance-none"
      placeholder="Search"
      wrapper-class="flex-1 h-10 pr-0"
      size="base"
      @input="$emit('search', inputValue)"
    >
      <template #suffix>
        <span class="flex items-center">
          <SfButton
            variant="tertiary"
            square
            aria-label="search"
            type="submit"
            class="rounded-l-none hover:bg-transparent active:bg-transparent"
          >
            <SfIconSearch />
          </SfButton>
        </span>
      </template>
    </SfInput>
  </form>
</template>

<script setup lang="ts">
import { SfButton, SfIconSearch, SfInput } from '@storefront-ui/vue'
import { ref } from 'vue'

const inputValue = ref<string>('')
</script>
