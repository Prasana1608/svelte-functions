import { writable } from 'svelte/store';

export function counter(value = 0) {
	const { update, subscribe } = writable(value);
	return {
		subscribe, 
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
	};
	
}
export function cartcounter(cvalue = 0) {
	const { update, subscribe } = writable(cvalue);
	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
	};
}