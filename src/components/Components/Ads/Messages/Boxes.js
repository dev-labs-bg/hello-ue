export default function Boxes(props) {
	function getBulgarianTime(message) {
		const date = new Date(message)
		date.setHours(date.getUTCHours() + 3)

		let hour = date.getHours()
		let minutes = date.getMinutes()

		if (hour < 10) {
			hour = '0' + hour
		}
		if (minutes < 10) {
			minutes = '0' + minutes
		}

		return hour + ':' + minutes
	}

	return (
		<>
			<div className="w-full flex items-center p-3">
				<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
					E
				</div>

				<div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
					<div>Hey How are you today?</div>
				</div>
			</div>

			{Array.isArray(props.sentMessages) ? (
				props.sentMessages.map((message, index) => (
					<div
						className="flex flex-row-reverse items-center justify-start p-3"
						key={index}
					>
						<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
							{message.from.name.charAt(0)}
						</div>

						<div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
							<div>{message.text}</div>
						</div>

						<div className="mr-2 text-xs italic text-gray-500">
							{getBulgarianTime(message.createdAt)}
						</div>
					</div>
				))
			) : (
				<div>Няма изпратени или получени съобщения </div>
			)}
		</>
	)
}
