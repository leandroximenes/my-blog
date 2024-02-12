<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  posts: Array,
  action: String,
  url: String
})
</script>

<template>
  <div class="p-2">
    <div class="flex space-x-2">
      <h1 class="text-3xl font-bold underline">Posts</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <a href="/post">Create new Post</a>
      </button>
    </div>
    <hr class="my-4" />
    <ul>
      <li v-for="post in posts" :key="post.id">
        <a :href="'post/' + post.slug"> {{ post.title }} - {{ post.excerpt }}</a>
      </li>
    </ul>
  </div>
</template>
