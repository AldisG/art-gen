<script lang="ts">
  export let link = "";
  export let index = 0;
  export let size: "small" | "medium" | "large" = "small";

  let imageSize = size === "small" ? 256 : size === "medium" ? 512 : 1024;
</script>

<div
  class={`p-4 pt-1 flex flex-col gap-1 bg-neutral-200 align-start rounded-md`}
  style="width: {imageSize}px"
>
  <p class="text-xs font-bold text-slate-600">Ver: {index + 1}</p>
  <img class="w-full" src={link} alt="Generated" />
</div>
