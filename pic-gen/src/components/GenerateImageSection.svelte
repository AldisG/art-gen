<script>
  import ImageWrapper from "./image_component/ImageWrapper.svelte";
  import Search from "./search_components/Search.svelte";
</script>

<!-- <button on:click={() => generateImageRequest("Dog on a fish", "small")}
  >Generate Image</button
> -->
<div class="w-full flex flex-col justify-center pb-10 gap-12">
  <!-- {#await expression}...{:then name}...{:catch name}...{/await} -->
  <Search />
  <ImageWrapper />
</div>
