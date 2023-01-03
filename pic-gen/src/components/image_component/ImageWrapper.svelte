<script>
  import { imageList } from "../../store/imageList";
  import ImageComponent from "./ImageComponent.svelte";
  import { imageWrapperStyle } from "./styles";

  $: storeImageList = $imageList.imageList;
  $: size = $imageList.size;
  $: fetchingData = $imageList.loading;

  $: isDataToDisplay = storeImageList.length > 0;
</script>

<div class={imageWrapperStyle}>
  {#if fetchingData}
    loading..
  {/if}

  {#if isDataToDisplay}
    {#each storeImageList as { url }, i}
      <ImageComponent {size} index={i} link={url} />
    {/each}
  {/if}

  {#if !fetchingData && !isDataToDisplay}
    <h6>No images to display</h6>
  {/if}
</div>
