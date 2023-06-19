const ArrowLeftTwo = ({ className, stroke }) => (
	<svg
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={stroke || '2.5'}
		stroke="currentColor"
		className={className || 'w-5 h-5'}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
		/>
	</svg>
)

export default ArrowLeftTwo
