import React, { useEffect, useState, useCallback } from 'react'
import { calculateExpiration } from '../utils'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import Pagination from '../Components/Pagination'
import Card from '../Components/Ads/Card'
import Modal from '../Components/Modal'
import Edit from '../Components/Ads/Edit'
import IconNotFound from '../Icons/NotFound'

export default function MyAds() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [currentPage, setCurrentPage] = useState(1)
	const [messageBag, setMessageBag] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [totalPages, setTotalPages] = useState(0)
	const [totalAds, setTotalAds] = useState(0)
	const [modalOpen, setModalOpen] = useState(false)
	const [adId, setAdId] = useState(null)
	const [ads, setAds] = useState([])
	const [showAlert, setShowAlert] = useState(false)

	const fetchMyAds = useCallback(
		async (page) => {
			try {
				setIsLoading(true)

				const response = await fetch(
					`https://prodavalnik-api.devlabs-projects.info/ads?current&page=${page}`,
					{
						method: 'GET',
						headers: {
							'Content-Type': 'application/json',
							user: prodavalnikAuth,
						},
					}
				)

				if (!response.ok) {
					throw new Error(response.statusText)
				}

				const data = await response.json()

				setAds(
					data.ads.filter(
						(ad) =>
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
			} catch (error) {
				setIsLoading(false)
				console.error(error)
			}
		},
		[prodavalnikAuth]
	)

	const handlePageChange = (page) => {
		sessionStorage.setItem('currentPage', page)
		setCurrentPage(page)
		fetchMyAds(page)
	}

	useEffect(() => {
		const storedPage = sessionStorage.getItem('currentPage')

		if (storedPage && currentPage !== parseInt(storedPage)) {
			setCurrentPage(parseInt(storedPage))
			fetchMyAds(parseInt(storedPage))
		}
	}, [currentPage, fetchMyAds])

	useEffect(() => {
		setTotalPages(Math.ceil(totalAds / 10))
	}, [totalAds])

	const deleteAdvertisement = async (id) => {
		try {
			const response = await fetch(
				`https://prodavalnik-api.devlabs-projects.info/ads/${id}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						user: prodavalnikAuth,
					},
				}
			)

			if (!response.ok) {
				throw new Error(response.statusText)
			}

			fetchMyAds(currentPage)
			setShowAlert(true)
		} catch (error) {
			console.error(error)
		}
	}

	function handleDeleteAds(adId, adTitle) {
		deleteAdvertisement(adId)
		setMessageBag(`Обява с име ${adTitle} е успешно изтрита!`)
	}

	useEffect(() => {
		if (prodavalnikAuth) {
			fetchMyAds(currentPage)
		}
	}, [prodavalnikAuth, currentPage, fetchMyAds])

	const handleUpdateSuccess = () => {
		fetchMyAds(currentPage)
		setShowAlert(true)
		setModalOpen(false)

		setTimeout(() => {
			setShowAlert(false)
		}, 6000)

		setMessageBag('Обявата е обновена успешно!')
	}

	const handleOpenEditModal = (adId) => {
		setModalOpen(true)
		setAdId(adId)
	}

	const closeModal = () => {
		setModalOpen(false)
	}

	return (
		<>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-3.5 sm:mb-0">
				{ads.length === 0 ? (
					<div className="flex items-center justify-center h-screen w-full sm:col-span-2 lg:col-span-3 text-slate-700 font-semibold">
						<div className="space-y-2">
							<IconNotFound />
							Няма намерени данни
						</div>
					</div>
				) : (
					<>
						<Card
							ads={ads}
							isLoading={isLoading}
							edit={true}
							delete={true}
							deleteAds={handleDeleteAds}
							openEditModal={handleOpenEditModal}
						/>

						<Modal
							title="Редактирай обява"
							isOpen={modalOpen}
							onClose={closeModal}
						>
							<Edit
								id={adId}
								onUpdateSuccess={handleUpdateSuccess}
							/>
						</Modal>
					</>
				)}
			</div>

			<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					totalAds={totalAds}
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
