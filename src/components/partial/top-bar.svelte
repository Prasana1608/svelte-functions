<script>
    import Notification from '../icons/Notification.svelte';
    // import Search from '../../static/Search.svg';
    // import Buy from '../../static/Buy.svg';
    // import Down from '../../static/Down.svg';
    // import ArrowRight from '../../static/arrow-right 1.svg';
    // const Notification = '<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.50083 12.7871V12.5681C1.53295 11.9202 1.7406 11.2925 2.10236 10.7496C2.7045 10.0975 3.1167 9.29831 3.29571 8.43598C3.29571 7.7695 3.29571 7.0935 3.35393 6.42703C3.65469 3.21842 6.82728 1 9.96106 1H10.0387C13.1725 1 16.345 3.21842 16.6555 6.42703C16.7137 7.0935 16.6555 7.7695 16.704 8.43598C16.8854 9.30031 17.2972 10.1019 17.8974 10.7591C18.2618 11.2972 18.4698 11.9227 18.4989 12.5681V12.7776C18.5206 13.648 18.2208 14.4968 17.6548 15.1674C16.907 15.9515 15.8921 16.4393 14.8024 16.5384C11.607 16.8812 8.38303 16.8812 5.18762 16.5384C4.09914 16.435 3.08576 15.9479 2.33521 15.1674C1.778 14.4963 1.48224 13.6526 1.50083 12.7871Z" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.55518 19.8516C8.05445 20.4782 8.78764 20.8838 9.59247 20.9785C10.3973 21.0732 11.2074 20.8493 11.8435 20.3562C12.0391 20.2103 12.2152 20.0408 12.3674 19.8516" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const Search = '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.2763" cy="11.2763" r="8.61404" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.2676 17.7149L20.6448 21.0833" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const Buy = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.75012 3.24988L4.83012 3.60988L5.79312 15.0829C5.87012 16.0199 6.65312 16.7389 7.59312 16.7359H18.5021C19.3991 16.7379 20.1601 16.0779 20.2871 15.1899L21.2361 8.63188C21.3421 7.89888 20.8331 7.21888 20.1011 7.11288C20.0371 7.10388 5.16412 7.09888 5.16412 7.09888" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.1251 10.7948H16.8981" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.15441 20.2025C7.45541 20.2025 7.69841 20.4465 7.69841 20.7465C7.69841 21.0475 7.45541 21.2915 7.15441 21.2915C6.85341 21.2915 6.61041 21.0475 6.61041 20.7465C6.61041 20.4465 6.85341 20.2025 7.15441 20.2025Z" fill="#1C1D25" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.4347 20.2025C18.7357 20.2025 18.9797 20.4465 18.9797 20.7465C18.9797 21.0475 18.7357 21.2915 18.4347 21.2915C18.1337 21.2915 17.8907 21.0475 17.8907 20.7465C17.8907 20.4465 18.1337 20.2025 18.4347 20.2025Z" fill="#1C1D25" stroke="#1C1D25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const Down = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.73714 11C7.92578 11 8.1144 10.928 8.25822 10.7842L12.7841 6.25832C13.072 5.97041 13.072 5.50363 12.7841 5.21584C12.4963 4.92805 12.0296 4.92805 11.7417 5.21584L7.73714 9.22061L3.73259 5.21598C3.44468 4.92819 2.97804 4.92819 2.69027 5.21598C2.40223 5.50377 2.40223 5.97055 2.69027 6.25846L7.21605 10.7844C7.35995 10.9281 7.54857 11 7.73714 11Z" fill="#1C1D25"/></svg>'
    const ArrowRight = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 12H5" stroke="#1C1D25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5L5 12L12 19" stroke="#1C1D25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
</script>
<div class="px-4 flex justify-between align-middle items-center py-4">
    <div class="flex align-middle items-center">
        <figure class="mr-2">{@html ArrowRight}</figure>
        <p class=" text-base text-customGray-800 font-semibold mr-2">Personal care</p>
        <figure>{@html Down}</figure>
    </div>
    <div class="flex align-middle items-center">
        <figure class=" mr-5">{@html Search}</figure>
        <figure class=" mr-5">{@html Buy}</figure>
        <figure><Notification/></figure>
    </div>
</div>