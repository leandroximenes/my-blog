<script setup>
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

defineProps({
  commentaries: Array
})
</script>

<template>
  <div class="m-4 p-2 border-2 border-gray-400 space-y-4 rounded">
    <h2 class="text-xl font-bold">
      {{ commentaries.length }}
      {{ commentaries.length == 1 ? 'Comment' : 'Comments' }}
    </h2>
    <div
      class="p-2 flex flex-col rounded shadow-lg border"
      v-for="commentary in commentaries"
      :key="commentary.id"
    >
      <span class="text-gray-400 flex space-x-4 items-center">
        <img :src="commentary.avatar" class="h-12 rounded-lg" alt="" srcset="" />
        <span>
          {{ commentary.user }}
        </span>
      </span>

      <!-- commentary in markdown -->
      <div class="border-2 border-gray-200">
        <MdPreview :modelValue="commentary.content" />
      </div>
    </div>
  </div>
</template>

<style>
.md-editor-preview p {
  font-size: 14px;
}
</style>
