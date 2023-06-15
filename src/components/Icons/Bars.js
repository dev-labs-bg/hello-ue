const Bars = ({ className, stroke }) => (
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
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
)

export default Bars
