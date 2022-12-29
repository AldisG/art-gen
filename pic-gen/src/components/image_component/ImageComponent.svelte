<script>
  export let link = "";
  export let index = 1;
  export let size = 155256;
  $: imageSize = `${size}px`;
</script>

<div
  class={`w-[${imageSize}] p-4 pt-1 flex flex-col gap-1 bg-neutral-200 align-start rounded-md`}
>
  {imageSize}
  <p class="text-xs font-bold text-slate-600">{index}</p>
  <img src={link} alt="Generated" />
</div>
