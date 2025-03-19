<template>
  <main class="text-white">
    <!-- Hero -->
    <section
      class="bg-gradient-1 h-screen flex flex-col justify-center items-center text-center px-6 pb-7 pt-[70px]"
    >
      <div class="relative z-10">
        <h1 class="text-5xl font-semibold drop-shadow-lg">
          Advanced Accessability <br />& App Support
        </h1>
        <p class="mt-6 mx-auto text-lg font-light max-w-2xl">
          Easily integrate cutting-edge tools into your platform to enhance user
          experience and accelarate support needs. With our AI-powered
          solutions, you can provide a seamless experience for all users.
        </p>
        <button
          class="mt-10 bg-white text-purple-800 font-bold rounded-lg transition hover:bg-gray-200"
        >
          <a class="block px-6 py-3" href="#contact"> Request Info </a>
        </button>
      </div>
    </section>

    <!-- About -->
    <section
      id="about"
      class="bg-gradient-2 min-h-screen flex flex-col justify-center items-center text-center px-6 pb-7 pt-[70px]"
    >
      <div class="relative z-10">
        <h2 class="text-4xl font-semibold drop-shadow-lg">
          We Are Passionate Engineers & Innovators
        </h2>
        <div class="max-w-3xl text-lg mt-6">
          <p class="mb-4 font-light">
            We are a team of innovative thinkers and user experience advocates
            with a passion for accessible content. This project is a labor of
            love for all users however differently abled we are. We build tools
            that empower people to think and do things differently because as
            engineers we know how important open information is—Giving users
            control over how they access applicaitions and documentation is
            crucial in today's landscape.
          </p>
          <p>
            Many thanks to the community and our patrons for all your
            support,<br />
            made with love in Kansas City. Stay inspired!
          </p>
        </div>
        <button
          class="mt-10 bg-white text-purple-800 font-bold rounded-lg transition hover:bg-gray-200"
        >
          <NuxtLink class="block px-6 py-3" to="/whitepaper">
            Read Whitepapaer
          </NuxtLink>
        </button>
      </div>
    </section>

    <!-- App -->
    <section
      id="features"
      class="bg-gradient-1 min-h-screen overflow-hidden flex flex-col justify-center items-center text-center px-6 pt-[70px]"
    >
      <div class="relative z-10 bottom-0">
        <h2 class="text-3xl font-semibold drop-shadow-lg mb-10 mt-6">
          Cutting-Edge Tools Every User will Appreciate
        </h2>
        <AppGraphic
          class="w-full md:max-w-[90%] -mb-[60px] mx-auto opacity-90"
        />
      </div>
    </section>

    <!-- Features -->
    <section
      class="bg-gradient-3 flex flex-col justify-center items-center text-center px-6 py-12"
    >
      <div class="relative z-10">
        <div class="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
          <article class="p-6 bg-white bg-opacity-80 rounded-lg relative z-10">
            <h3 class="text-xl font-semibold">🚀 Speed & Performance</h3>
            <p class="font-light mt-2">
              Blazing fast technology that keeps up with your needs. Tiny 3kb
              library optimimzed for parallel processing in any language.
            </p>
          </article>
          <article class="p-6 bg-white bg-opacity-80 rounded-lg relative z-10">
            <h3 class="text-xl font-semibold">🔮 AI-Powered Innovation</h3>
            <p class="font-light mt-2">
              Artificial intelligence tailored for seamless experiences. Using
              the latest breakthroughs experience automagic updates.
            </p>
          </article>
          <article class="p-6 bg-white bg-opacity-80 rounded-lg relative z-10">
            <h3 class="text-xl font-semibold">👁️ Accessibility Focused</h3>
            <p class="font-light mt-2">
              Designed with inclusivity in mind, offering features like voice
              navigation, screen reader compatibility, and high-contrast modes.
            </p>
          </article>
          <article class="p-6 bg-white bg-opacity-80 rounded-lg">
            <h3 class="text-xl font-semibold">📱 App Platform Integration</h3>
            <p class="font-light mt-2">
              Seamlessly integrates with major platforms like iOS, Android, and
              web applications for a smooth cross-device experience.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section
      id="contact"
      class="bg-gradient-4 min-h-screen flex flex-col justify-center items-center px-6 pb-7 pt-[70px]"
    >
      <div class="relative z-10">
        <h2 class="text-4xl font-semibold drop-shadow-lg text-center">
          Request More Information
        </h2>
        <p class="max-w-2xl text-lg mt-3 text-center mb-6">
          Let's create the future together. Connect with us now!
        </p>
        <SubscribeForm />
      </div>
    </section>
  </main>
</template>

<script setup>
import AppGraphic from "~/assets/app.svg";
useHead({
  title: "Intelligent Accessability Tools",
  meta: [
    {
      name: "description",
      content:
        "branedocs is crafting the future of accessability tools using the latest in AI and app integration.",
    },
  ],
});
</script>
