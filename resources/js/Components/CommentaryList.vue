<script setup>
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

defineProps({
  commentaries: Array
})
</script>

<template>
  <div class="m-4 p-2 border border-gray-400 space-y-4">
    <h2 class="text-xl font-bold">
      {{ commentaries.length }}
      {{ commentaries.length == 1 ? 'Comment' : 'Comments' }}
    </h2>
    <div
      class="p-2 flex flex-col border border-gray-200"
      v-for="commentary in commentaries"
      :key="commentary.id"
    >
      <span class="text-gray-400">
        {{ commentary.user }}
      </span>

      <!-- commentary in markdown -->
      <MdPreview :modelValue="commentary.content" />
    </div>
  </div>
</template>
