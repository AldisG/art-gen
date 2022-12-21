<script>
  import Search from "./search_components/Search.svelte";
  $: imgUrl = undefined;
  // let generateImageRequest = async (prompt, size) => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:5000/openai/generateimage",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           prompt,
  //           size,
  //         }),
  //       }
  //     );
  //     if (!response.ok) {
  //       throw new Error("That image could not be generated");
  //     }
  //     const data = await response.json();
  //     imgUrl = data.data;
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };
  $: console.log(imgUrl, "imgUrl");
</script>

<!-- <button on:click={() => generateImageRequest("Dog on a fish", "small")}
  >Generate Image</button
> -->
<div class="w-full max-w-md">
  <!-- {#await expression}...{:then name}...{:catch name}...{/await} -->
  <Search />
</div>
