<template>
  <header
    class="fixed top-0 left-0 w-full text-white bg-black bg-opacity-60 backdrop-blur-md p-4 z-50"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center text-cyan-400 relative">
        <Logo class="icon w-8 h-8 mr-1" />
        <div class="flex text-xl mt-2">
          branedocs<span class="block text-base font-light">&trade;</span>
        </div>
        <span class="tooltip">where interactions shape reality</span>
      </NuxtLink>
      <nav>
        <NuxtLink to="/#about" class="mx-4 hover:text-cyan-400 transition">
          about
        </NuxtLink>
        <NuxtLink to="/#features" class="mx-4 hover:text-cyan-400 transition">
          features
        </NuxtLink>
        <NuxtLink to="/#contact" class="mx-4 hover:text-cyan-400 transition">
          connect
        </NuxtLink>
        <NuxtLink
          to="/login"
          class="mx-4 py-2 px-3 text-sm bg-purple-700 hover:bg-purple-900 transition rounded-xl"
        >
          sign in
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import Logo from "~/assets/logo.svg";
</script>
