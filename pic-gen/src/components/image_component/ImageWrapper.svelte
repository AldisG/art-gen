<script>
  import ImageComponent from "./ImageComponent.svelte";
  const imageWrapperStyle = `
  py-4 flex flex-wrap gap-2 justify-center align-center
  `;
  const testArray = [0, 1, 2, 3, 4];
  // api call for results goes here
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
  // $: console.log(imgUrl, "imgUrl");
</script>

<div class={imageWrapperStyle}>
  {#each testArray as i}
    <ImageComponent size={256} index={i} link="images/test.jpg" />
  {/each}
</div>
