import { Suspense } from "react";
import { type Metadata } from "next";
import {
	CheckCircle as CheckCircleIcon,
	ShoppingCart as ShoppingCartIcon,
	Heart as HeartIcon,
	MessageSquare as MessageSquareIcon,
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
} from "react-feather";

import { getProductById } from "@/api/products";
import { SuggestedProductList } from "@/ui/organisms/SuggestedProductList";
import { formatCurrency } from "@/utils";
import { Button } from "@/ui/atoms/Button";
import { ProductCounter } from "@/ui/molecules/ProductCounter";
import { ProductColorVariantPicker } from "@/ui/molecules/ProductColorVariantPicker";
import { productColorVariants } from "@/data/products";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	const title = `${product.name} - ShopSel`;
	return {
		title,
		description: `${product.description}`,
		openGraph: {
			title,
			description: `${product.description}`,
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
			<article className="mx-auto mt-12">
				<section className="grid grid-cols-1 place-items-start gap-x-8 md:grid-cols-2">
					<div className="order-1 md:order-2">
						<h1 className="relative mb-3 text-4xl font-bold uppercase tracking-widest after:absolute after:-bottom-4 after:block after:h-1 after:w-24 after:bg-orange-300">
							{product.name}
						</h1>
						<div className="my-12 text-sm text-green-600">
							<CheckCircleIcon className="me-2 inline" />
							Available
						</div>
						<div className="flex flex-col bg-gray-100 px-8 pb-8 pt-5">
							<div className="flex flex-1 flex-wrap items-center gap-8">
								<ProductCounter max={10} />
								<ProductColorVariantPicker variants={productColorVariants} />
							</div>
							<hr className="my-8 border-gray-200" />
							<div className="flex flex-row flex-wrap items-center gap-4">
								<p className="flex-1 text-4xl font-bold">{formatCurrency(product.price)}</p>
								<Button
									className="min-w-max flex-1"
									variant="primary"
									iconStart={<ShoppingCartIcon />}
									glow
								>
									Add to Cart
								</Button>
							</div>
						</div>
						<table className="mt-12 w-full table-auto border-collapse text-sm">
							<tbody>
								<tr>
									<td className="border-b py-3 text-left text-slate-400">Product SKU</td>
									<td className="border-b py-3 text-right text-slate-400">00000000000</td>
								</tr>
								<tr>
									<td className="border-b py-3 text-left text-slate-400">Brand</td>
									<td className="border-b py-3 text-right text-slate-400">Pellentesque Ipsum</td>
								</tr>
								<tr>
									<td className="border-b py-3 text-left text-slate-400">Category</td>
									<td className="border-b py-3 text-right text-slate-400">Lorem Justo</td>
								</tr>
								<tr>
									<td className="border-b py-3 text-left text-slate-400">Material</td>
									<td className="border-b py-3 text-right text-slate-400">
										Sollicitudin Sem Malesuada
									</td>
								</tr>
								<tr>
									<td className="border-b py-3 text-left text-slate-400">Country of Origin</td>
									<td className="border-b py-3 text-right text-slate-400">Vestibulum</td>
								</tr>
							</tbody>
						</table>
						<div className="mt-12 flex items-center justify-between">
							<ul className="flex gap-8 text-slate-400">
								<li>
									<a href="#!" className="flex items-center gap-3 uppercase hover:underline">
										<HeartIcon className="h-5" /> add to wish list
									</a>
								</li>
								<li>
									<a href="#!" className="flex items-center gap-3 uppercase hover:underline">
										<MessageSquareIcon className="h-5" /> send to a friend
									</a>
								</li>
							</ul>
							<ul className="flex gap-4 text-white">
								<li className="rounded bg-[#4267B2] p-1">
									<a href="#!">
										<FacebookIcon className="h-5" />
									</a>
								</li>
								<li className="rounded bg-[#E1306C] p-1">
									<a href="#!">
										<InstagramIcon className="h-5" />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="relative order-2 mb-12 border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200 md:order-1">
						<div className="absolute left-5 top-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-400 p-4 font-bold uppercase text-white">
							New
						</div>
						<img
							src={product.coverImage.src}
							alt={product.coverImage.alt}
							className="aspect-square w-full object-contain"
						/>
					</div>
				</section>
				<section className="mt-12">
					<h2 className="text-2xl font-bold uppercase tracking-widest">Description</h2>
					<p className="mt-4 columns-1 gap-x-8 text-slate-500 sm:columns-2">
						{product.description}
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores iure facilis minus?
						Ullam corporis earum nobis ea? Rerum beatae temporibus voluptatem harum eaque pariatur
						voluptate similique! Voluptate ratione quos asperiores? Lorem ipsum dolor sit amet
						consectetur, adipisicing elit. Quo hic voluptatibus non dolorem laborum blanditiis,
						animi quos necessitatibus dolorum culpa beatae id alias totam, perspiciatis omnis
						inventore repellendus recusandae! Reiciendis numquam autem doloremque porro molestias
						ducimus. Repudiandae voluptatibus tempore, ratione fugit delectus perferendis! Dolorem
						aliquam recusandae harum error libero assumenda laboriosam, atque, eos asperiores,
						consequuntur suscipit et quas qui omnis iure. Reprehenderit in explicabo non repellendus
						exercitationem veniam reiciendis! Aut perferendis iste optio voluptas cumque repudiandae
						officiis error qui unde recusandae quas numquam, omnis impedit id, soluta reiciendis
						vero. Voluptas temporibus minima labore aliquid corporis cum distinctio eos repudiandae
						dolorem, suscipit excepturi quae autem, sequi, aperiam eaque sed accusantium architecto
						omnis exercitationem vitae?
					</p>
				</section>
			</article>
			<aside className="bleed my-12 h-24 bg-orange-400 shadow-orange-400"></aside>
			<aside className="mt-12 flex">
				<Suspense fallback={"Loading suggested products..."}>
					<SuggestedProductList />
				</Suspense>
			</aside>
		</>
	);
}
