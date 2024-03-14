<script setup>
import { useForm } from '@inertiajs/vue3'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

//get slug from url
const url = window.location.href
const urlArray = url.split('/')
const slug = urlArray[urlArray.length - 1]

const form = useForm({
  content: '',
  post_slug: slug
})
</script>

<template>
  <form action="#" @submit.prevent="form.post('/commentaries/store')" method="post">
    <div class="flex flex-col space-y-4 p-4">
      <MdEditor v-model="form.content" language="en-US" :preview="false" noPrettier="true" />
      <div class="text-red-800">{{ form.errors.content }}</div>
      <div class="text-center space-x-10">
        <button type="submit" class="primary-button">Send</button>
      </div>
    </div>
  </form>
</template>
