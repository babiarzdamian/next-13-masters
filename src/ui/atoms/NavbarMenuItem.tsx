import Link from "next/link";

type NavItemProps = {
	href: string;
	title: string;
	icon?: React.ReactNode;
	classList?: string;
};

export const NavbarMenuItem = ({ href, title, icon, classList }: NavItemProps) => {
	return (
		<li>
			<Link
				href={href}
				className={`rounded-lg px-4 py-2 font-bold uppercase text-gray-700 ${classList}`}
				aria-label={icon ? title : undefined}
			>
				{icon || title}
			</Link>
		</li>
	);
};
