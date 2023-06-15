import { Link } from 'react-router-dom'
import React, { useEffect, useState, useCallback } from 'react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import {
	Alert,
	AlertIcon,
	Button,
	Flex,
	Box,
	Image,
	Heading,
	Text,
	Avatar,
} from '@chakra-ui/react'
import Pagination from '../Components/Pagination'

export default function MyAds() {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [currentPage, setCurrentPage] = useState(1)
	const [messageBag, setMessageBag] = useState(null)
	const [totalPages, setTotalPages] = useState(0)
	const [totalAds, setTotalAds] = useState(0)
	const [ads, setAds] = useState([])

	const fetchMyAds = useCallback(async () => {
		try {
			const response = await fetch(
				`https://prodavalnik-api.devlabs-projects.info/ads?current`,
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
						calculateExpiration(ad.createdAt, ad.expiration, true) >
						0
				)
			)
			setTotalAds(data.totalCount)
			setTotalPages(Math.ceil(data.totalCount / 10))
		} catch (error) {
			console.error(error)
		}
	}, [prodavalnikAuth])

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
			return kind ? days : `Обявата изтича след ${days} дни`
		} else if (hours > 0) {
			return kind ? hours : `Обявата изтича след ${hours} часа`
		} else {
			return kind ? hours : `Обявата изтича след ${minutes} минути`
		}
	}

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

			fetchMyAds()
			setMessageBag({ success: 'Обявата е успешно изтрита!' })
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (prodavalnikAuth) {
			fetchMyAds(currentPage)
		}
	}, [prodavalnikAuth, currentPage, fetchMyAds])

	const container = {
		gap: { base: '0.8rem', md: '1rem', lg: '1.5rem' },
		flexDir: { base: 'column', md: 'row' },
		width: '-moz-fit-content',
		height: '-moz-fit-content',
		alignItems: 'center',
		justifyContent: 'center',
		shadow: '2xl',
		marginBlock: { base: '10px', sm: '20px', md: '25px' },
		color: 'blackAlpha.800',
		backgroundColor: 'transparent',
		padding: { base: '5px', md: '24px' },
	}

	const button = {
		marginInline: '10px',
		_hover: {
			color: '#121212',
			borderRadius: '4px',
			border: '1px solid #000',
			backgroundColor: '#f7f7f7',
			transition: 'all 300ms ease-in-out',
		},
	}

	const image = {
		width: '200px',
		height: '220px',
		borderRadius: 'md',
	}

	const text = {
		fontSize: { sm: '14px', md: '16px', lg: '18px' },
		color: '#000',
		fontWeight: '400',
		marginBlock: '4px',
	}

	const detail = {
		w: { base: 'auto', sm: '400px', md: '500px' },
		padding: { base: '5px', md: '10px', lg: '15px' },
	}

	const avatar = {
		gap: '0.5rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}

	return (
		<div>
			{messageBag &&
				Object.keys(messageBag).map((key) => (
					<Alert status="success" key={key}>
						<AlertIcon />
						{messageBag[key]}
					</Alert>
				))}
			<Box
				w="-moz-fit-content"
				marginInline="auto"
				position="relative"
				zIndex="1"
				mb={5}
			>
				<div className="buble"></div>
				<div className="buble2"></div>
				<>
					<Link to="/advertisement/create">
						<Button marginTop="1rem">Добави нова обява</Button>
					</Link>
					{ads.map((ad, index) => (
						<Flex sx={container} key={index}>
							<Box>
								<Heading as="h3" size="lg" color="blue.500">
									{ad.category}
								</Heading>
								<Text sx={text}>{ad.title}</Text>
								<Text sx={text && detail}>
									{ad.description}
								</Text>
								<div sx={text && avatar}>
									Публикувано от:{' '}
									<Avatar
										name={ad.author.name}
										verticalAlign="middle"
									/>
									{ad.author.name}
								</div>
								<Text sx={text}>Цена: {ad.price} лв.</Text>

								<Flex>
									<Text sx={text} marginInline="auto">
										<Link
											to={`/advertisement/edit${ad._id}`}
										>
											<Button sx={button}>
												Редактирай
											</Button>
										</Link>
										<Button
											onClick={() =>
												deleteAdvertisement(ad._id)
											}
											sx={button}
										>
											Изтрий ме
										</Button>
									</Text>
								</Flex>
							</Box>

							<Image
								src={ad.imageUrl}
								alt={ad.title}
								sx={image}
							/>
						</Flex>
					))}

					<Flex justifyContent="center" my={4}>
						<Text fontSize="xl">
							Заредени обвяви от {currentPage * 10 - 9} до{' '}
							{totalAds < currentPage * 10
								? totalAds
								: currentPage * 10}{' '}
							от общо {totalAds} резултата
						</Text>
					</Flex>

					<Pagination
						currentPage={currentPage}
						totalPages={totalPages}
						handlePageClick={handlePageChange}
					/>
				</>
			</Box>
		</div>
	)
}
