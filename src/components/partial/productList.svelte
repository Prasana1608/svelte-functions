<script>
    import ProductDetails from "./productDetails.svelte";
    let gridView = true;
    const toggleBool = () => gridView = !gridView;
	let products = [1,2,3,4,5];
    import Filter from "../icons/filterIcon.svelte"
</script>

    <div>
        <div class="flex px-4 bg-white">
            <input type="search" class=" w-4/5 py-4 border-r" placeholder="Search in personal care">
            <div class="flex justify-around w-1/5 items-center align-middle">
                <Filter/>
                {#if gridView}
                <svg on:click={toggleBool} width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1.25" y="1.25" width="15.6818" height="4.77273" rx="1.75" stroke="#1C1D25" stroke-width="1.5"/><rect x="1.25" y="9.97729" width="15.6818" height="4.77273" rx="1.75" stroke="#1C1D25" stroke-width="1.5"/></svg>
                {:else}
                
                <svg on:click={toggleBool} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 4.875C2.25 2.90609 2.27108 2.25 4.875 2.25C7.47892 2.25 7.5 2.90609 7.5 4.875C7.5 6.84391 7.5083 7.5 4.875 7.5C2.2417 7.5 2.25 6.84391 2.25 4.875Z" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 4.875C10.5 2.90609 10.5211 2.25 13.125 2.25C15.7289 2.25 15.75 2.90609 15.75 4.875C15.75 6.84391 15.7583 7.5 13.125 7.5C10.4917 7.5 10.5 6.84391 10.5 4.875Z" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 13.125C2.25 11.1561 2.27108 10.5 4.875 10.5C7.47892 10.5 7.5 11.1561 7.5 13.125C7.5 15.0939 7.5083 15.75 4.875 15.75C2.2417 15.75 2.25 15.0939 2.25 13.125Z" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 13.125C10.5 11.1561 10.5211 10.5 13.125 10.5C15.7289 10.5 15.75 11.1561 15.75 13.125C15.75 15.0939 15.7583 15.75 13.125 15.75C10.4917 15.75 10.5 15.0939 10.5 13.125Z" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                {/if}

            </div>
        </div>
        <ul class={gridView ? "" : "flex flex-wrap justify-between mx-4 mt-3"}>
            {#each products as product}
                <ProductDetails view = {gridView}/>
            {/each}
        </ul>
        
    </div>