import React from "react";

export const generateStaticParams = async ({ params }: { params: { category: string } }) => {
	if (params.category === "t-shirts") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	}
	if (params.category === "boots") {
		return [{ pageNumber: "1" }];
	}
	return [];
};

export default function CategoryProcutPage({
	params,
}: {
	params: { category: string; pageNumber: string };
}) {
	return (
		<h2>
			Produckty z kategorii {params.category}, strona {params.pageNumber}
		</h2>
	);
}
