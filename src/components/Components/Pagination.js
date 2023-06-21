import IconArrowRight from '../Icons/ArrowRight'
import IconArrowRightTwo from '../Icons/ArrowRightTwo'
import IconArrowLeft from '../Icons/ArrowLeft'
import IconArrowLeftTwo from '../Icons/ArrowLeftTwo'

export default function Pagination(props) {
	const { currentPage, totalPages, handlePageClick } = props

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			handlePageClick(currentPage + 1)
		}
	}

	const handlePrevPage = () => {
		if (currentPage > 1) {
			handlePageClick(currentPage - 1)
		}
	}

	const pageRange = () => {
		const range = []
		let startPage = Math.max(currentPage - 2, 1)
		let endPage = Math.min(startPage + 4, totalPages)

		if (endPage - startPage < 4) {
			startPage = Math.max(endPage - 4, 1)
		}

		for (let i = startPage; i <= endPage; i++) {
			range.push(i)
		}

		return range
	}

	const handleClick = (page) => {
		handlePageClick(page)
	}

	return totalPages > 1 ? (
		<>
			<ul className="inline-flex -space-x-px">
				<li>
					<button
						disabled={currentPage < 4}
						onClick={() => handleClick(1)}
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 disabled:bg-slate-50 disabled:cursor-not-allowed"
					>
						<IconArrowLeftTwo />
					</button>
				</li>

				<li>
					<button
						disabled={currentPage === 1}
						onClick={handlePrevPage}
						className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 disabled:bg-slate-50 disabled:cursor-not-allowed"
					>
						<IconArrowLeft />
					</button>
				</li>

				{pageRange().map((page) => (
					<li key={page}>
						<button
							onClick={() => handleClick(page)}
							className={`px-4 py-2 leading-tight text-gray-500 border border-gray-300 transition ${
								currentPage === page
									? 'bg-gray-100'
									: 'bg-white hover:bg-gray-100'
							}`}
						>
							{page}
						</button>
					</li>
				))}

				<li>
					<button
						disabled={currentPage === totalPages}
						onClick={handleNextPage}
						className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 disabled:bg-slate-50 disabled:cursor-not-allowed"
					>
						<IconArrowRight />
					</button>
				</li>

				<li>
					<button
						disabled={
							(totalPages < 5 && currentPage === totalPages) ||
							currentPage >= totalPages - 2
						}
						onClick={() => handleClick(totalPages)}
						className="px-3 py-2 flex leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 disabled:bg-slate-50 disabled:cursor-not-allowed"
					>
						<IconArrowRightTwo />
					</button>
				</li>
			</ul>
		</>
	) : null
}
