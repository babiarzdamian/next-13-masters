import type { ProductItemProps } from "@/ui/types";

export const products: ProductItemProps[] = [
	{
		id: "1",
		name: "Product 1",
		category: "Category 1",
		price: 1000,
		coverImage: {
			src: "/images/products/photo-1481349518771-20055b2a7b24.avif",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		category: "Category 2",
		price: 2000,
		coverImage: {
			src: "/images/products/photo-1523992038393-d5ab874a077e.avif",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		category: "Category 3",
		price: 3000,
		coverImage: {
			src: "/images/products/photo-1523049673857-eb18f1d7b578.avif",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		category: "Category 4",
		price: 4000,
		coverImage: {
			src: "/images/products/photo-1567653418876-5bb0e566e1c2.avif",
			alt: "Product 4",
		},
	},
];
