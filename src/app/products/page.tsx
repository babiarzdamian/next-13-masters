import { getProductList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function ProductsPage() {
	const products = await getProductList(4);

	return (
		<div className="flex flex-col justify-center gap-y-12">
			<ProductList products={products} />
		</div>
	);
}
