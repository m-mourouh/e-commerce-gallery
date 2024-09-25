<template>
    <div class="mt-24  flex items-center justify-center flex-col">
      <img src="@/assets/images/404.svg" alt="404 Not Found" class="w-full max-w-xs mx-auto" />
      <p class="text-2xl font-semibold mt-10 mb-6 text-gray-700 text-center">
        {{ $t('pageNotFound') }}
      </p>
      <router-link to="/">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center"
        >
          <span>{{ $t('continueShopping') }}</span>
        </button>
      </router-link>
    </div>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<style scoped>
  img {
    max-width: 500px;
  }

</style>
