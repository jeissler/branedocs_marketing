<template>
  <main
    class="bg-gradient-1 flex min-h-screen flex-col justify-center py-12 px-6"
  >
    <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-[480px] relative z-10">
      <div class="bg-white px-6 py-12 shadow-sm rounded-lg sm:px-12">
        <p
          v-if="submitted"
          class="text-sm/6 text-white py-2 px-3 mb-3 rounded-lg bg-red-600"
        >
          We don't recognize your email address or password. Please try again.
        </p>
        <form class="space-y-6" @submit.prevent="onSubmit">
          <div>
            <label
              for="email"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                autocomplete="email"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
            >
              Password
            </label>
            <div class="mt-2">
              <input
                id="password"
                type="password"
                name="password"
                autocomplete="current-password"
                required
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-purple-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex gap-3">
              <div class="flex h-6 shrink-0 items-center">
                <div class="group grid size-4 grid-cols-1">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  />
                  <svg
                    class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      class="opacity-0 group-has-checked:opacity-100"
                      d="M3 8L6 11L11 3.5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      class="opacity-0 group-has-indeterminate:opacity-100"
                      d="M3 7H11"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <label for="remember-me" class="block text-sm/6 text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm/6">
              <a
                href="#"
                class="font-semibold text-purple-600 hover:text-purple-500"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-purple-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div>
          <div class="relative mt-10">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-200" />
            </div>
            <div class="relative flex justify-center text-sm/6 font-medium">
              <span class="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div class="mt-6">
            <a
              href="#"
              class="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <Google class="h-5 w-5" />
              <span class="text-sm/6 font-semibold">Google</span>
            </a>
          </div>
        </div>
      </div>

      <p class="mt-10 text-center text-sm/6 text-gray-100">
        Not a member?
        <a href="#" class="font-semibold text-white hover:text-purple-300">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  </main>
</template>

<script setup>
import Google from "~/assets/google.svg";

useHead({ title: "Sign In to Account" });

const submitted = ref(false);

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  submitted.value = true;
}
</script>
