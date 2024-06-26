export default function Modal(props) {
	const closeModal = () => {
		props.onClose()
	}

	return (
		<>
			{props.isOpen && (
				<div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-[51]">
					<div className="fixed inset-0 flex 2xl:items-center justify-center overflow-auto">
						<div className="w-full max-w-2xl pt-8">
							<div
								className={`relative bg-white rounded-lg shadow mb-8 ${
									props.cancelButton !== false
										? 'pb-16'
										: 'pb-0'
								}`}
							>
								<div className="flex items-center justify-between py-3 border-b rounded-t mx-4">
									<h3 className="text-xl font-semibold text-gray-700">
										{props.title}
									</h3>

									<button
										type="button"
										className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
										onClick={closeModal}
									>
										<svg
											aria-hidden="true"
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</button>
								</div>

								<div className="py-3 overflow-auto px-4">
									{props.children}
								</div>

								{props.cancelButton !== false && (
									<button
										type="button"
										className="absolute bottom-4 left-28 text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-semibold px-5 py-2.5 hover:text-gray-900 focus:z-10 transition active:scale-95"
										onClick={closeModal}
									>
										Затвори
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
