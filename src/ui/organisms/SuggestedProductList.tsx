import { ProductList } from "./ProductList";
import { getProductList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductList = async () => {
	const products = await getProductList();
	await sleep(5000);
	return <ProductList products={products.slice(0, 4)} />;
};
