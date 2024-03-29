<script setup>
import { computed } from 'vue'
import { usePage, useForm } from '@inertiajs/vue3'
import { MdEditor, MdPreview } from 'md-editor-v3'
import axios from 'axios'
import 'md-editor-v3/lib/style.css'

const page = usePage()
const user = computed(() => page.props.auth.user)

//get slug from url
const url = window.location.href
const urlArray = url.split('/')
const slug = urlArray[urlArray.length - 1]

defineProps({
  commentaries: Array
})

const form = useForm({
  content: '',
  post_slug: slug
})

const sendComment = () => {
  form.post('/commentaries/store', {
    preserveState: false,
    preserveScroll: true
  })
}

const updateUser = () => {
  axios.get('/auth/info').then((response) => {
    console.log(response.data.user)
    page.props.auth.user = response.data.user
  })
}

const openPopUp = () => {
  const name = event.target.name
  const cpName = name.charAt(0).toUpperCase() + name.slice(1)
  const width = 600
  const height = 800
  const left = window.innerWidth / 2 - width / 2
  const top = window.innerHeight / 2 - height / 2
  const url = `/auth/${name}/redirect`
  const title = `${cpName} Auth`
  const specs = `width=${width},height=${height},top=${top},left=${left}`
  const popup = window.open(url, title, specs)

  const interval = setInterval(() => {
    if (popup.closed) {
      clearInterval(interval)
      updateUser()
    }
  }, 500) // Check every second
}
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
        <div class="flex justify-between w-full px-4">
          <span>
            {{ commentary.user }}
          </span>
          <span>{{ commentary.created_at }}</span>
        </div>
      </span>

      <!-- commentary in markdown -->
      <div class="border-2 border-gray-200">
        <MdPreview :modelValue="commentary.content" />
      </div>
    </div>
  </div>

  <form action="#" @submit.prevent="sendComment()" method="post">
    <div class="flex flex-col space-y-4 p-4">
      <MdEditor v-model="form.content" language="en-US" :preview="false" noPrettier="true" />
      <div class="text-red-800">{{ form.errors.content }}</div>
      <div v-if="user" class="text-center space-x-10">
        <button type="submit" class="primary-button">Send</button>
      </div>
      <div v-else class="text-center space-x-10">
        <button @click="openPopUp()" name="github" type="button" class="secondary-button">
          <svg
            class="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Github
        </button>

        <button @click="openPopUp()" name="google" type="button" class="primary-button">
          <svg
            class="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fill-rule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clip-rule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  </form>
</template>
<style>
.md-editor-preview p {
  font-size: 14px;
}
</style>
