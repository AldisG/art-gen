<script>
  $: generateImageRequest = async (prompt, size) => {
    try {
      const response = await fetch("/openai/generateimage", {
        methd: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          size,
        }),
      });
      console.log(response);
      return response;
    } catch (error) {
      alert("Error happened :/");
    }
  };
</script>

<button on:click={() => generateImageRequest("Dog on a fish", "small")}
  >test api</button
>
