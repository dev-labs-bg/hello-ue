import { Button } from '@chakra-ui/react'

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

	return (
		<div className="pagination">
			<Button
				isDisabled={currentPage < 4}
				onClick={() => handleClick(1)}
				sx={{ marginRight: '10px' }}
			>
				Първа
			</Button>

			<Button
				isDisabled={currentPage === 1}
				onClick={handlePrevPage}
				sx={{ marginRight: '10px' }}
			>
				Предишна
			</Button>

			{pageRange().map((page) => (
				<Button
					key={page}
					onClick={() => handleClick(page)}
					variant={currentPage === page ? 'solid' : 'outline'}
					sx={{ marginRight: '10px' }}
				>
					{page}
				</Button>
			))}

			<Button
				isDisabled={currentPage === totalPages}
				onClick={handleNextPage}
				sx={{ marginRight: '10px' }}
			>
				Следваща
			</Button>

			<Button
				isDisabled={
					currentPage === totalPages || currentPage >= totalPages - 2
				}
				onClick={() => handleClick(totalPages)}
			>
				Последна
			</Button>
		</div>
	)
}
