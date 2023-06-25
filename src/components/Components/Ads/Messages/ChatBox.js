import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useProdavalnikAuth from '../../../../hooks/useProdavalnikAuth'
import Boxes from './Boxes'
import Input from '../../HTML/Input'
import IconSend from '../../../Icons/Send'
import { fetchData, performFetch } from '../../../utils'

export default function ChatBox(props) {
	const { prodavalnikAuth } = useProdavalnikAuth()
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

	const handleInputChange = (value) => {
		setMessage(value)
	}

	const fetchMessages = useCallback(async () => {
		const messageUrl = `https://prodavalnik-api.devlabs-projects.info/messages/${props.adId}`
		await fetchData(messageUrl, headers, setMessages)
	}, [props.adId, headers])

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
				}

				// setMessageBagSuccess({ success: 'Обявата е добавена успешно!' })
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

	return (
		<div className="overflow-auto h-[30rem]">
			<div className="flex h-full w-full flex-row overflow-x-hidden">
				<div className="flex h-full flex-auto flex-col p-4">
					<div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
						<div className="mb-4 flex h-full flex-col overflow-x-auto">
							<div className="flex h-full flex-col">
								<div className="space-y-2">
									<Boxes sentMessages={messages} />
								</div>
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
											handleInputChange(value)
										}
									/>
								</div>
							</div>

							<div className="ml-4">
								<button
									onClick={() => send(props.adId, props.fn)}
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
	)
}
