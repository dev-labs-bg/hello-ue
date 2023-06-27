import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import useAuth from '../../hooks/useAuth'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import Loader from '../Components/Loader'
import Input from '../Components/HTML/Input'
import IconSend from '../Icons/Send'

import { fetchData, performFetch } from '../utils'

const Chat = (props) => {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [sentMessages, setSentMessages] = useState([])
	const [message, setMessage] = useState('')
	const [messages, setMessages] = useState('')
	const headers = useMemo(
		() => ({
			user: prodavalnikAuth,
		}),
		[prodavalnikAuth]
	)

	const headersJSON = useMemo(
		() => ({
			'Content-Type': 'application/json',
			user: prodavalnikAuth,
		}),
		[prodavalnikAuth]
	)

	const fetchMessages = useCallback(async () => {
		const messageUrl =
			'https://prodavalnik-api.devlabs-projects.info/messages/'
		await fetchData(messageUrl, headers, setMessages)
	}, [headers])

	const send = useCallback(
		async (adId, fn) => {
			try {
				const payload = {
					to: fn,
					text: message,
				}

				if (message) {
					await performFetch(
						`https://prodavalnik-api.devlabs-projects.info/messages/${adId}`,
						'POST',
						headersJSON,
						JSON.stringify(payload)
					)

					fetchMessages()
					setMessage('')
				}
			} catch (err) {
				// setMessageBagError({
				//   error: 'Възникна грешка при добавянето на обявата.',
				// })
			}
		},
		[message, headersJSON, fetchMessages]
	)

	useEffect(() => {
		if (prodavalnikAuth) {
			fetchMessages()
		}
	}, [prodavalnikAuth, fetchMessages])

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			send(props.adId, props.fn)
		}
	}

	const authUser = useAuth().auth.data.faculty_number
	const messagesEndRef = useRef(null)
	const [isLoading, setIsLoading] = useState(true)

	function getBulgarianTime(time) {
		const date = new Date(time)
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

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [props.sentMessages])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 1000)
	}, [])

	console.log(messages)

	return (
		<div className="flex">
			<div className="relative max-w-[340px] rounded-l-lg bg-white shadow-lg min-h-screen text-gray-600 border border-slate-100 border-r-0">
				<div className="px-5 py-3">
					<h3 className="mb-1 text-xs font-semibold uppercase text-gray-400">
						Чат
					</h3>

					<div className="divide-y divide-gray-200">
						{Object.values(messages).map((item) =>
							Object.values(item.messages).map((message) => (
								<button className="w-full py-2 text-left focus:outline-none focus-visible:bg-indigo-50">
									{item.messages._id}
									<div className="flex items-center">
										<img
											className="mr-3 flex-shrink-0 items-start rounded-full"
											src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-01_pfck4u.jpg"
											width="32"
											height="32"
											alt="Marie Zulfikar"
										/>
										<div>
											<h4 className="text-sm font-semibold text-gray-900">
												Мария Филипова
											</h4>
											<div className="text-[13px]">
												Здравейте, колко струва... · 2ч.
											</div>
										</div>
									</div>
								</button>
							))
						)}

						<button className="w-full py-2 text-left focus:outline-none focus-visible:bg-indigo-50">
							<div className="flex items-center">
								<img
									className="mr-3 flex-shrink-0 items-start rounded-full"
									src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-32-02_vll8uv.jpg"
									width="32"
									height="32"
									alt="Nhu Cassel"
								/>
								<div>
									<h4 className="text-sm font-semibold text-gray-900">
										Касел Илиева
									</h4>
									<div className="text-[13px]">
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
									<div className="space-y-2"></div>
								</div>
							</div>

							<div className="flex h-16 w-full flex-row items-center rounded-lg bg-white py-2 px-3">
								<div className="flex-grow">
									<div className="relative w-full">
										<Input
											value={message}
											type="text"
											id="message"
											name="message"
											placeholder="Напишете съобщение..."
											onChange={(value) =>
												setMessage(value)
											}
										/>
									</div>
								</div>

								<div className="ml-4">
									<button
										onClick={() =>
											send(props.adId, props.fn)
										}
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
