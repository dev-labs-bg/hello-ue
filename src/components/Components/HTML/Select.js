export default function Element(props) {
	const handleChange = (event) => {
		if (props.onChange) {
			props.onChange(event.target.value)
		}
	}

	return (
		<>
			{props.label ? (
				<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
					{props.label}
				</label>
			) : null}

			<select
				id={props.id}
				name={props.name}
				value={props.value}
				required
				onChange={handleChange}
				className={`${props.classes} border border-gray-200 text-gray-700 text-sm rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 block w-full p-2.5 placeholder-gray-400 peer transition hover:bg-gray-50 focus:bg-gray-50 cursor-pointer`}
			>
				<option hidden>{props.placeholder}</option>

				{props.options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	)
}
