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
				className="block mb-1.5 text-sm font-semibold text-gray-700"
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
				className={`${props.classes} border border-gray-200 text-gray-700 text-sm rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 block w-full p-2.5 placeholder-gray-400 transition hover:bg-gray-50 focus:bg-gray-50`}
			/>

			{props.error && (
				<p className="text-red-500 text-sm mt-1">{props.error}</p>
			)}
		</>
	)
}
