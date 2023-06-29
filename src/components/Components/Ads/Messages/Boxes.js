import React, { useRef, useEffect, useState } from 'react'
import useAuth from '../../../../hooks/useAuth'
import Loader from '../../Loader'
import { getBulgarianTime } from '../../../utils'

export default function Boxes(props) {
	const authUser = useAuth().auth.data.faculty_number
	const messagesEndRef = useRef(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [props.sentMessages])

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false)
		}, 800)
	}, [])

	return isLoading ? (
		<Loader />
	) : (
		<>
			{props.sentMessages.length ? (
				props.sentMessages.map((message, index) =>
					Number(authUser) === message.to.fn ||
					Number(authUser) === message.from.fn ? (
						Number(authUser) === message.from.fn ? (
							<div
								className="flex flex-row-reverse items-center justify-start p-2"
								key={index}
							>
								<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
									{message.from.name.charAt(0) ??
										message.to.name.charAt(0)}
								</div>

								<div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
									{message.text}
								</div>

								<div className="mr-2 text-xs italic text-gray-500">
									{getBulgarianTime(message.createdAt)}
								</div>
							</div>
						) : (
							<div
								className="w-full flex items-center p-2"
								key={index}
							>
								<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
									{message.from.name.charAt(0) ??
										message.to.name.charAt(0)}
								</div>

								<div className="text-left ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow ">
									{message.text}
								</div>

								<div className="ml-2 text-xs italic text-gray-500">
									{getBulgarianTime(message.createdAt)}
								</div>
							</div>
						)
					) : (
						index === 1 && (
							<div className="flex items-center justify-center h-full w-full">
								Няма изпратени или получени съобщения
							</div>
						)
					)
				)
			) : (
				<div className="flex items-center justify-center h-full w-full">
					Няма изпратени или получени съобщения
				</div>
			)}

			<div ref={messagesEndRef} />
		</>
	)
}
