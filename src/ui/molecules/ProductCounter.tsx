"use client";

import { useState } from "react";
import { ProductCounterButton } from "../atoms/ProductCounterButton";

type ProductCounterProps = {
	max: number;
};

export const ProductCounter = ({ max }: ProductCounterProps) => {
	const [count, setCount] = useState(1);

	if (count < 1) setCount(1);
	if (count > max) setCount(max);

	return (
		<div className="min-w-max">
			<ProductCounterButton disabled={count === 1} onClick={() => setCount((count) => count - 1)}>
				-
			</ProductCounterButton>
			<input
				readOnly
				className="w-12 bg-white px-0 py-3 text-center text-gray-600 focus:outline-none"
				value={count}
			/>
			<ProductCounterButton disabled={count === max} onClick={() => setCount((count) => count + 1)}>
				+
			</ProductCounterButton>
		</div>
	);
};
