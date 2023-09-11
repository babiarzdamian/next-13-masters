import { type ProductItemProps } from "@/ui/types";

type ProoductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const data = (await res.json()) as ProoductResponseItem[];

	const products = data.map(productResponseItemToProductToProductItemProps);

	return products;
};

export const getProductById = async (id: ProductItemProps["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProoductResponseItem;

	return productResponseItemToProductToProductItemProps(productResponse);
};

const productResponseItemToProductToProductItemProps = (
	product: ProoductResponseItem,
): ProductItemProps => {
	return {
		id: product.id,
		name: product.title,
		description: product.description,
		price: product.price,
		category: product.category,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
};
