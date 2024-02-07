<script setup>
import { Link } from '@inertiajs/vue3'
</script>

<template>
  <main>
    <header class="bg-gray-800 py-5 text-white text-xl">
      <div class="container w-8/12 mx-auto flex justify-between">
        <div>logo</div>
        <nav class="space-x-10">
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
        </nav>
      </div>
    </header>
    <article class="container w-8/12 mx-auto pt-1">
      <slot />
    </article>
  </main>
</template>
