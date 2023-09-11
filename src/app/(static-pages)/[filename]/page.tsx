import { notFound } from "next/navigation";
import { type ComponentType } from "react";

async function StaticPage({ params }: { params: { filename: string } }) {
	const Page = await import(`./${params.filename}.mdx`).then(
		(module: { default: ComponentType }) => module.default,
		() => notFound(),
	);
	return (
		<article className="prose dark:prose-invert">
			<Page />
		</article>
	);
}

export default StaticPage;
