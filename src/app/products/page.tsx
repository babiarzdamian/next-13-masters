import { getProductList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProductList();

	return (
		<div className="flex flex-col justify-center gap-y-12">
			<ProductList products={products} />
			<Pagination />
		</div>
	);
}
