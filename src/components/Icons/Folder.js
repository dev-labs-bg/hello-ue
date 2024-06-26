export default function Folder(props) {
	return (
		<>
			{props.outline ? (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					className={props.className || 'w-6 h-6 mx-auto'}
				>
					<path d="M19.5 21a3 3 0 003-3v-4.5a3 3 0 00-3-3h-15a3 3 0 00-3 3V18a3 3 0 003 3h15zM1.5 10.146V6a3 3 0 013-3h5.379a2.25 2.25 0 011.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 013 3v1.146A4.483 4.483 0 0019.5 9h-15a4.483 4.483 0 00-3 1.146z" />
				</svg>
			) : (
				<svg
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={props.stroke || '1.6'}
					stroke="currentColor"
					className={props.className || 'w-6 h-6'}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
					/>
				</svg>
			)}
		</>
	)
}
