<script lang="ts">
  import Test from "./components/Test.svelte";
  export let name: string;
</script>

<main>
  <div class="flex h-[100vh] justify-center items-center">
    <div class="text-center">
      <h1 class="text-4xl text-red-500">This is a {name} app!</h1>
      <Test />
    </div>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
