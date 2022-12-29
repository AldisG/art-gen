<script lang="ts">
  import { baseInputStyle, formStyle, searchInputStyle } from "./inputStyle";
  import OptionSelect from "./OptionSelect.svelte";
  import SearchButton from "./SearchButton.svelte";

  const formInputList = [
    { identifier: "search-query", array: [] },
    { identifier: "select-size", array: ["large", "medium", "small"] },
    { identifier: "select-amount", array: [1, 2, 3, 4, 5] },
  ];
  const getInputValue = (index: number) => formInputList[index].identifier;
  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const { target } = e;
    const searchQuery = {
      prompt: target[getInputValue(0)].value,
      size: target[getInputValue(1)].value,
      amount: target[getInputValue(2)].value,
    };
    // data to send to backend
    console.table(searchQuery);
  };
</script>

<form class={formStyle} on:submit={handleSubmit}>
  <div class={searchInputStyle}>
    <input
      type="search"
      name={getInputValue(0)}
      id={getInputValue(0)}
      class={baseInputStyle}
    />
    <SearchButton />
  </div>
  <div class="flex items-center w-full max-w-md space-x-4 h-full">
    {#each formInputList as { array, identifier }, i}
      {#if i}
        <OptionSelect dataArray={array} selectType={identifier} />
      {/if}
    {/each}
  </div>
</form>
