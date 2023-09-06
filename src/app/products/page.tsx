import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/data/products";

export default function Home() {
	return (
		<>
			<main className="flex flex-col items-center justify-between px-6 py-12 sm:px-12">
				<section className="mx-auto max-w-6xl">
					<ProductList products={products} />
				</section>
			</main>
		</>
	);
}
