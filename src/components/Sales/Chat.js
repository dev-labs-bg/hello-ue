import Boxes from '../Components/Ads/Messages/Boxes'
import Input from '../Components/HTML/Input'
import IconSend from '../Icons/Send'

const Chat = () => {
	return (
		<div className="flex">
			<div class="relative max-w-[340px] rounded-l-lg bg-white shadow-lg min-h-screen text-gray-600 border border-slate-100  border-r-0">
				<div class="px-5 py-3">
					<h3 class="mb-1 text-xs font-semibold uppercase text-gray-400">
						Чат
					</h3>

					<div class="divide-y divide-gray-200">
						<button class="w-full py-2 text-left focus:outline-none focus-visible:bg-indigo-50">
							<div class="flex items-center">
								<img
									class="mr-3 flex-shrink-0 items-start rounded-full"
									src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
									width="32"
									height="32"
									alt="Marie Zulfikar"
								/>
								<div>
									<h4 class="text-sm font-semibold text-gray-900">
										Мария Филипова
									</h4>
									<div class="text-[13px]">
										Здравейте, колко струва... · 2ч.
									</div>
								</div>
							</div>
						</button>

						<button class="w-full py-2 text-left focus:outline-none focus-visible:bg-indigo-50">
							<div class="flex items-center">
								<img
									class="mr-3 flex-shrink-0 items-start rounded-full"
									src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg"
									width="32"
									height="32"
									alt="Nhu Cassel"
								/>
								<div>
									<h4 class="text-sm font-semibold text-gray-900">
										Касел Илиева
									</h4>
									<div class="text-[13px]">
										Здравей, какво правиш ? · 24 Мар
									</div>
								</div>
							</div>
						</button>
					</div>
				</div>
			</div>

			<div className="overflow-auto min-h-screen w-full shadow-lg rounded-r-lg border border-slate-100 border-l-0">
				<div className="flex h-full w-full flex-row overflow-x-hidden">
					<div className="flex h-full flex-auto flex-col">
						<div className="flex h-full flex-auto flex-shrink-0 flex-col border-gray-100  bg-white p-4">
							<div className="mb-4 flex h-full flex-col overflow-x-auto">
								<div className="flex h-full flex-col">
									<div className="space-y-2">
										<Boxes />
									</div>
								</div>
							</div>

							<div className="flex h-16 w-full flex-row items-center rounded-lg bg-white py-2 px-3">
								<div className="flex-grow">
									<div className="relative w-full">
										<Input
											// value={message}
											type="text"
											id="message"
											name="message"
											placeholder="Напишете съобщение..."
											// onChange={(value) =>
											// 	handleInputChange(value)
											// }
										/>
									</div>
								</div>

								<div className="ml-4">
									<button
										// onClick={() =>
										// 	send(props.adId, props.fn)
										// }
										className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition active:scale-90"
									>
										<IconSend className="w-5 h-5" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat
