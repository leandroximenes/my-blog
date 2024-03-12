<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import CommentaryLogin from '@/Components/CommentaryLogin.vue'
import CommentaryForm from '@/Components/CommentaryForm.vue'
import CommentaryPosts from '@/Components/CommentaryPosts.vue'

const page = usePage()
const user = computed(() => page.props.auth.user)
</script>

<template>
  <CommentaryPosts></CommentaryPosts>
  <CommentaryForm v-if="user"></CommentaryForm>
  <CommentaryLogin v-else> </CommentaryLogin>
</template>
