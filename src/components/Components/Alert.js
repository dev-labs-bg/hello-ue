export default function Alert(props) {
	return (
		<>
			{props.error && (
				<div className="p-4 mb-4 text-sm text-red-700 rounded-lg bg-red-100">
					{Object.keys(props.error).map((key) => (
						<div key={key} className="mb-0.5">
							{props.error[key]}
						</div>
					))}
				</div>
			)}

			{props.success && (
				<div className="p-4 mb-4 text-sm text-green-700 rounded-lg bg-green-100">
					{Object.keys(props.success).map((key) => (
						<div key={key} className="mb-0.5">
							{props.success[key]}
						</div>
					))}
				</div>
			)}
		</>
	)
}
