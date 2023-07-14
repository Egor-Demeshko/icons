import { writable } from "svelte/store"

export const connections = writable();

/**Drawer root */
export const drawRoot = writable('');