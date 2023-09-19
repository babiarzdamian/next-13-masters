import React from "react";
import clsx from "clsx";
import { type ProductItemColorVariant } from "../types";

type ProductColorVariantPickerProps = {
	variants: ProductItemColorVariant[];
};

export const ProductColorVariantPicker = ({ variants }: ProductColorVariantPickerProps) => {
	return (
		<ul className="flex min-w-max flex-row gap-2">
			{variants.map(({ name, color }, index) => {
				const active = index === 0;
				return (
					<li key={name}>
						<button
							type="button"
							className={clsx(
								"rounded-full border-2 hover:border-orange-400",
								active ? "border-orange-400" : "border-transparent",
							)}
						>
							<span className="sr-only">{name}</span>
							<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24">
								<circle cx="12" cy="12" r="10" fill={color} />
							</svg>
						</button>
					</li>
				);
			})}
		</ul>
	);
};
