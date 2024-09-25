<template>
    <div class="flex items-center flex-col">
        <SfIconShoppingCart size="xl" />
        <h1 class="text-2xl font-bold text-center mt-4">{{ $t('emptyCartMessage') }}</h1>
        <SfButton size="sm" class="rounded-sm mt-10">
        <router-link to="/" class="continue-shopping-btn">{{ $t('continueShopping') }}</router-link>
      </SfButton>
    </div>
</template>

<script setup>
import {
  SfButton,
  SfIconShoppingCart,
} from '@storefront-ui/vue'
import { RouterLink } from 'vue-router';
</script>