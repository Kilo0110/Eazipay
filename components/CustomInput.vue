<template>
  <div class="input-container my-5 relative text-sm">
    <label
      :for="props.name"
      class="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-2 transition-transform"
      :class="isActive ? '-translate-y-8' : ''"
    >{{ props.label }}</label>
    <input
      @focus="isActive = true"
      @blur="isActive = false"
      :type="props.type"
      :name="props.name"
      class="border-2 border-gray-300 rounded-xl px-3 py-2 w-full"
    >
  </div>
</template>

<script setup lang="ts">
const isActive = ref(false)

const props = defineProps<{
  name: string,
  label: string,
  type: string
}>()
</script>

<style lang="scss" scoped>
input {
  outline: none;
}
</style>
