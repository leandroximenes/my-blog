<script setup>
import { useForm } from '@inertiajs/vue3'

const props = defineProps({
  post: Object,
  action: String,
  url: String
})

let form = useForm({
  title: props.post.title || '',
  slug: props.post.slug || '',
  excerpt: props.post.excerpt || '',
  content: props.post.content || ''
})

let submit = (e) => {
  e.preventDefault()
  form.post('/post', {
    preserveScroll: true,
    onSuccess: () => {
      form.reset()
    }
  })
}
</script>

<template>
  <div class="p-2">
    <div class="flex space-x-2">
      <h1 class="text-3xl font-bold underline">Create Post</h1>
    </div>
    <hr class="my-4" />
    <form class="w-1/4" @submit="submit">
      <div class="mb-4">
        <label class="text-xl text-gray-600">Title</label>
        <input
          type="text"
          name="title"
          class="border-2 border-gray-300 p-2 w-full"
          v-model="form.title"
          placeholder="Title"
        />
        <div v-if="form.errors.title">{{ form.errors.title }}</div>
      </div>
      <div class="mb-4">
        <label class="text-xl text-gray-600">Slug</label>
        <input
          type="text"
          name="slug"
          class="border-2 border-gray-300 p-2 w-full"
          v-model="form.slug"
          placeholder="Slug"
        />
      </div>
      <div class="mb-4">
        <label class="text-xl text-gray-600">Excerpt</label><br />
        <textarea
          name="excerpt"
          class="border-2 border-gray-300 p-2 w-full"
          v-model="form.excerpt"
          placeholder="Excerpt"
        ></textarea>
      </div>
      <div class="mb-4">
        <label class="text-xl text-gray-600">Content</label><br />
        <textarea
          name="content"
          class="border-2 border-gray-300 p-2 w-full"
          v-model="form.content"
          placeholder="Content"
        ></textarea>
      </div>
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {{ form.id ? 'Update Post' : 'Create Post' }}
      </button>
    </form>
  </div>
</template>
