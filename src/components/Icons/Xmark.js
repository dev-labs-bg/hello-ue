const Xmark = ({ className, stroke }) => (
	<svg
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={stroke || '1.6'}
		stroke="currentColor"
		className={className || 'w-6 h-6'}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
)

export default Xmark
