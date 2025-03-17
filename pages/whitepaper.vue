<template>
  <main class="bg-gradient-1 min-h-screen px-6 pt-[70px] pb-12">
    <header class="relative z-10">
      <h1
        class="text-4xl mt-8 text-white text-center font-semibold drop-shadow-lg"
      >
        Whitepaper
      </h1>
    </header>
    <div
      class="bg-white max-w-5xl mx-auto relative rounded-lg py-10 px-14 mt-10 z-10"
    >
      <ContentRenderer v-if="page" :value="page" />
    </div>
  </main>
</template>

<script setup>
const { data: page } = await useAsyncData(() =>
  queryCollection("content").path("/whitepaper-extended").first()
);
</script>

<style lang="pcss" scoped>
main {
  line-height: 1.7;
}

::v-deep() {
  p, h2 {
    margin-bottom: 18px;
  }
  h2, h3, h4 {
    font-weight: bold;
  }
  h2 {
    font-size: 21px;
  }
  hr {
    margin: 16px 0;
  }
  ul {
    list-style-type: disclosure-closed;
    padding-left: 24px;
    margin: 0 auto 24px auto;
    line-height: 1.8;
    width: 80%
  }
  strong {
    color: #7e22ce;
  }
}
</style>
