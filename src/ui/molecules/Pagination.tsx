import { ActiveLink } from "../atoms/ActiveLink";

const paginationBaseClassList =
	"flex w-16 place-content-center rounded-full border-4 hover:border-orange-300";

const pageNumber = 1;

export const Pagination = () => {
	return (
		<div className="mx-auto flex gap-x-4" aria-label="Pagination">
			<ActiveLink
				href={`/products/${pageNumber}`}
				title="1"
				className={`${paginationBaseClassList} border-slate-200`}
				activeClassName={`${paginationBaseClassList} border-orange-300`}
				exact
			/>
			<ActiveLink
				href="/products/2"
				title="2"
				className={`${paginationBaseClassList} border-slate-200`}
				activeClassName={`${paginationBaseClassList} border-orange-300`}
				exact
			/>
		</div>
	);
};
