import { getProductList } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function CategoryProcutPage({ params }: { params: { pageNumber: string } }) {
	const products = await getProductList(20, (Number(params.pageNumber) - 1) * 20);
	return (
		<div className="flex flex-col justify-center gap-y-12">
			<ProductList products={products} />
			<Pagination />
		</div>
	);
}
