export default function ArrowLeftTwo(props) {
	return (
		<svg
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={props.stroke || '2.5'}
			stroke="currentColor"
			className={props.className || 'w-5 h-5'}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
			/>
		</svg>
	)
}
