<template>
  <button
    class="py-2.5 w-full rounded-full font-bold"
    :class="props.isColored ? 'bg-green-950 text-white border-green-950 border' : 'text-green-950 border-green-950 border'"
  >
    {{ props.buttonText }}
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  buttonText: string,
  isColored: boolean
}>()
</script>

<style lang="scss" scoped>
</style>
