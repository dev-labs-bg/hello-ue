export default function Element(props) {
	const handleChange = (event) => {
		if (props.onChange) {
			props.onChange(event.target.value)
		}
	}

	return (
		<>
			{props.label ? (
				<label className="block mb-1.5 text-sm font-semibold text-gray-700  text-left ml-0.5">
					{props.label}
				</label>
			) : null}

			<textarea
				id={props.id}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder}
				required
				onChange={handleChange}
				rows={props.rows}
				className={`${props.classes} border border-gray-200 text-gray-700 resize-none text-sm rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 block w-full p-2.5 placeholder-gray-400 transition hover:bg-gray-50 focus:bg-gray-50`}
			/>
		</>
	)
}
