<script>
  import { imageList } from "../../store/imageList";

  $: loading = $imageList.loading;
</script>

<div>
  <button
    disabled={loading}
    class="px-5 py-3 bg-indigo-500 color-white rounded-md text-white"
  >
    {#if loading}
      loading
    {:else}
      Search
    {/if}
  </button>
</div>
