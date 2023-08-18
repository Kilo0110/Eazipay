<template>
  <div class="flex gap-5">
    <img
      v-if="filePreview"
      :src="filePreview"
      alt="fileName"
      class="aspect-square object-cover max-w-[150px] border-1 border-green-950 rounded-xl shadow-xl"
    >
    <slot name="file-input-slot"></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  filePreview: string,
}>()
</script>

<style lang="scss" scoped>
</style>
