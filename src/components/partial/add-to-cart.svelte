<script>
    import { counter } from '../../stores';
	const count = counter();
    import Wishlist from "../icons/Heart.svelte"
</script>
<div class="flex align-middle items-center w-full">
    {#if $count < 1}
    <button id="cartButton" class="cartButton rounded-md bg-customGray-800 text-xs text-white py-1 leading-5 px-5" on:click={count.increment}>Add to cart</button>
    {:else}
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={count.decrement}>-</button>
    <span class="mx-3 counter" id="count">{$count}</span>
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={count.increment}>+</button>
    {/if}
    <figure class="ml-2 p-2 py-6px bg-customGray-150 rounded-md">
        <Wishlist/>
    </figure>
</div>