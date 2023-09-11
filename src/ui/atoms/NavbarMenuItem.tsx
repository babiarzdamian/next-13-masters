"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type Route } from "next";

type NavItemProps = {
	href: Route;
	title: string;
	icon?: React.ReactNode;
	className?: string;
};

export const NavbarMenuItem = ({ href, title, icon, className }: NavItemProps) => {
	const pathname = usePathname();
	const isActive = pathname.split("/")[1] === href.split("/")[1];

	return (
		<li>
			<Link
				href={href}
				className={clsx(
					"border-b-4 px-4 py-4 font-bold uppercase text-gray-700 hover:border-b-orange-300",
					isActive ? `border-b-orange-300` : `border-b-transparent`,
					className,
				)}
				aria-label={icon ? title : undefined}
			>
				{icon || title}
			</Link>
		</li>
	);
};
