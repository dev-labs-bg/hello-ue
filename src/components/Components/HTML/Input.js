export default function Input(props) {
	const handleChange = (event) => {
		if (props.onChange) {
			props.onChange(event.target.value)
		}
	}

	const handleKeyDown = (event) => {
		if (props.onKeyDown) {
			props.onKeyDown(event)
		}
	}

	return (
		<>
			<span>
				{props.label ? (
					<label className="block mb-1.5 text-sm font-semibold text-gray-700  text-left ml-0.5">
						{props.label}
					</label>
				) : null}

				<input
					id={props.id}
					type={props.type}
					name={props.name}
					value={props.value}
					placeholder={props.placeholder}
					required
					onChange={handleChange}
					onKeyDown={handleKeyDown}
					className={`${props.classes} border border-gray-200 text-gray-700 text-sm rounded-md focus:outline-none focus:ring-0 focus:border-gray-400 block w-full p-2.5 placeholder-gray-400 transition hover:border-gray-400`}
				/>

				{props.error && (
					<p className="text-red-500 text-sm mt-1">{props.error}</p>
				)}
			</span>
		</>
	)
}
