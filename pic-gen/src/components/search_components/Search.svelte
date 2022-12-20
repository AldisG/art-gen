<script lang="ts">
  import SearchButton from "./SearchButton.svelte";

  const formClass =
    "flex flex-col p-3 justify-between items-center w-full max-w-md h-full ";
  const searchInputClass =
    "flex p-3 justify-between items-center border border-slate-300 w-full max-w-md space-x-4";

  const formInputList = {
    query: "search-query",
    size: "select-size",
    amount: "select-amount",
  };
  const imageSizes = ["large", "medium", "small"];
  const imageAmount = [1, 2, 3, 4, 5];

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const { target } = e;
    const { query, size, amount } = formInputList;
    const searchQuery = {
      prompt: target[query].value,
      size: target[size].value,
      amount: target[amount].value,
    };
    // data to send to backend
    console.table(searchQuery);
  };
</script>

<form class={formClass} on:submit={handleSubmit}>
  <div class={searchInputClass}>
    <input type="search" name="query" id="search-query" class="w-full h-full" />
    <SearchButton />
  </div>
  <div class="flex items-center w-full max-w-md space-x-4 h-full">
    <!-- options -->
    <select name="select-size" id="select-size">
      {#each imageSizes as size, i}
        <option default={!i} value={size}>{size}</option>
      {/each}
    </select>
    <select name="select-amount" id="select-amount">
      {#each imageAmount as amount, i}
        <option default={!i} value={amount}>{amount}</option>
      {/each}
    </select>
  </div>
</form>
