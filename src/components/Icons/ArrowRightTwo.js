export default function ArrowRightTwo(props) {
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
				d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
			/>
		</svg>
	)
}
