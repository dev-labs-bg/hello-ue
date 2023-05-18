import {
	VStack,
	Input,
	FormControl,
	FormLabel,
	Button,
	Box,
	Center,
	Heading,
	Alert,
	AlertTitle,
	Link,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import useQuest from '../../hooks/useQuest'
import DiscordWebhook from '../WebhookService'
import CompletedQuest from './CompletedQuest'

const Quest2 = () => {
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		'student-name': '',
		'student-city': '',
		'high-school': '',
		'university-major': '',
		interests: '',
		'fav-hobby': '',
	})
	const questId = 2
	const currentQuest = useQuest().currentQuest
	const discordChannelLink =
		'https://discord.com/channels/1052677967496622182/1085559956935286896'
	const feedbackMessage = (
		<Center>
			<Alert
				status="success"
				variant="subtle"
				flexDirection="column"
				alignItems="center"
				alignSelf="center"
				justifyContent="center"
				textAlign="center"
				height="auto"
				w={['90%', '90%', '90%', '90%']}
				mt={['10%', '8%', '5%', '3%']}
			>
				<AlertTitle mt={4} mb={1} fontSize="m">
					Благодарим ти за споделената информация. Можеш да видиш
					своето резюме в{' '}
					<Link href={discordChannelLink}>Discord</Link> канала ни.
				</AlertTitle>
			</Alert>
		</Center>
	)

	function handleSubmit(event) {
		setIsSubmitted(true)
	}

	function handleChange(event) {
		const { name, value } = event.target

		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}))
	}

	return (
		<>
			{questId === currentQuest ? (
				!isSubmitted ? (
					<VStack
						as="form"
						onSubmit={handleSubmit}
						mx="auto"
						w={{ base: '90%', md: 580 }}
						h="700px"
						justifyContent="center"
					>
						<FormControl isRequired>
							<FormLabel>Как обичаш да те наричат?</FormLabel>
							<Input
								name="student-name"
								type="text"
								value={formData.city}
								onChange={handleChange}
								placeholder="Твоят отговор"
								focusBorderColor="#818F73"
								borderRadius="3px"
							></Input>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>От кой град си?</FormLabel>
							<Input
								name="student-city"
								type="text"
								value={formData.city}
								onChange={handleChange}
								placeholder="Твоят отговор"
								focusBorderColor="#818F73"
								borderRadius="3px"
							></Input>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>От коя гимназия идваш?</FormLabel>
							<Input
								name="high-school"
								type="text"
								value={formData.school}
								onChange={handleChange}
								placeholder="Твоят отговор"
								focusBorderColor="#818F73"
								borderRadius="3px"
							></Input>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Коя специалност изучаваш?</FormLabel>
							<Input
								name="university-major"
								type="text"
								value={formData.specialty}
								onChange={handleChange}
								placeholder="Твоят отговор"
								focusBorderColor="#818F73"
								borderRadius="3px"
							></Input>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Какви са твоите интереси?</FormLabel>
							<Input
								name="interests"
								type="text"
								value={formData.interests}
								onChange={handleChange}
								placeholder="Твоят отговор"
								focusBorderColor="#818F73"
								borderRadius="3px"
							></Input>
						</FormControl>
						<FormControl isRequired>
							<FormLabel>Любимо хоби?</FormLabel>
							<Input
								name="fav-hobby"
								type="text"
								value={formData.hobby}
								onChange={handleChange}
								placeholder="Твоят отговор"
								errorBorderColor="#008140"
								focusBorderColor="#818F73"
								borderRadius="3px"
							></Input>
						</FormControl>
						<Button
							type="submit"
							size="md"
							height="48px"
							width="200px"
							colorScheme="green"
							variant="solid"
						>
							Готово
						</Button>
					</VStack>
				) : (
					<Box>
						<Box
							bgColor={'gray.100'}
							p={['3em', '3em', '3em', '4em']}
							flexGrow={1}
						>
							<Center>
								<VStack
									spacing="24px"
									width={['90%', '60%', '45%', '35%']}
									position="relative"
								>
									<Box p={5} bgColor="white">
										<Box
											bgSize="cover"
											bgPosition="top center"
											top={0}
											left={0}
											right={0}
											bottom={0}
											zIndex={-1}
										/>
										<Box textAlign="center">
											<Box
												fontSize={{
													base: '1em',
													md: '1em',
													lg: '1.1em',
												}}
												mt={5}
											>
												Направихме кратко резюме за теб.
												За да преминеш куеста трябва да
												го споделиш в Дискорд канала на
												университета! Разгледай
												отговорите на другите студенти и
												открий приятели!
												<DiscordWebhook
													formData={formData}
												/>
											</Box>
										</Box>

										<Box
											bgColor="#44818B"
											color="white"
											w="1.75em"
											h="1.75em"
											position="absolute"
											left="-0.85em"
											top="-0.85em"
											fontSize="2.5em"
											borderRadius="100%"
											p="0.1em"
										>
											{questId}
										</Box>
									</Box>
									<Box p={5} bgColor="white">
										<Box
											bgSize="cover"
											bgPosition="top center"
											top={0}
											left={0}
											right={0}
											bottom={0}
											zIndex={-1}
										/>
										<Box textAlign="center">
											<Heading
												fontSize={{
													base: '1.3em',
													md: '1.8em',
													lg: '2.2em',
												}}
												fontWeight="bold"
												mt={3}
											>
												Аз съм{' '}
												{formData['student-name']}
											</Heading>
											<Box
												fontSize={{
													base: '1em',
													md: '1em',
													lg: '1.1em',
												}}
												mt={5}
											>
												Роден/а съм в град{' '}
												{formData['student-city']}.
												Завърших{' '}
												{formData['high-school']}. В ИУ
												Варна съм записал/а специалност
												"{formData['university-major']}
												". Mоите интереси включват{' '}
												{formData['interests']}. Моето
												любимо хоби е{' '}
												{formData['fav-hobby']}!
											</Box>
										</Box>

										<Box
											bgColor="#44818B"
											color="white"
											w="1.75em"
											h="1.75em"
											position="absolute"
											left="-0.85em"
											top="-0.85em"
											fontSize="2.5em"
											borderRadius="100%"
											p="0.1em"
										>
											{questId}
										</Box>
									</Box>
								</VStack>
							</Center>
						</Box>
					</Box>
				)
			) : (
				<CompletedQuest id={questId} message={feedbackMessage} />
			)}
		</>
	)
}

export default Quest2
