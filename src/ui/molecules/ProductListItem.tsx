import Link from "next/link";
import type { ProductItemProps } from "../types";
import { ProductListCoverImage } from "@/ui/atoms/ProductListCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";

export const ProductListItem = ({ product }: { product: ProductItemProps }) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductListCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
