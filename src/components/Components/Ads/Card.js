import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { textSplit, calculateExpiration, currencyFormat } from '../../utils'
import IconCart from '../../Icons/Cart'
import IconTrash from '../../Icons/Trash'
import IconChatBubble from '../../Icons/ChatBubble'
import IconSend from '../../Icons/Send'
import Edit from './Edit'
import Modal from '../Modal'
import Input from '../HTML/Input'

export default function Card(props) {
	const [isOpenMessageModal, setIsOpenMessageModal] = useState()
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState()
	const [adId, setAdId] = useState(null)
	const [message, setMessage] = useState({ message: '' })

	const toggleMessageModal = () => {
		setIsOpenMessageModal(!isOpenMessageModal)
	}

	const toggleDeleteModal = () => {
		setIsOpenDeleteModal(!isOpenDeleteModal)
	}

	const handleUpdateSuccess = () => {
		props.onUpdateSuccess()
	}

	const handleModal = (adId) => {
		setAdId(adId)
	}

	const sendMessage = async (fn, message) => {
		console.log(fn, message)
	}

	const handleInputChange = (name, value) => {
		setMessage((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	return props.ads.map((ad, index) => (
		<div
			key={index}
			className="relative w-full p-5 bg-white rounded-lg shadow-lg border border-slate-100"
		>
			{props.isLoading ? (
				<>
					<div className="w-full sm:w-72 h-64 flex items-center justify-center bg-gray-300 rounded animate-pulse">
						<svg
							className="w-12 h-12 text-gray-200"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 640 512"
						>
							<path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
						</svg>
					</div>

					<div className="mt-4">
						<div className="h-2.5 bg-gray-200 rounded-full animate-pulse w-48 mb-4 mx-auto" />
						<div className="h-2 bg-gray-200 rounded-full animate-pulse w-48 mb-2.5 mx-auto" />
						<div className="h-2 bg-gray-200 rounded-full animate-pulse mb-2.5 mx-auto" />
						<div className="h-2 bg-gray-200 rounded-full animate-pulse mb-2.5 mx-auto" />

						<div className="flex items-center mt-3 space-x-2.5">
							<svg
								className="text-gray-200 w-8 h-8"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
									clipRule="evenodd"
								/>
							</svg>

							<div>
								<div className="h-2 bg-gray-200 rounded-full w-32" />
							</div>
						</div>

						<div className="mt-4 mb-2 flex items-center justify-between gap-3">
							<p className="h-2 bg-gray-200 rounded-full w-32" />

							<div className="flex gap-3">
								<div className="bg-gray-200 w-10 h-10 rounded-lg shadow" />

								<div className="bg-gray-200 w-10 h-10 rounded-lg shadow" />
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="absolute right-7 top-7 bg-green-100 text-green-800 text-[13px] font-semibold px-3 py-1 rounded text-left">
						{ad.category}
					</div>

					<img
						className="w-full sm:w-72 h-64 object-cover rounded-md shadow"
						src={ad.imageUrl}
						alt={ad.title}
					/>
					<div className="mt-3">
						<h1 className="text-xl font-bold text-gray-700">
							{ad.title}
						</h1>

						<p className="text-sm mt-2 text-gray-700 font-semibold">
							{calculateExpiration(
								ad.createdAt,
								ad.expiration,
								false
							)}
						</p>

						<p className="text-sm mt-2 text-gray-700">
							{textSplit(ad.description, 35)}
						</p>

						<div className="mt-3 flex items-center p-1">
							<div className="w-8 h-8 bg-blue-400 text-white rounded-full font-semibold flex justify-center items-center pb-0.5">
								{ad.author.name.charAt(0)}
							</div>

							<div className="text-gray-700 font-semibold ml-2">
								{ad.author.name}
							</div>
						</div>

						<div className="mt-4 mb-2 flex items-center justify-between gap-3">
							<p className="block text-xl font-semibold text-gray-700">
								{currencyFormat(ad.price)}лв.
							</p>

							<div className="flex gap-3">
								{props.message && (
									<button
										onClick={() => {
											handleModal(ad._id)
											toggleMessageModal()
										}}
										className="text-lg block font-semibold p-2 text-purple-50  hover:bg-opacity-80 bg-purple-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
									>
										<IconChatBubble outline={true} />
									</button>
								)}

								{props.delete && (
									<button
										onClick={() => {
											handleModal(ad._id)
											toggleDeleteModal()
										}}
										className="text-lg block font-semibold p-2 text-red-50 hover:bg-opacity-80 bg-red-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
									>
										<IconTrash outline={true} />
									</button>
								)}

								{props.edit && (
									<Modal
										buttonText="Създай обява"
										title="Редактирай обява"
										edit={true}
									>
										<Edit
											id={ad._id}
											onUpdateSuccess={
												handleUpdateSuccess
											}
										/>
									</Modal>
								)}

								{props.show && (
									<Link
										to={`/advertisement/show/${ad._id}`}
										className="text-lg block font-semibold p-2 text-blue-50  hover:bg-opacity-80 bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
									>
										<IconCart outline={true} />
									</Link>
								)}
							</div>
						</div>
					</div>

					{isOpenDeleteModal && adId === ad._id && (
						<div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-[51]">
							<div className="fixed inset-0 flex items-center justify-center overflow-auto">
								<div className="w-full max-w-2xl">
									<div className="max-w-md p-2 mx-auto bg-white shadow rounded-xl hover:shadow-lg transition-all duration-150 ease-linear">
										<div className="relative p-4">
											<h1 className="text-3xl font-bold">
												Изтрий обявата
											</h1>

											<p className="text-sm text-gray-500">
												Сигурни ли сте, че искате да
												изтриете тази обява ?
											</p>

											<div className="grid gird-cols-2 gap-x-2 mt-6">
												<button
													onClick={() => {
														props.deleteAds(
															ad._id,
															ad.title
														)
														toggleDeleteModal()
													}}
													className="sm:w-auto py-[7px] px-5 text-base font-medium text-center text-white rounded-lg bg-red-500 border border-red-500 hover:opacity-80 transition active:scale-95 mb-2.5"
												>
													Изтрий
												</button>

												<button
													onClick={toggleDeleteModal}
													className="sm:w-auto py-[7px] px-5 text-base font-medium text-center border rounded-lg text-gray-500 bg-white hover:bg-gray-100  hover:opacity-80 transition active:scale-95"
												>
													Откажи
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					)}

					{isOpenMessageModal && adId === ad._id && (
						<div className="bg-gray-900 bg-opacity-50 fixed inset-0 z-[51]">
							<div className="fixed inset-0 flex justify-center overflow-auto">
								<div className="w-full max-w-2xl pt-8">
									<div className="relative bg-white rounded-lg shadow mb-8">
										<div className="flex items-center justify-between py-3 border-b rounded-t mx-4">
											<h3 className="text-xl font-semibold text-gray-700">
												Изпрати съобщение до{' '}
												{ad.author.name}
											</h3>

											<button
												type="button"
												className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
												onClick={toggleMessageModal}
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

										<div className="overflow-auto h-[30rem]">
											<div className="flex h-full w-full flex-row overflow-x-hidden">
												<div className="flex h-full flex-auto flex-col p-4">
													<div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4">
														<div className="mb-4 flex h-full flex-col overflow-x-auto">
															<div className="flex h-full flex-col">
																<div className="space-y-2">
																	<div className="w-full flex items-center p-3">
																		<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
																			E
																		</div>

																		<div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow">
																			<div>
																				Hey
																				How
																				are
																				youtoday?
																			</div>
																		</div>
																	</div>

																	<div className="flex flex-row-reverse items-center justify-start p-3">
																		<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-semibold">
																			A
																		</div>

																		<div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow">
																			<div>
																				Lorem
																				ipsum
																				dolor
																				sit,
																				amet
																				consectetur
																				adipisicing.
																				?
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div className="flex h-16 w-full flex-row items-center rounded-lg bg-white py-2 px-3">
															<div className="flex-grow">
																<div className="relative w-full">
																	<Input
																		value={
																			message.message
																		}
																		type="text"
																		id="message"
																		name="message"
																		placeholder="Напипете съобщение..."
																		onChange={(
																			value
																		) =>
																			handleInputChange(
																				'message',
																				value
																			)
																		}
																	/>
																</div>
															</div>

															<div className="ml-4">
																<button
																	onClick={() =>
																		sendMessage(
																			ad
																				.author
																				.fn,
																			message.message
																		)
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
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	))
}
