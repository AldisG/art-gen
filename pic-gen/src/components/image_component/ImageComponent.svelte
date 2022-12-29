<script>
  export let link = "";
  export let index = 1;
  export let size = 256;
  $: imageSize = `${size}px`;
</script>

<div
  class={`p-4 pt-1 flex flex-col gap-1 bg-neutral-200 align-start rounded-md`}
  style="width: {imageSize}"
>
  <p class="text-xs font-bold text-slate-600">Ver: {index + 1}</p>
  <img class="w-full" src={link} alt="Generated" />
</div>
