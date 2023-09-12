"use client";

import { type UrlObject } from "url";
import Link from "next/link";
import { type Route } from "next";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function ActiveLink<T extends string>({
	href,
	title,
	icon,
	className,
	activeClassName,
	exact = false,
}: {
	href: Route<T> | UrlObject;
	title: string;
	icon?: React.ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) {
	const pathname = usePathname();
	const basePathnameString = pathname.split("/").filter(Boolean)[0];
	let isActive = false;

	if (typeof href === "string") {
		isActive = exact ? pathname === href : href.indexOf(basePathnameString) !== -1;
	}

	if (typeof href === "object" && href.pathname) {
		isActive = exact
			? pathname === href.pathname
			: href.pathname.indexOf(basePathnameString) !== -1;
	}

	return (
		<Link
			href={href}
			className={clsx(
				"border-b-4 px-4 py-4 font-bold uppercase text-gray-700 hover:border-b-orange-300",
				isActive ? activeClassName : className,
			)}
			aria-label={icon ? title : undefined}
		>
			{icon || title}
		</Link>
	);
}
