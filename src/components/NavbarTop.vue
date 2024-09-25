<template>
  <header
    class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200"
  >
    <div
      class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full"
    >
      <router-link
        to="/"
        href="#"
        aria-label="SF Homepage"
        class="inline-block mr-24 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
      >
        <picture>
          <source srcset="../assets/images/logo.png" />
          <img src="../assets/images/logo.png" alt="Store Logo" class="w-[100px] logo-img" />
        </picture>
      </router-link>
      <SearchBar @search="search" />
      <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
        <div class="flex flex-row flex-nowrap">
          <SfButton
            v-for="actionItem in actionItems"
            :key="actionItem.ariaLabel"
            class="relative mr-2 -ml-0.5 rounded-md text-primary-700 hover:bg-primary-100"
            :aria-label="actionItem.ariaLabel"
            variant="tertiary"
            square
          >
            <router-link :to="actionItem.routeName">
              <Component :is="actionItem.icon" />
              <SfBadge
                :content="totalProducts"
                class="bg-red-500 text-neutral-900"
              />
              <span class="hidden xl:inline-flex whitespace-nowrap">{{ actionItem.label }}</span>
            </router-link>
          </SfButton>
        </div>
      </nav>
    </div>
  </header>
</template>
<script lang="ts" setup>
import SearchBar from './SearchBar.vue'
import { SfButton, SfIconShoppingCart, SfBadge } from '@storefront-ui/vue'
import { computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useStore } from 'vuex';
const actionItems = [
  {
    icon: SfIconShoppingCart,
    ariaLabel: 'Cart',
    role: 'button',
    label: '',
    routeName: 'cart'
  }
]
const store = useStore()
const router = useRouter()

const totalProducts =  computed(() => store.getters.totalProducts)


const search = (keyword: string) => {
    router.push({name: 'home', query: {search: keyword.trim()}})
}

</script>
