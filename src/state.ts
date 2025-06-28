import { signal } from "@preact/signals";
import type { Product } from "./types/Product";

export const isCheckoutModalOpen = signal(false);
export const selectedProduct = signal<Product | null>(null)
export const isSuccessModalOpen = signal(false)
export const successfulOrderNumber = signal("")

console.log({ isCheckoutModalOpen });
console.log({ selectedProduct });

