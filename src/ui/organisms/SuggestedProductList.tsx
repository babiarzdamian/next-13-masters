import { ProductList } from "./ProductList";
import { getProductList } from "@/api/products";

// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductList = async () => {
	const products = await getProductList();
	// await sleep(5000);
	return (
		<div className="flex flex-col">
			<h2 className="relative mb-12 text-center text-4xl font-bold uppercase after:absolute after:-bottom-4 after:left-1/2 after:block after:h-1 after:w-24 after:-translate-x-1/2 after:bg-orange-300">
				Similar products
			</h2>
			<ProductList products={products.slice(0, 4)} />
		</div>
	);
};
