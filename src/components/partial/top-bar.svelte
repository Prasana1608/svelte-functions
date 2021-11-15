<script>
    import Notification from '../icons/Notification.svelte';
    import Search from '../icons/Search.svelte';
    import Buy from '../icons/Buy.svelte';
    import Down from '../icons/Down.svelte';
    import ArrowRight from '../icons/arrow-right 1.svelte';
</script>
<div class="px-4 flex justify-between align-middle items-center py-4">
    <div class="flex align-middle items-center">
        <figure class="mr-2"> <ArrowRight/> </figure>
        <p class=" text-base text-customGray-800 font-semibold mr-2">Personal care</p>
        <figure> <Down/> </figure>
    </div>
    <div class="flex align-middle items-center">
        <figure class=" mr-5"> <Search/> </figure>
        <figure class=" mr-5"> <Buy/> </figure>
        <figure><Notification/></figure>
    </div>
</div>