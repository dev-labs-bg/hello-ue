export default function Input(props) {
	const handleChange = (event) => {
		if (props.onChange) {
			props.onChange(event.target.value)
		}
	}

	return (
		<>
			<label
				htmlFor={props.for}
				className="block mb-1.5 text-sm font-medium text-gray-700"
			>
				{props.label}
			</label>

			<input
				id={props.id}
				type={props.type}
				name={props.name}
				value={props.value}
				placeholder={props.placeholder}
				required
				onChange={handleChange}
				className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 focus:border-gray-400 focus:outline-none"
			/>

			{props.error && (
				<p className="text-red-500 text-sm mt-1">{props.error}</p>
			)}
		</>
	)
}
