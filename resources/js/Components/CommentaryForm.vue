<script setup>
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const text = ref('')
</script>

<template>
  <form action="#" method="post">
    <div class="flex flex-col space-y-4 p-4">
      <MdEditor v-model="text" language="en-US" previewTheme="github" />
      <div class="text-center space-x-10">
        <button class="primary-button">Send</button>
      </div>
    </div>
  </form>
</template>
