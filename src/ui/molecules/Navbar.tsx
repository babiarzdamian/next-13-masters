import { ShoppingCart as ShoppingCartIcon } from "react-feather";
import { NavbarLogo } from "@/ui/atoms/NavbarLogo";
import { NavbarMenuItem } from "@/ui/atoms/NavbarMenuItem";

export const Navbar = () => {
	return (
		<nav className="min-w-screen relative mx-auto flex max-w-6xl items-center justify-between bg-slate-50 shadow-lg">
			<div className="flex w-full items-center px-4 py-3 md:px-8">
				<NavbarLogo />
				<ul className="h-20 w-full items-center justify-end gap-4 px-4 sm:flex md:px-8">
					<NavbarMenuItem href="/account" title="Account" />
					<NavbarMenuItem
						href="/cart"
						title="Shopping Cart"
						icon={<ShoppingCartIcon className="text-gray-900" aria-hidden />}
					/>
				</ul>
			</div>
		</nav>
	);
};
