import { useState } from "react";

export const ProductCounter = () => {
	const [count, setCount] = useState(1);

	return (
		<div>
			<button
				onClick={() => setCount((count) => count - 1)}
				className="rounded-l bg-gray-200 px-2 py-1 text-gray-600"
			>
				-
			</button>
			<input readOnly min={0} className="bg-gray-200 px-2 py-1 text-gray-600" value={count} />
			<button
				onClick={() => setCount((count) => count + 1)}
				className="rounded-r bg-gray-200 px-2 py-1 text-gray-600"
			>
				+
			</button>
		</div>
	);
};
