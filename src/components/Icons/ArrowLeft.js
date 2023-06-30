export default function ArrowLeft(props) {
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
				d="M15.75 19.5L8.25 12l7.5-7.5"
			/>
		</svg>
	)
}
