<script>
    import AddToCart from "./addCart.svelte";
    import MarginPercentage from "./marginPercentage.svelte";
    import Option from "../icons/3DotMenu.svelte"
    import Select from "../core/selectComponent.svelte";
    let selected;
    let src = 'brush.png';
    export let view;
</script>
<div class="bg-white flex {view ? "mx-4 my-3 p-3 pb-4 rounded-md flex-row": "flex-col w-48% rounded-md relative p-2 my-2"}">
    <div class="flex flex-col align-top {view ? "items-center w-2/5": "items-start"}">
        <MarginPercentage/>
        <figure class="{view ? "": "mx-auto max-w-full"}">
            <img {src} alt="brush"/>
        </figure>
    </div>
    <div class="flex flex-col items-end align-baseline {view ? "ml-3 w-4/5": "mt-3"}">
        <figure class="{view ? "mr-0 ": "absolute top-2 right-1"}">
            <Option/>
        </figure>
        <div class="w-full">
            <h3 class="text-size13 leading-5 font-medium text-customGray-800 w-40 mb-3 mt-1">Ajay Quest Tooth Brush TB-101 </h3>
            <Select view = {view} options={[{"text":"100g / 24 pcs bundle"},{"text":"50g / 12 pcs bundle"},{"text":"150g / 36 pcs bundle"}]}
                display_func={o => o.text}
                bind:value={selected}/>
            <span class="text-xs text-customGray-500 font-normal mb-2 ">MRP  ₹1,920</span>
        </div>
        <p class="w-full pb-3 text-size15">₹1,920<span class="ml-3 text-customOrange-800 text-xs">₹400/pc</span></p>
        <AddToCart/>
    </div>
</div>
