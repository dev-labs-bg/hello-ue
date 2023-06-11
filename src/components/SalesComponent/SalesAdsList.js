import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
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

export default function SalesAdsList({ ad }) {
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [ads, setAds] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const fetchAds = async () => {
		try {
			const response = await fetch(
				'https://prodavalnik-api.devlabs-projects.info/ads',
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
			const filteredAds = data.ads.filter((ad) => !ad.bought)
			setAds(filteredAds)
			setIsLoading(false)
		} catch (err) {
			console.error(err)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (prodavalnikAuth) fetchAds()
	}, [prodavalnikAuth])

	const calExpirationDay = (createdAt, expiration) => {
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
			return `Изтича след ${days} дни`
		} else if (hours > 0) {
			return `Изтича след ${hours} часа`
		} else {
			return `Изтича след ${minutes} минути`
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
		>
			<div className="buble"></div>
			<div className="buble2"></div>
			{isLoading ? (
				<Flex justify="center" align="center" height="100vh">
					<Spinner size="xl" color="blue.500" />
					<Heading as="h3" size="lg" marginLeft="2">
						Зареждане на данните...
					</Heading>
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
								<Heading as="h3" size="lg" color="blue.500">
									{ad.category}
								</Heading>
								<Text sx={text}>{ad.title}</Text>
								<Text sx={text && detail}>
									{ad.description}
								</Text>
								<div sx={text && avatar}>
									Публикувано от:{' '}
									<Avatar name={ad.author.name} />
									{ad.author.name}
								</div>
								<Text sx={text}>
									Цена: {ad.price}лв.
									<Link to={`/advertisement/edit/${ad._id}`}>
										<Button marginLeft="2rem" sx={button}>
											Редактирай
										</Button>
									</Link>
									<Link to={`/advertisement/show/${ad._id}`}>
										<Button marginLeft="2rem" sx={button}>
											Виж
										</Button>
									</Link>
								</Text>
							</Box>
							<Image
								src={ad.imageUrl}
								alt="textbook"
								width="150px"
								height="220px"
								marginBottom="4"
							/>
						</Flex>
					))}
				</>
			)}
		</Box>
	)
}
