<template>
  <form v-if="!submitted" class="max-w-md mx-auto" @submit.prevent="submitForm">
    <div class="mb-4">
      <label for="EMAIL" class="block text-sm/6 font-medium">
        Email Address
      </label>
      <input
        id="EMAIL"
        type="email"
        name="EMAIL"
        required
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
      />
    </div>

    <div class="flex gap-4">
      <div class="w-1/2">
        <label for="COMPANY" class="block text-sm/6 font-medium">
          Company
        </label>
        <input
          id="COMPANY"
          type="text"
          name="COMPANY"
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
        />
      </div>

      <div class="w-1/2">
        <label for="INDUSTRY" class="block text-sm/6 font-medium">
          Industry
        </label>
        <input
          id="INDUSTRY"
          type="text"
          name="INDUSTRY"
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
        />
      </div>
    </div>

    <button
      type="submit"
      class="block mt-6 mx-auto bg-white text-purple-800 font-bold rounded-lg transition hover:bg-gray-200 px-6 py-3"
    >
      Connect
    </button>

    <div aria-hidden="true" style="position: absolute; left: -5000px">
      <input
        type="text"
        name="b_85dea89be3f7652bad0d8acce_aeba25f7cc"
        tabindex="-1"
        value=""
      />
    </div>
  </form>
  <template v-else>
    <p class="text-center text-xl">
      Thanks for your interest! We'll be in touch soon.
    </p>
    <button
      class="mt-6 block mx-auto bg-white text-purple-800 font-bold rounded-lg transition hover:bg-gray-200"
    >
      <NuxtLink class="block px-6 py-3" to="/whitepaper">
        Read Whitepapaer
      </NuxtLink>
    </button>
  </template>
</template>

<script setup>
const submitted = ref(false);

function submitForm() {
  submitted.value = true;
}
</script>
