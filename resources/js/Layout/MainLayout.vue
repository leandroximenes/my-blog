<script setup>
import { Link } from '@inertiajs/vue3'
import { ref } from 'vue'

const showNavbar = ref(false)

const toggleNavbar = () => {
  showNavbar.value = !showNavbar.value
}
</script>

<template>
  <main>
    <header class="bg-gray-800 py-5 text-white text-xl">
      <div class="mx-auto flex justify-between items-center lg:container xl:w-8/12">
        <div class="ml-2">logo</div>
        <button
          data-collapse-toggle="navbar-default"
          @click="toggleNavbar"
          type="button"
          class="mr-2"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <svg
            class="w-5 h-5 lg:hidden"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <nav
          class="w-full absolute mt-40 flex flex-col bg-gray-500 space-y-1 text-center lg:static lg:bg-transparent lg:flex lg:flex-row lg:space-x-4 lg:space-y-0 lg:mt-0 lg:w-auto"
          :class="{ hidden: !showNavbar }"
        >
          <Link class="bg-gray-600 py-2 lg:bg-transparent" @click="toggleNavbar" href="/"
            >Home</Link
          >
          <Link class="bg-gray-600 py-2 lg:bg-transparent" @click="toggleNavbar" href="/posts"
            >Posts</Link
          >
        </nav>
      </div>
    </header>
    <article class="mx-auto p-1 lg:container xl:w-8/12">
      <slot />
    </article>
  </main>
</template>
