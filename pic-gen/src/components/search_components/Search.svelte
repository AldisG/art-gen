<script lang="ts">
  import { baseInputStyle, formStyle, searchInputStyle } from "./inputStyle";
  import SearchButton from "./SearchButton.svelte";
  import SelectOptionsWrapper from "./SelectOptionsWrapper.svelte";

  const formInputList = {
    query: "search-query",
    size: "select-size",
    amount: "select-amount",
  };

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

<form class={formStyle} on:submit={handleSubmit}>
  <div class={searchInputStyle}>
    <input
      type="search"
      name="query"
      id="search-query"
      class={baseInputStyle}
    />
    <SearchButton />
  </div>
  <SelectOptionsWrapper />
</form>
