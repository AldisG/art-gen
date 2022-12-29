<script>
  import ImageComponent from "./ImageComponent.svelte";
  const imageWrapperStyle = `
  py-4 flex flex-wrap gap-2 justify-center align-center
  `;
</script>

<!-- markup (zero or more items) goes here -->
<div class={imageWrapperStyle}>
  <!-- map images here -->
  <ImageComponent size={256} index={0} link="images/test.jpg" />
  <ImageComponent size={256} index={1} link="images/test.jpg" />
  <ImageComponent size={256} index={2} link="images/test.jpg" />
  <ImageComponent size={256} index={3} link="images/test.jpg" />
  <ImageComponent size={256} index={4} link="images/test.jpg" />
</div>
