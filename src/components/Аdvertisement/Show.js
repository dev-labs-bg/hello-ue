import React, { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { currencyFormat } from '../utils'
import * as MyPOSEmbedded from 'mypos-embedded-checkout'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import useAuth from '../../hooks/useAuth'
import Loader from '../Components/Loader'
import { fetchData } from '../utils'

export default function Show() {
	const _id = useParams().id
	const { prodavalnikAuth } = useProdavalnikAuth()
	const { auth } = useAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [isPaymentProcess, setIsPaymentProcess] = useState(false)
	const [isBought, setIsBought] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [advertisement, setAdvertisement] = useState(null)
	const [messageBag, setMessageBag] = useState(null)
	const headers = useMemo(() => {
		return {
			user: prodavalnikAuth,
		}
	}, [prodavalnikAuth])

	const buyBook = async () => {
		setIsPaymentProcess(true)

		var paymentParams = {
			sid: '000000000000010',
			walletNumber: '61938166610',
			amount: advertisement.price,
			currency: 'BGN',
			orderID: `${advertisement._id}.${
				auth.data.faculty_number
			}.${Math.random().toString(36).substr(2, 9)}`,
			urlNotify: 'https://prodavalnik-api.devlabs-projects.info/checkout',
			keyIndex: 1,
			cartItems: [
				{
					article: advertisement.title,
					quantity: 1,
					price: advertisement.price,
					currency: 'BGN',
				},
			],
		}

		var callbackParams = {
			isSandbox: true,
			onSuccess: function (data) {
				setIsSaving(true)
				setMessageBag({ success: 'Успешно закупихте учебника!' })
				setIsBought(true)
			},
			onError: function () {
				setMessageBag({
					error: 'Възникна грешка при закупуването на учебника.',
				})
			},
		}

		MyPOSEmbedded.createPayment(
			'myPOSEmbeddedCheckout',
			paymentParams,
			callbackParams
		)
	}

	useEffect(() => {
		if (prodavalnikAuth) {
			const fetchAdvertisement = async () => {
				const advertisementUrl = `https://prodavalnik-api.devlabs-projects.info/ads/${_id}`
				await fetchData(advertisementUrl, headers, setAdvertisement)
				setIsLoading(false)
			}

			fetchAdvertisement()
		}
	}, [prodavalnikAuth, _id, headers])

	return (
		<div id="myPOSEmbeddedCheckout">
			{isLoading ? (
				<Loader />
			) : (
				advertisement && (
					<>
						{messageBag &&
							Object.keys(messageBag).map((key) => (
								<div className="fixed w-80 md:w-[30rem] top-6 left-1/2 transform -translate-x-1/2 z-50 p-4 mb-4 text-sm text-green-700 rounded-lg bg-green-100 font-semibold">
									{messageBag[key]}
								</div>
							))}

						<section className="flex items-center justify-center pt-20 sm:pt-0 pb-6 sm:pb-0 min-h-screen body-font overflow-hidden bg-[#edf2f7] text-gray-700">
							<div className="relative mx-auto flex flex-wrap md:w-4/5 shadow-lg border bg-white border-slate-100 p-6 pt-14">
								<Link
									to="/sales/advertisements"
									className="absolute left-6 top-3 ml-auto flex rounded bg-blue-500 px-5 py-1.5 text-white hover:bg-blue-600 transition focus:outline-none"
								>
									Обратно в списъка
								</Link>

								<div className="w-full md:w-2/5 border rounded p-5">
									<img
										src={advertisement.imageUrl}
										alt={advertisement.title}
										className="w-full object-cover"
									/>
								</div>

								<div className="mt-6 w-full md:mt-0 md:w-3/5 md:py-6 md:pl-10">
									<div className="w-full flex justify-start">
										<span className="rounded bg-green-100 px-2.5 py-0.5 text-[13px] font-medium text-green-700 mb-1">
											{advertisement.category}
										</span>
									</div>

									<h1 className="title-font text-left mb-1 text-3xl font-medium text-gray-700">
										{advertisement.title}
									</h1>

									<p className="leading-relaxed text-justify">
										{advertisement.description}
									</p>
									<div className="my-4 flex items-center border-b-2 border-gray-200 pb-5">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-400 pb-0.5 font-semibold text-white">
											{advertisement.author.name.charAt(
												0
											)}
										</div>
										<div className="ml-2 font-semibold text-gray-700">
											{advertisement.author.name}
										</div>
									</div>
									<div className="flex">
										<span className="title-font text-2xl font-medium text-gray-700">
											Цена:{' '}
											{currencyFormat(
												advertisement.price
											)}
											лв.
										</span>

										{!advertisement.bought && !isBought && (
											<button
												onClick={buyBook}
												disabled={isSaving}
												className="ml-auto flex rounded bg-blue-500 px-5 py-1.5 text-white hover:bg-blue-600 transition focus:outline-none"
											>
												Купи
											</button>
										)}
									</div>
								</div>
							</div>
						</section>
					</>
				)
			)}
		</div>
	)
}
