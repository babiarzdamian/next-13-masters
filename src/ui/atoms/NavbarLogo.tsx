import Image from "next/image";
import Link from "next/link";

export const NavbarLogo = () => {
	return (
		<Link href="/">
			<Image src="/images/logo.png" alt="Amber Logo" width={190} height={45} />
		</Link>
	);
};
