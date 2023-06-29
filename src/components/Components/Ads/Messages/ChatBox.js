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
					setMessage('')
				}
			} catch (err) {
				console.log(err)
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

	return (
		<div className="overflow-auto h-[30rem]">
			<div className="flex h-full w-full flex-row overflow-x-hidden">
				<div className="flex h-full flex-auto flex-col">
					<div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-xl bg-gray-50">
						<div className="mb-4 flex h-full flex-col overflow-x-auto">
							<div className="flex h-full flex-col p-2.5">
								<div className="space-y-2 h-full">
									<Boxes sentMessages={messages} />
								</div>
							</div>
						</div>
						<div className="flex h-16 w-full flex-row items-center bg-slate-50 py-2.5 px-3 border-t border-slate-200">
							<div className="flex-grow">
								<div className="relative w-full">
									<Input
										value={message}
										type="text"
										id="message"
										name="message"
										placeholder="Напишете съобщение..."
										onChange={(value) => setMessage(value)}
										onKeyDown={handleKeyDown}
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
