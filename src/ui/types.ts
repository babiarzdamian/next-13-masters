export type ProductItemProps = {
	id: string;
	name: string;
	description?: string;
	category: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};
