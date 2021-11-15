<script>
    import { counter } from '../../stores';
	const count = counter();
    import Wishlist from "../icons/Heart.svelte";
    export let view;
</script>
<div class="flex align-middle items-center w-full">
    {#if $count < 1}
    <button id="cartButton" class="cartButton rounded-md bg-customGray-800 text-xs text-white py-1 leading-5 {view ? "px-5": "px-4"}" on:click={count.increment}>Add to cart</button>
    {:else}
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={count.decrement}>-</button>
    <div><span class=" w-5 text-center counter block {view ? "mx-9.4px": " mx-5.5px"}" id="count">{$count}</span></div>
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={count.increment}>+</button>
    {/if}
    <figure class="p-2 py-6px ml-3 bg-customGray-150 rounded-md">
        <Wishlist/>
    </figure>
</div>