const Trash = ({ className, outline, stroke }) => (
	<>
		{outline ? (
			<svg
				viewBox="0 0 24 24"
				fill="currentColor"
				className={className || 'w-6 h-6'}
			>
				<path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
			</svg>
		) : (
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
					d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
				/>
			</svg>
		)}
	</>
)

export default Trash
