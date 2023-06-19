import { Link } from 'react-router-dom'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { performFetch, textSplit } from '../utils'
import Pagination from '../Components/Pagination'
import IconCart from '../Icons/Cart'
import IconEye from '../Icons/Eye'

export default function SalesAdsList() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [ads, setAds] = useState([])
	const [totalAds, setTotalAds] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const headersJSON = useMemo(
		() => ({
			'Content-Type': 'application/json',
			user: prodavalnikAuth,
		}),
		[prodavalnikAuth]
	)

	const fetchAds = useCallback(
		async (page) => {
			try {
				setIsLoading(true)

				const response = await performFetch(
					`https://prodavalnik-api.devlabs-projects.info/ads?page=${page}`,
					'GET',
					headersJSON
				)

				const data = await response.json()

				setAds(
					data.ads.filter(
						(ad) =>
							!ad.bought &&
							calculateExpiration(
								ad.createdAt,
								ad.expiration,
								true
							) > 0
					)
				)
				setTotalAds(data.totalCount)
				setTotalPages(Math.ceil(data.totalCount / 10))
				setIsLoading(false)
			} catch (err) {
				console.error(err)
				setIsLoading(false)
			}
		},
		[headersJSON]
	)

	const handlePageChange = (page) => {
		sessionStorage.setItem('currentPage', page)
		setCurrentPage(page)
		fetchAds(page)
	}

	useEffect(() => {
		const storedPage = sessionStorage.getItem('currentPage')

		if (storedPage && currentPage !== parseInt(storedPage)) {
			setCurrentPage(parseInt(storedPage))
			fetchAds(parseInt(storedPage))
		}
	}, [currentPage, fetchAds])

	useEffect(() => {
		if (prodavalnikAuth) {
			fetchAds(currentPage)
		}
	}, [prodavalnikAuth, currentPage, fetchAds])

	useEffect(() => {
		setTotalPages(Math.ceil(totalAds / 10))
	}, [totalAds])

	const calculateExpiration = (createdAt, expiration, kind) => {
		const today = new Date()
		const createdDate = new Date(createdAt)
		const expiredDate = new Date(
			createdDate.getTime() + expiration * 24 * 60 * 60 * 1000
		)
		const timeDifference = expiredDate - today

		const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000))
		const hours = Math.floor((timeDifference / (60 * 60 * 1000)) % 24)
		const minutes = Math.floor((timeDifference / (60 * 1000)) % 60)

		if (days > 0) {
			return kind
				? days
				: `Обявата изтича след ${days}  ${days === 1 ? 'ден' : 'дни'}`
		} else if (hours > 0) {
			return kind
				? hours
				: `Обявата изтича след ${hours}  ${
						hours === 1 ? 'час' : 'часа'
				  }`
		} else {
			return kind
				? minutes
				: `Обявата изтича след ${minutes}  ${
						minutes === 1 ? 'минута' : 'минути'
				  }`
		}
	}

	return (
		<>
			<Link to="/advertisement/create">
				<div>Създай обява</div>
			</Link>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{ads.map((ad, index) => (
					<div
						key={index}
						className="relative w-full p-5 bg-white rounded-lg shadow-lg border border-slate-100"
					>
						{isLoading ? (
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

									<div className="flex items-center mt-4 space-x-2.5">
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
								<div className="absolute right-7 top-6 bg-green-100 text-green-800 text-[13px] font-semibold px-3 py-1 rounded text-left">
									{ad.category}
								</div>

								<img
									className="w-full sm:w-72 h-64 object-cover rounded-md border border-slate-100"
									src={ad.imageUrl}
									alt={ad.title}
								/>
								<div className="mt-4">
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
										{textSplit(ad.description, 40)}
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
											{ad.price}лв.
										</p>

										<div className="flex gap-3">
											<Link
												to={`/advertisement/edit/${ad._id}`}
												className="text-lg block font-semibold p-2 text-green-50 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300"
											>
												<IconEye outline={true} />
											</Link>

											<Link
												to={`/advertisement/show/${ad._id}`}
												className="text-lg block font-semibold p-2 text-blue-50 hover:text-white bg-blue-400 rounded-lg shadow hover:shadow-md transition duration-300"
											>
												<IconCart outline={true} />
											</Link>
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				))}
			</div>
			<div>
				<p className="text-[15px] text-gray-700 font-medium py-4">
					Заредени обвяви от{' '}
					<span className="font-semibold text-gray-900 ">
						{currentPage * 10 - 9}
					</span>{' '}
					до{' '}
					<span className="font-semibold text-gray-900 ">
						{totalAds < currentPage * 10
							? totalAds
							: currentPage * 10}{' '}
					</span>{' '}
					от общо{' '}
					<span className="font-semibold text-gray-900 ">
						{totalAds}
					</span>{' '}
					резултата
				</p>
			</div>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageClick={handlePageChange}
			/>
		</>
	)
}
