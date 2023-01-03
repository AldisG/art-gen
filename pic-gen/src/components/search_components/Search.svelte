<script lang="ts">
  import { formInputList } from "../utility/formInputs";
  import { requestArtwork } from "../utility/requestArtwork";
  import {
    baseInputStyle,
    formStyle,
    optionsContainerStyle,
    searchInputStyle,
  } from "./styles";
  import OptionSelect from "./OptionSelect.svelte";
  import SearchButton from "./SearchButton.svelte";

  const getInputValue = (index: number) => formInputList[index].identifier;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const { target } = e;

    requestArtwork({
      prompt: target[getInputValue(0)].value,
      size: target[getInputValue(1)].value,
      n: target[getInputValue(2)].value,
    });
  };
</script>

<form class={formStyle} on:submit={handleSubmit}>
  <div class={searchInputStyle}>
    <input
      type="search"
      name={getInputValue(0)}
      id={getInputValue(0)}
      class={baseInputStyle}
      placeholder="Kitten eating icecream with birds"
    />
    <SearchButton />
  </div>
  <div class={optionsContainerStyle}>
    {#each formInputList as { array, identifier }, i}
      {#if i}
        <OptionSelect dataArray={array} selectType={identifier} />
      {/if}
    {/each}
  </div>
</form>
