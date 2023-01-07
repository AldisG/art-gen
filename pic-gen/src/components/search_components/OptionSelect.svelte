<script lang="ts">
  import SmallText from "../utility/SmallText.svelte";
  import { baseInputStyle, selectOptionsStyle } from "./styles";
  export let dataArray: string[] | number[] | undefined = [];
  export let selectType = "";
  const inputType = selectType.split("-")[1] || "property";
</script>

<div class={selectOptionsStyle}>
  <SmallText>{`Image ${inputType}`}</SmallText>
  <select name={selectType} id={selectType} class={baseInputStyle}>
    {#each dataArray as data, i}
      <option selected={!i || false} value={data}>{data}</option>
    {/each}
  </select>
</div>
