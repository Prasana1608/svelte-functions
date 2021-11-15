<script>
    export let options = [];
    export let display_func = a => a;
    export let index = 0;
    export let value;
    export let view;
    $: {
      value = options[index];
    }
  </script>
  
  <select bind:value={index} class="text-xs text-customGray-800 py-2  bg-customGray-150 rounded pr-3 {view ? "w-full": " w-min block mx-auto"}">
    {#each options as option, i}
      <option value={i}>{display_func(option)}</option>
    {/each}
  </select>
  <style>
      
  </style>