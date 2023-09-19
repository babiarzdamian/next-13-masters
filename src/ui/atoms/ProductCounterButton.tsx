import clsx from "clsx";

type ProductCounterButtonProps = {
	disabled: boolean;
	onClick: () => void;
	children: React.ReactNode;
};

export const ProductCounterButton = ({
	disabled,
	onClick,
	children,
}: ProductCounterButtonProps) => {
	return (
		<button
			type="button"
			disabled={disabled}
			onClick={onClick}
			className={clsx([
				"inline-block bg-white px-5 py-3 text-gray-600",
				{ "bg-gray-50": disabled },
			])}
		>
			{children}
		</button>
	);
};
