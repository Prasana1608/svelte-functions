<script>
    import ProductDetails from "./product-details.svelte";
	let products = [1,2,3,4,5];
</script>
<ul>
    {#each products as product}
            <ProductDetails/>
        {/each}
    </ul>