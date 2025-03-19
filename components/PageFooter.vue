<template>
  <footer
    class="p-2 text-white bg-black bg-opacity-80 text-right text-sm font-light relative z-50"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <a
        href="#"
        class="flex items-center text-white relative p-[10px] rounded-full bg-purple-800"
      >
        <Logo class="icon w-6 w-6 -mt-[2px] -mr-[1px]" />
        <span class="tooltip">where interactions shape reality</span>
      </a>
      <p>
        <NuxtLink class="mr-6 hover:text-cyan-400" to="/whitepaper">
          whitepapaer
        </NuxtLink>
        &copy; 2025 branedocs&trade; all rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import Logo from "~/assets/logo.svg";
</script>
