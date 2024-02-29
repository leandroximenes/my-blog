<script setup>
import VCodeBlock from '@wdns/vue-code-block'

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  user: {
    type: String,
    default: 'no-root'
  }
})

const userSimbol = props.user === 'root' ? '#' : '$'
</script>

<template>
  <div class="flex flex-row w-full bg-black rounded-xl content-center items-center !p-0 !m-0">
    <span class="-mt-2.5 ml-4 mr-0 text-gray-400">{{ userSimbol }}</span>
    <VCodeBlock v-bind="$attrs" :code="code" class="w-full p-0 m-0" />
  </div>
</template>
