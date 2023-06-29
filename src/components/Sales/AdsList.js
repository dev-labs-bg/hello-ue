import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { performFetch, calculateExpiration } from '../utils'
import Input from '../Components/HTML/Input'
import Select from '../Components/HTML/Select'
import Pagination from '../Components/Pagination'
import Loader from '../Components/Loader'
import Modal from '../Components/Modal'
import Create from '../Components/Ads/Create'
import Card from '../Components/Ads/Card'
import ChatBox from '../Components/Ads/Messages/ChatBox'
import IconMagnifying from '../Icons/Magnifying'
import IconXmark from '../Icons/Xmark'
import IconNotFound from '../Icons/NotFound'

export default function AdsList() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [ads, setAds] = useState([])
	const [totalAds, setTotalAds] = useState(0)
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [messageBag, setMessageBag] = useState(null)
	const [modalOpen, setModalOpen] = useState(false)
	const [modalOpenMessage, setModalOpenMessage] = useState(false)
	const [showAlert, setShowAlert] = useState(false)
	const [adId, setAdId] = useState(false)
	const [authorName, setAuthorName] = useState(false)
	const [authorFn, setAuthorFn] = useState(false)

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

	const fetchAds = useCallback(async () => {
		try {
			setIsLoading(true)

			let apiUrl = `https://prodavalnik-api.devlabs-projects.info/ads?page=${
				filterData.title ? 1 : currentPage
			}&status=active`

			if (filterData.title) {
				apiUrl += `&search=${filterData.title}`
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
						calculateExpiration(ad.createdAt, ad.expiration, true) >
						0
				)
			)

			setTotalAds(data.totalCount)
			setTotalPages(Math.ceil(data.totalCount / 10))
			setIsLoading(false)
		} catch (err) {
			console.error(err)
			setIsLoading(false)
		}
	}, [headersJSON, currentPage, filterData.title, filterData.price])

	const handlePageChange = (page) => {
		sessionStorage.setItem('currentPageAdsList', page)
		setCurrentPage(page)
	}

	useEffect(() => {
		const storedPage = sessionStorage.getItem('currentPageAdsList')

		if (storedPage && currentPage !== parseInt(storedPage)) {
			setCurrentPage(parseInt(storedPage))
		} else if (prodavalnikAuth) {
			fetchAds()
		}
	}, [
		prodavalnikAuth,
		currentPage,
		filterData.title,
		filterData.price,
		fetchAds,
	])

	useEffect(() => {
		setTotalPages(Math.ceil(totalAds / 10))
	}, [totalAds])

	const handleInputChange = (name, value) => {
		setFilterData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleUpdateSuccess = () => {
		setModalOpen(false)
		setShowAlert(true)
		fetchAds()

		setTimeout(() => {
			setShowAlert(false)
		}, 6000)

		setMessageBag('Обявата е добавена успешно!')
	}

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	const handleOpenMessageModal = (adId, authorName, authorFn) => {
		setModalOpenMessage(true)
		setAdId(adId)
		setAuthorName(authorName)
		setAuthorFn(authorFn)
	}

	const closeMessageModal = () => {
		setModalOpenMessage(false)
	}

	return (
		<>
			<div className="w-full sm:flex items-center justify-between px-1 mb-3.5">
				<div className="sm:flex items-center mb-2.5 sm:mb-0">
					<div className="relative mb-2.5 sm:mb-0">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3">
							{filterData.title ? (
								<IconXmark className="w-5 h-5 text-gray-500 cursor-pointer hover:opacity-80 transition active:scale-90" />
							) : (
								<IconMagnifying className="w-5 h-5 text-gray-500" />
							)}
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
						classes="sm:w-44 md:w-56 sm:ml-3"
						value={filterData.price}
						onChange={(value) => handleInputChange('price', value)}
					/>
				</div>

				<button
					className="w-full sm:w-auto py-[9px] px-5 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:opacity-80 transition active:scale-95"
					type="button"
					onClick={openModal}
				>
					Създай обява
				</button>

				<Modal
					title="Добави обява"
					isOpen={modalOpen}
					onClose={closeModal}
				>
					<Create onUpdateSuccess={handleUpdateSuccess} />
				</Modal>
			</div>

			{isLoading ? (
				<Loader />
			) : (
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3.5 sm:mb-0">
					{ads.length ? (
						<>
							<Card
								ads={ads}
								isLoading={isLoading}
								message={true}
								show={true}
								openMessageModal={handleOpenMessageModal}
							/>

							<Modal
								title={`Изпрати съобщение до ${authorName}`}
								isOpen={modalOpenMessage}
								onClose={closeMessageModal}
								cancelButton={false}
							>
								<ChatBox adId={adId} fn={authorFn} />
							</Modal>
						</>
					) : (
						<div className="flex items-center justify-center h-screen w-full sm:col-span-2 lg:col-span-3 text-slate-700 font-semibold">
							<div className="space-y-2">
								<IconNotFound />
								Няма намерени данни
							</div>
						</div>
					)}
				</div>
			)}

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					handlePageClick={handlePageChange}
				/>
			</div>

			{showAlert && (
				<div className="fixed w-80 md:w-[30rem] top-6 left-1/2 transform -translate-x-1/2 z-50 p-4 mb-4 text-sm text-green-700 rounded-lg bg-green-100 font-semibold">
					{messageBag}
				</div>
			)}
		</>
	)
}
