import { ProductList } from "@/ui/organisms/ProductList";
import { products } from "@/data/products";

export default function Home() {

	return <ProductList products={products} />;
}
