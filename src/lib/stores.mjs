import { writable } from "svelte/store";

export const userStore = writable({ isLoggedIn: false, user: {} });

export const route = writable(document.location.hash || "#home");
