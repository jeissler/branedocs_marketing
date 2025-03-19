<template>
  <form
    v-if="!submitted"
    class="max-w-md mx-auto"
    name="subscribe"
    data-netlify="true"
    data-netlify-honeypot="bot"
    data-netlify-recaptcha="true"
    @submit.prevent="submitForm"
  >
    <p class="hidden">
      <label>
        <input name="bot" />
      </label>
      <input type="hidden" name="form-name" value="subscribe" />
    </p>
    <div class="mb-4">
      <label for="email" class="block text-sm/6 font-medium">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
      />
    </div>

    <div class="flex gap-4">
      <div class="w-1/2">
        <label for="company" class="block text-sm/6 font-medium">
          Company
        </label>
        <input
          id="company"
          type="text"
          name="company"
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
        />
      </div>

      <div class="w-1/2">
        <label for="industry" class="block text-sm/6 font-medium">
          Industry
        </label>
        <input
          id="industry"
          type="text"
          name="industry"
          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
        />
      </div>
    </div>

    <div class="mt-3 flex justify-center" data-netlify-recaptcha="true" />

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
import axios from "axios";
const submitted = ref(false);

function submitForm({ target }) {
  try {
    const formData = new FormData(target);
    // encode data for netlify forms
    const encodedData = new URLSearchParams(formData).toString();

    axios.post("/", encodedData, {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });

    submitted.value = true;
  } catch (error) {
    console.error("Error:", error);

    alert("There was an error submitting the form. Please try again later.");
  }
}
</script>
