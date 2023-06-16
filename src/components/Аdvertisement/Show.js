import React, { useState, useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
	Alert,
	AlertIcon,
	Badge,
	Button,
	Box,
	Flex,
	Spinner,
	Stack,
	Image,
	Text,
	Center,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import { fetchData, performFetch } from '../utils'

export default function Show() {
	const _id = useParams().id
	const { prodavalnikAuth } = useProdavalnikAuth()
	const [isLoading, setIsLoading] = useState(true)
	const [isBought, setIsBought] = useState(false)
	const [isSaving, setIsSaving] = useState(false)
	const [advertisement, setAdvertisement] = useState(null)
	const [messageBag, setMessageBag] = useState(null)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const headers = useMemo(() => {
		return {
			user: prodavalnikAuth,
		}
	}, [prodavalnikAuth])

	const buyBook = async () => {
		try {
			setIsSaving(true)
			performFetch(
				`https://prodavalnik-api.devlabs-projects.info/ads/${_id}/buy`,
				'POST',
				headers
			)
			setMessageBag({ success: 'Успешно закупихте учебника!' })
			setIsBought(true)
			onClose()
		} catch (err) {
			setMessageBag({
				error: 'Възникна грешка при закупуването на учебника.',
			})
		}
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
		<div>
			{isLoading ? (
				<Flex
					height="100vh"
					alignItems="center"
					justifyContent="center"
				>
					<Spinner size="xl" />
					<Box ml={4}>Зареждане на данните...</Box>
				</Flex>
			) : (
				<>
					{messageBag &&
						Object.keys(messageBag).map((key) => (
							<Alert
								status={key === 'success' ? 'success' : 'error'}
								key={key}
							>
								<AlertIcon />
								{messageBag[key]}
							</Alert>
						))}

					<Link to="/sales/list">
						<Button marginTop="1rem">Обратно към списъка</Button>
					</Link>

					{advertisement && (
						<Flex direction="column" align="center">
							<Box
								maxW="sm"
								borderWidth="1px"
								borderRadius="lg"
								overflow="hidden"
								marginTop="1rem"
							>
								<Flex direction="column" align="center">
									<Image
										src={advertisement.imageUrl}
										alt={advertisement.title}
										width="150px"
										height="220px"
										marginTop="1rem"
									/>
								</Flex>

								<Box p="4">
									<Box d="flex" alignItems="baseline" mb={2}>
										<Text
											fontSize="lg"
											fontWeight="bold"
											color="teal.600"
											mr={2}
										>
											{advertisement.title}
										</Text>

										<Badge colorScheme="blue" mb={1}>
											{advertisement.category}
										</Badge>

										<Text fontSize="sm" color="gray.500">
											от {advertisement.author.name}
										</Text>
									</Box>

									<Box mt="1" fontSize="sm">
										{advertisement.description}
									</Box>

									<Box d="flex" mt="2" alignItems="center">
										<Text fontWeight="bold" fontSize="lg">
											Цена: {advertisement.price}лв.
										</Text>
									</Box>

									<Center mt={4}>
										<Stack
											direction={['column', 'row']}
											spacing="24px"
										>
											<Button colorScheme="blue">
												Съобщение
											</Button>

											{!advertisement.bought &&
												!isBought && (
													<Button
														colorScheme="teal"
														onClick={onOpen}
													>
														Купи
													</Button>
												)}
										</Stack>
									</Center>
								</Box>
							</Box>
						</Flex>
					)}

					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />

						<ModalContent>
							<ModalHeader>Потвърждение</ModalHeader>
							<ModalCloseButton />

							<ModalBody>
								Сигурни ли сте, че искате да закупите този
								учебник?
							</ModalBody>

							<ModalFooter>
								<Button
									variant="ghost"
									mr={3}
									onClick={onClose}
								>
									Не
								</Button>

								<Button
									colorScheme="teal"
									onClick={buyBook}
									isLoading={isSaving}
								>
									Да
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</>
			)}
		</div>
	)
}
