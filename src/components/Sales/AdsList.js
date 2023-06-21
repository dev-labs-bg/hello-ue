import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { performFetch, calculateExpiration } from '../utils'
import Input from '../Components/HTML/Input'
import Select from '../Components/HTML/Select'
import Pagination from '../Components/Pagination'
import Modal from '../Components/Modal'
import Create from '../Components/Ads/Create'
import Card from '../Components/Ads/Card'
import IconMagnifying from '../Icons/Magnifying'
import IconNotFound from '../Icons/NotFound'

export default function AdsList() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [ads, setAds] = useState([])
	const [totalAds, setTotalAds] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [closeModal, setCloseModal] = useState(true)
	const headersJSON = useMemo(
		() => ({
			'Content-Type': 'application/json',
			user: prodavalnikAuth,
		}),
		[prodavalnikAuth]
	)
	const [filterData, setFilterData] = useState({
		title: '',
		price: '',
	})

	const fetchAds = useCallback(
		async (page) => {
			try {
				setIsLoading(true)

				let apiUrl = `https://prodavalnik-api.devlabs-projects.info/ads?page=${
					filterData.title ? 1 : page
				}`

				if (filterData.title) {
					await new Promise((resolve) => {
						setTimeout(() => {
							apiUrl += `&search=${filterData.title}`
							resolve()
						}, 800)
					})
				}

				if (filterData.price) {
					apiUrl += `&sort=${
						filterData.price === 'Низходящ' ? 'desc' : 'asc'
					}`
				}

				const response = await performFetch(apiUrl, 'GET', headersJSON)
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
		[headersJSON, filterData.title, filterData.price]
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

	const handleInputChange = (name, value) => {
		setFilterData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmitSuccess = () => {
		setCloseModal(!closeModal)
	}

	return (
		<>
			<div className="w-full sm:flex items-center justify-between px-1 mb-3.5">
				<div className="sm:flex items-center mb-2.5 sm:mb-0">
					<div className="relative mb-2.5 sm:mb-0">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3">
							<IconMagnifying className="w-5 h-5 text-gray-500 mt-1.5" />
						</div>

						<Input
							type="text"
							placeholder="Търси..."
							classes="pl-10 sm:w-44 md:w-56"
							value={filterData.title}
							onChange={(value) =>
								handleInputChange('title', value)
							}
						/>
					</div>

					<Select
						id="sort"
						name="sort"
						placeholder="Сортирай по цена"
						options={['Възходящ', 'Низходящ']}
						classes="sm:w-44 md:w-56 mt-1.5 sm:ml-3"
						value={filterData.price}
						onChange={(value) => handleInputChange('price', value)}
					/>
				</div>

				<Modal
					buttonText="Създай обява"
					title="Добави обява"
					closeModal={closeModal}
				>
					<Create onSubmitSuccess={handleSubmitSuccess} />
				</Modal>
			</div>

			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{ads.length === 0 ? (
					<div className="flex items-center justify-center h-screen w-full sm:col-span-2 lg:col-span-3 text-slate-700 font-semibold">
						<div className="space-y-2">
							<IconNotFound />
							Няма намерени данни
						</div>
					</div>
				) : (
					<Card ads={ads} isLoading={isLoading} show={true} />
				)}
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				{totalPages > 1 ? (
					<p className="text-[15px] text-gray-700 font-medium py-2">
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
				) : null}

				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePageClick={handlePageChange}
				/>
			</div>
		</>
	)
}
