import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById } from "@/api/products";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	const title = `${product.name} - ShopSel`;
	return {
		title,
		description: `Product ${product.description}`,
		openGraph: {
			title,
			description: `Product ${product.description}`,
			type: "website",
			images: [
				{
					url: product.coverImage.src,
					alt: product.coverImage.alt,
				},
			],
		},
	};
};

export default async function SingleProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<div className="flex flex-col items-center justify-between px-6 py-12 sm:px-12">
				<section className="mx-auto max-w-6xl">
					<h1 className="text-2xl font-bold">{product.name}</h1>
				</section>
				<aside className="mt-12">
					<Suspense fallback={"Loading suggested products..."}>
						<SuggestedProductList />
					</Suspense>
				</aside>
			</div>
		</>
	);
}
