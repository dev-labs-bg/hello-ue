import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import IconCart from '../../Icons/Cart'
import IconTrash from '../../Icons/Trash'
import IconClock from '../../Icons/Clock'
import IconChatBubble from '../../Icons/ChatBubble'
import IconPencil from '../../Icons/Pencil'
import { Tooltip } from '@chakra-ui/react'
import {
	textSplit,
	calculateExpiration,
	currencyFormat,
	getBulgarianTime,
} from '../../utils'

export default function Card(props) {
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState()
	const [adId, setAdId] = useState(null)

	const toggleDeleteModal = () => {
		setIsOpenDeleteModal(!isOpenDeleteModal)
	}

	const handleModal = (adId) => {
		setAdId(adId)
	}

	return props.ads.map((ad, index) => (
		<>
			<div
				key={index}
				className="relative w-full p-5 bg-white rounded-lg shadow-lg border border-slate-100 animate-card"
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
						<div className="absolute left-7 top-7 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-0.5 rounded text-left shadow-lg border">
							{getBulgarianTime(ad.createdAt, true)}
						</div>

						<div className="absolute right-7 top-7 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-0.5 rounded text-left shadow-lg border">
							{ad.category}
						</div>

						<img
							className="w-full sm:w-72 h-64 object-cover rounded-md shadow-md"
							src={ad.imageUrl}
							alt={ad.title}
						/>

						<div className="mt-3">
							<h1 className="text-xl text-left font-bold text-gray-700">
								{ad.title}
							</h1>

							<p className="text-sm mt-1 text-left text-gray-500 pb-3 border-b">
								{textSplit(ad.description, 36)}
							</p>

							<div className="flex items-center justify-between px-1 mb-3 pt-3">
								<div className="flex items-center">
									<div className="w-8 h-8 bg-blue-400 text-white rounded-full font-semibold flex justify-center items-center pb-0.5 shadow-md">
										{ad.author.name.charAt(0)}
									</div>

									<div className="text-gray-700 font-semibold ml-2">
										{ad.author.name}
									</div>
								</div>

								<Tooltip
									label={
										'Обявата изтича след ' +
										calculateExpiration(
											ad.createdAt,
											ad.expiration,
											false
										)
									}
								>
									<div className="flex items-center mt-1 gap-1 hover:cursor-pointer">
										<IconClock />

										<span className="text-sm text-gray-700 font-semibold">
											{calculateExpiration(
												ad.createdAt,
												ad.expiration,
												false
											)}
										</span>
									</div>
								</Tooltip>
							</div>

							<div className="flex items-center justify-between gap-3 border-t pt-2">
								<p className="block text-xl font-semibold text-gray-700">
									{currencyFormat(ad.price)}лв.
								</p>

								<div className="flex gap-3">
									{props.message && (
										<button
											onClick={() => {
												props.openMessageModal(
													ad._id,
													ad.author.name,
													ad.author.fn
												)
											}}
											className="text-lg block font-semibold p-2 text-white hover:bg-opacity-80 bg-purple-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
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
											className="text-lg block font-semibold p-2 text-white hover:bg-opacity-80 bg-red-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
										>
											<IconTrash outline={true} />
										</button>
									)}

									{props.edit && (
										<button
											className="text-lg block font-semibold p-2 text-white hover:bg-opacity-80 bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
											type="button"
											onClick={() => {
												props.openEditModal(ad._id)
											}}
										>
											<IconPencil outline={true} />
										</button>
									)}

									{props.show && (
										<Link
											to={`/advertisement/show/${ad._id}`}
											className="text-lg block font-semibold p-2 text-white hover:bg-opacity-80 bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300 active:scale-90"
										>
											<IconCart outline={true} />
										</Link>
									)}
								</div>
							</div>
						</div>
					</>
				)}
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
										Сигурни ли сте, че искате да изтриете
										тази обява ?
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
		</>
	))
}
