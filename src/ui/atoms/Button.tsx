import { type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "primary" | "secondary";
	glow?: boolean;
	iconStart?: ReactNode;
	iconEnd?: ReactNode;
	children: ReactNode;
};

export const Button = ({
	variant,
	glow,
	iconStart,
	iconEnd,
	className,
	children,
	...rest
}: ButtonProps) => {
	return (
		<button
			className={clsx([
				"flex items-center justify-center gap-x-4 rounded-full px-4 py-3 font-bold uppercase tracking-widest text-white",
				{
					"bg-orange-400 hover:bg-opacity-80": variant === "primary",
					"bg-gray-300 hover:bg-gray-400": variant === "secondary",
					"shadow-2xl shadow-orange-400": glow,
				},
				className,
			])}
			{...rest}
		>
			{iconStart && <span aria-hidden>{iconStart}</span>}
			{children}
			{iconEnd && <span aria-hidden>{iconEnd}</span>}
		</button>
	);
};
