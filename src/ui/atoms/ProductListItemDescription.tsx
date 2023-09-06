import type { ProductItemProps } from "../types";
import { formatCurrency } from "@/utils";

export const ProductListItemDescription = ({
	product: { category, name, price },
}: {
	product: ProductItemProps;
}) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900 dark:text-gray-100">
				<span className="sr-only">Cena:</span> {formatCurrency(price / 100)}
			</p>
		</div>
	);
};
