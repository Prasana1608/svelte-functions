<script>
    import AddToCart from "./add-to-cart.svelte";
    import MarginPercentage from "./margin-percentage.svelte";
    import Select from "./select.svelte";
    let selected;
    let src = 'brush.png';
    export const option = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="1.62917" transform="matrix(0 -1 -1 0 12.125 17.875)" fill="#C5C5C5" stroke="#C5C5C5" stroke-width="0.991667"/><circle r="1.62917" transform="matrix(0 -1 -1 0 12.125 11.5)" fill="#C5C5C5" stroke="#C5C5C5" stroke-width="0.991667"/><circle r="1.62917" transform="matrix(0 -1 -1 0 12.125 5.125)" fill="#C5C5C5" stroke="#C5C5C5" stroke-width="0.991667"/></svg>';
    export let view;
</script>
{#if view}
<div class="bg-white p-3 pb-4 flex flex-row mx-4">
    <div class="flex flex-col align-top items-center w-2/5">
        <MarginPercentage/>
        <figure>
            <img {src} alt="brush"/>
        </figure>
    </div>
    <div class="flex flex-col items-end align-baseline ml-3 w-4/5">
        <figure class="mr-0">
            {@html option}
        </figure>
        <div class="w-full">
            <h3 class="text-size13 leading-5 font-medium text-customGray-800 w-40 my-2 mb-3">Ajay Quest Tooth Brush TB-101 </h3>
            <Select options={[{"text":"100g / 24 pcs bundle"},{"text":"50g / 12 pcs bundle"},{"text":"150g / 36 pcs bundle"}]}
                display_func={o => o.text}
                bind:value={selected}/>
            <span class="text-xs text-customGray-500 font-normal mb-2">MRP  ₹1,920</span>
        </div>
        <p class="w-full pb-4 text-size15">₹1,920<span>₹400/pc</span></p>
        <AddToCart/>
    </div>

</div>
{:else}
<div class="bg-white p-3 pb-4 flex flex-col w-1/2 relative">
    <div class="flex flex-col align-top items-start">
        <MarginPercentage/>
        <figure class="mx-auto max-w-full">
            <img class="mx-auto max-w-full" {src} alt="brush"/>
        </figure>
    </div>
    <div class="flex flex-col items-end align-baseline mt-3">
        <figure class="mr-0 absolute top-3 right-3">
            {@html option}
        </figure>
        <div class="w-full">
            <h3 class="text-size13 leading-5 font-medium text-customGray-800 w-40 my-2 mb-3">Ajay Quest Tooth Brush TB-101 </h3>
            <Select options={[{"text":"100g / 24 pcs bundle"},{"text":"50g / 12 pcs bundle"},{"text":"150g / 36 pcs bundle"}]}
                display_func={o => o.text}
                bind:value={selected}/>
            <span class="text-xs text-customGray-500 font-normal mb-2">MRP  ₹1,920</span>
        </div>
        <p class="w-full pb-4 text-size15">₹1,920<span>₹400/pc</span></p>
        <AddToCart/>
    </div>

</div>
{/if}