<script>
  import { baseInputStyle, selectOptionsStyle } from "./inputStyle";

  const imageSizes = ["large", "medium", "small"];
  const imageAmount = [1, 2, 3, 4, 5];
</script>

<div class={selectOptionsStyle}>
  <select name="select-size" id="select-size" class={`${baseInputStyle} p-2`}>
    {#each imageSizes as size, i}
      <option default={!i} value={size}>{size}</option>
    {/each}
  </select>

  <select
    name="select-amount"
    id="select-amount"
    class={`${baseInputStyle} p-2`}
  >
    {#each imageAmount as amount, i}
      <option default={!i} value={amount}>{amount}</option>
    {/each}
  </select>
</div>
