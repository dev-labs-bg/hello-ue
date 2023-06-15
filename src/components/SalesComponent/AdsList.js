import { Link } from 'react-router-dom'
import React, { useState, useEffect, useCallback, useMemo } from 'react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { performFetch } from '../utils'
import Pagination from '../Components/Pagination'
import {
	Button,
	Flex,
	Box,
	Spinner,
	Image,
	Heading,
	Text,
	Avatar,
} from '@chakra-ui/react'

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
			return kind ? days : `Обявата изтича след ${days} дни`
		} else if (hours > 0) {
			return kind ? hours : `Обявата изтича след ${hours} часа`
		} else {
			return kind ? minutes : `Обявата изтича след ${minutes} минути`
		}
	}

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
		_hover: {
			color: '#121212',
			borderRadius: '4px',
			border: '1px solid #000',
			backgroundColor: '#f7f7f7',
			transition: 'all 300ms ease-in-out',
		},
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
		<Box
			w="-moz-fit-content"
			marginInline="auto"
			position="relative"
			zIndex="1"
			mb={5}
		>
			<div className="buble"></div>
			<div className="buble2"></div>
			{isLoading ? (
				<Flex
					height="100vh"
					alignItems="center"
					justifyContent="center"
				>
					<Spinner size="xl" />
					<Box ml={4}>Зареждане на данните...</Box>
				</Flex>
			) : ads.length === 0 ? (
				<Heading as="h3" size="xl">
					Нямате активни обяви
				</Heading>
			) : (
				<>
					<Link to="/advertisement/create">
						<Button marginTop="1rem">Създай обява</Button>
					</Link>

					{ads.map((ad, index) => (
						<Flex sx={container} key={index}>
							<Box>
								<Text sx={text}>
									{calculateExpiration(
										ad.createdAt,
										ad.expiration,
										false
									)}
								</Text>

								<Heading as="h3" size="lg" color="blue.500">
									{ad.category}
								</Heading>

								<Text sx={text}>{ad.title}</Text>

								<Text sx={text && detail}>
									{ad.description}
								</Text>

								<div sx={text && avatar}>
									Публикувано от:
									<Avatar name={ad.author.name} />
									{ad.author.name}
								</div>

								<Text sx={text}>Цена: {ad.price}лв.</Text>

								<Flex>
									<Text sx={text}>
										Цена: {ad.price}лв.
										<Link
											to={`/advertisement/edit/${ad._id}`}
										>
											<Button
												marginLeft="2rem"
												sx={button}
											>
												Редактирай
											</Button>
										</Link>
										<Link
											to={`/advertisement/show/${ad._id}`}
										>
											<Button
												marginLeft="2rem"
												sx={button}
											>
												Виж
											</Button>
										</Link>
									</Text>
								</Flex>
							</Box>

							<Flex
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Image
									src={ad.imageUrl}
									alt={ad.title}
									width="200px"
									height="200px"
									objectFit="contain"
									borderRadius="md"
								/>
							</Flex>
						</Flex>
					))}

					<Flex justifyContent="center" alignItems="center" my={4}>
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
			)}
		</Box>
	)
}
