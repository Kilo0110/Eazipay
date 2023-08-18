<template>
  <div>
    <input
      id="file-input"
      class="hide-file-input absolute top-1/2 -translate-y-1/2 w-[1px] h-[1px] overflow-hidden whitespace-nowrap border-0"
      type="file"
      accept="image/*"
      @change="onFileChange($event)"
    />
    <label
      class="file-label bg-gray-200 border rounded-lg p-2 cursor-pointer text-green-950 text-sm border-green-950"
      for="file-input"
    > Upload a file </label>
  </div>
</template>
<script setup lang="ts">
const emits = defineEmits()

const onFileChange = (event: Event) => {
  const fileInput = event?.target as HTMLInputElement
  const file = fileInput.files && fileInput.files[0]
  const reader = new FileReader()
  if (file) {
    reader.readAsDataURL(file)
    reader.onload = () => {
      // Set a new property on the captured `file` and set it to the converted base64 image
      // @ts-ignore
      file.previewBase64 = reader.result
      // Emit the file with the new previewBase64 property on it
      emits('file-updated', file)
    }
    reader.onerror = (error) => {
      console.log('Error ', error)
    }
  }
}
</script>
<style scoped>
.hide-file-input {
  clip: rect(0, 0, 0, 0);
}

input[type='file']:focus + .file-label {
  box-shadow: 0 0 3px 1px;
  @apply shadow-green-950;
}
</style>
