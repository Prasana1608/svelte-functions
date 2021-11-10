<script>
    import { counter } from '../../stores';
	const count = counter();
    export const wishlist = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.9146 7.73221C1.19926 5.49888 2.03526 2.94621 4.37993 2.19088C5.61326 1.79288 6.9746 2.02755 7.99993 2.79888C8.96993 2.04888 10.3813 1.79555 11.6133 2.19088C13.9579 2.94621 14.7993 5.49888 14.0846 7.73221C12.9713 11.2722 7.99993 13.9989 7.99993 13.9989C7.99993 13.9989 3.06526 11.3135 1.9146 7.73221Z" stroke="#868583" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
</script>
<div class="flex align-middle items-center w-full">
    {#if $count < 1}
    <button id="cartButton" class="cartButton rounded-md bg-customGray-800 text-xs text-white py-1 leading-5 px-5" on:click={count.increment}>Add to cart</button>
    {:else}
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={count.increment}>+</button>
    <span class="mx-3 counter" id="count">{$count}</span>
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={count.decrement}>-</button>
    {/if}
    <figure class="ml-2 p-2 py-6px bg-customGray-150 rounded-md">
        {@html wishlist}
    </figure>
</div>