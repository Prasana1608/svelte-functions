<script>
    import { counter } from '../../stores';  
    import {onMount} from 'svelte';
	let count = counter();
    import Wishlist from "../icons/heartIcon.svelte";
    export let view;
    export let cartcount;
    export let id;
    export let product;
    export let cart;
    let localStorageQuantity;
    let mounted = false

    onMount(() =>{
         mounted = true;
    })
    const addToCart = (product) => {
		cart = [...cart, product];
        count.increment();
        localStorage.setItem("cart", JSON.stringify(cart));
        const selectedProduct =  cart.find(function(e) {
                        return e.id == product.id;
                        });
        const selectedProductQuantity = selectedProduct.quantity
        console.log(selectedProductQuantity)
        quantity(product);
        console.log(cart);
        return;
	}
    const minusItem = (product, item) => {
        cart = [...cart, product];
		for(let item of cart) {
				if(item.id === product.id) {
					if(item.quantity > 1 ) {
							item.quantity -= 1
					} else {
							cart = cart.filter((cartItem) => cartItem != product)
					}
                    cart = cart;
                    console.log(cart);
                    count.decrement();
                    localStorage.setItem("cart", JSON.stringify(cart))
                    const selectedProduct =  cart.find(function(e) {
                        return e.id == product.id;
                        });
                        console.log(selectedProduct)
                        const selectedProductQuantity = selectedProduct.quantity
                        console.log(selectedProductQuantity);
                        quantity(selectedProduct);
                                return;
                            }
		}
        console.log('clicked');
	}
    const plusItem = (product) => {
        // cart = JSON.parse(localStorage.getItem("cart"));
       
            for(let item of cart) {
		if(item.id === product.id){
            item.quantity += 1;
            }
        }
        cart = cart;
        count.increment();
        console.log(cart)
        localStorage.setItem("cart", JSON.stringify(cart))
        const selectedProduct =  cart.find(function(e) {
            return e.id == product.id;
            });
        quantity(selectedProduct);
        return;
        
        
          
	}
    const quantity = (product) => {
        let selectedProductQuantity;
        let selectedProduct;
        if (product && product.id && localStorage && localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart, 'localstorage');
        selectedProduct =  cart.find(function(e) {
            return e.id == product.id;
                
            });
            if(selectedProduct && selectedProduct.quantity){
            selectedProductQuantity = selectedProduct.quantity;
            console.log (selectedProductQuantity, 'selectedquantity');
            localStorageQuantity = selectedProductQuantity;
            console.log(localStorageQuantity);
            return localStorageQuantity;
            }
        }
       
           
    }
  $: localStorageQuantity = mounted && quantity(product);
    
</script>
<div class="flex align-middle items-center w-full">
    {#if localStorageQuantity, localStorageQuantity == null}
    <button id="cartButton" class="cartButton rounded-md bg-customGray-800 text-xs text-white py-1 leading-5 {view ? "px-5": "px-4"}" on:click={() => addToCart(product)}>Add to cart</button>
    {:else if localStorageQuantity, localStorageQuantity > 0}
    <button class="rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={() => minusItem(product)}>-</button>
    <div><span class=" w-5 text-center counter block {view ? "mx-9.4px": " mx-5.4px"}">{localStorageQuantity}</span></div>
    <button class="plus-button rounded-md bg-customGray-800 text-base text-white py-2 px-3 leading-3" on:click={() => plusItem(product)}>+</button>
    {/if}
    <figure class="p-2 py-6px ml-3 bg-customGray-150 rounded-md">
        <Wishlist/>
    </figure>
</div>