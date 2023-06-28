import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import useAuth from '../../hooks/useAuth'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import Loader from '../Components/Loader'
import Input from '../Components/HTML/Input'
import IconSend from '../Icons/Send'
import { fetchData, performFetch, textSplit } from '../utils'

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
		const currentDate = new Date()
		const date = new Date(time)
		date.setHours(date.getUTCHours() + 3)

		const hour = date.getHours()
		const minutes = date.getMinutes()
		const diffInHours = Math.floor((currentDate - date) / (1000 * 60 * 60))

		let timeString = ''

		if (diffInHours >= 24) {
			const day = date.getDate()
			const month = getMonthName(date.getMonth())
			const formattedDate = `${day} ${month}`
			timeString = formattedDate + ', '
		}

		let hourString = hour.toString()
		let minuteString = minutes.toString()

		if (hour < 10) {
			hourString = '0' + hourString
		}

		if (minutes < 10) {
			minuteString = '0' + minuteString
		}

		return timeString + hourString + ':' + minuteString + 'ч.'
	}

	function getMonthName(monthIndex) {
		const monthNames = [
			'Яну',
			'Фев',
			'Мар',
			'Апр',
			'Май',
			'Юни',
			'Юли',
			'Авг',
			'Сеп',
			'Окт',
			'Ное',
			'Дек',
		]
		return monthNames[monthIndex]
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

	const shownSenders = {}
	console.log(messages)

	return (
		<div className="flex">
			<div className="relative rounded-l-lg bg-white shadow-lg min-h-screen text-gray-600 border border-slate-100 border-r-0">
				<div className="p-3">
					<h3 className="mb-1 text-xs font-semibold uppercase text-gray-400">
						Чат
					</h3>

					<div className="w-[320px] flex flex-col-reverse">
						{Object.values(messages).map((item) =>
							Object.values(item.messages)
								.reverse()
								.map((message, index) => {
									const messageId = item.ad[0]._id
									const senderId = message.from.fn

									if (Number(authUser) !== senderId) {
										if (
											!shownSenders[messageId] ||
											!shownSenders[messageId].includes(
												senderId
											)
										) {
											if (!shownSenders[messageId]) {
												shownSenders[messageId] = [
													senderId,
												]
											} else {
												shownSenders[messageId].push(
													senderId
												)
											}

											return (
												<button
													className="w-full py-2.5 text-left focus:outline-none hover:bg-gray-50 transition px-1.5 border-b border-slate-200"
													key={index}
												>
													<div className="flex items-center">
														<div className="flex h-9 w-11 mr-2 items-center justify-center rounded-full bg-blue-400 text-white font-semibold">
															{message.from.name.charAt(
																0
															)}
														</div>

														<div className="w-full">
															<h4 className="text-sm font-semibold text-gray-800 flex">
																{textSplit(
																	message.from
																		.name,
																	15
																)}{' '}
																-{' '}
																<span className="ml-1 text-sm text-gray-500">
																	{textSplit(
																		item
																			.ad[0]
																			.title,
																		15
																	)}
																</span>
															</h4>

															<div className="w-full text-[12.5px] flex gap-1.5 justify-between items-center">
																<span>
																	{textSplit(
																		message.text,
																		22
																	)}
																</span>

																<span>
																	{getBulgarianTime(
																		message.createdAt
																	)}
																</span>
															</div>
														</div>
													</div>
												</button>
											)
										}
									}

									return null
								})
						)}
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
