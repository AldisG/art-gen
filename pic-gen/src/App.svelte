<script lang="ts">
  import GenerateImageSection from "./components/GenerateImageSection.svelte";
  import HeaderWrapper from "./components/header_components/HeaderWrapper.svelte";
</script>

<main>
  <div
    class="flex flex-col h-[100vh] justify-start items-center py-20 px-10 gap-10 mx-auto"
  >
    <HeaderWrapper />
    <GenerateImageSection />
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
