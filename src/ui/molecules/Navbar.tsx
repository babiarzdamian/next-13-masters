import { ShoppingCart as ShoppingCartIcon } from "react-feather";
import { ActiveLink } from "../atoms/ActiveLink";
import { NavbarLogo } from "@/ui/atoms/NavbarLogo";

export const Navbar = () => {
	return (
		<nav
			aria-label="Main Navigation"
			className="min-w-screen relative mx-auto flex max-w-6xl items-center justify-between bg-slate-50 shadow-lg"
		>
			<div className="flex w-full items-center px-4 py-3 md:px-8">
				<NavbarLogo />
				<ul className="h-20 w-full items-center justify-end gap-4 px-4 sm:flex md:px-8">
					<li>
						<ActiveLink
							href="/"
							className="border-b-transparent"
							activeClassName="border-b-orange-300"
							title="Home"
							exact
						/>
					</li>
					<li>
						<ActiveLink
							href="/products"
							className="border-b-transparent"
							activeClassName="border-b-orange-300"
							title="All"
						/>
					</li>
					<li>
						<ActiveLink
							href={{ pathname: "/account", hash: "#orders" }}
							className="border-b-transparent"
							activeClassName="border-b-orange-300"
							title="Account"
						/>
					</li>
					<li>
						<ActiveLink
							href={{
								pathname: "/cart",
								query: { checkout: true },
							}}
							className="border-b-transparent"
							activeClassName="border-b-orange-300"
							title="Shopping Cart"
							icon={<ShoppingCartIcon className="inline-block text-gray-900" aria-hidden />}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
};
