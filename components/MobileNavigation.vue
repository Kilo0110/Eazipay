<template>
  <footer class="fixed bottom-0 w-full">
    <nav class="main-nav flex w-full justify-around border-2 py-5 rounded-ss-3xl rounded-se-3xl backdrop-blur-[6px]">
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="teenyicons:home-solid"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="heroicons:user-plus"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="mdi:paper-text-outline"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="solar:hand-money-linear"
        />
      </NuxtLink>
      <NuxtLink
        class=""
        to="/"
      >
        <Icon
          size="25"
          name="icon-park-outline:more-app"
        />
      </NuxtLink>
    </nav>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.main-nav {
  background: rgba(#fff, 0.7);
}
</style>
