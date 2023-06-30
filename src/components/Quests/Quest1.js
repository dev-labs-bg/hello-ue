import { Box, Heading, Button, Image, Link } from '@chakra-ui/react'
import { Center, VStack } from '@chakra-ui/react'
import BistroImg from './res/bistro.jpg'
import useQuest from '../../hooks/useQuest'
import CompletedQuest from './CompletedQuest'
import { NavLink as RouterLink } from 'react-router-dom'

const Quest1 = () => {
	const questId = 1
	const currentQuest = useQuest().currentQuest
	return (
		<>
			{questId === currentQuest ? (
				<Box
					bgColor={'gray.100'}
					p={['3em', '3em', '3em', '4em']}
					flexGrow={1}
				>
					<Center>
						<VStack
							bgColor="white"
							width={['90%', '60%', '45%', '35%']}
							position="relative"
						>
							<Image src={BistroImg} alt={'Coffee'} />
							<Box p={5}>
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
										Кафене "Академика"
									</Heading>
									<Box
										fontSize={{
											base: '1em',
											md: '1em',
											lg: '1.1em',
										}}
										mt={5}
									>
										Твоята задача е да намериш, къде се
										намира Кафене "Академика". А там на една
										от колоните ще намериш QR код, който да
										сканираш.
									</Box>
								</Box>
								<Button
									mt={10}
									mb={10}
									bgColor="#44818B"
									color="white"
									borderRadius="lg"
									fontSize={{
										base: '1em',
										md: '1.2em',
										lg: '1.5em',
									}}
									fontWeight="bold"
									p={8}
									_hover={{ bgColor: '#2E6269' }}
								>
									<Link
										as={RouterLink}
										to="/qr-scanner"
										className="link-decoration"
									>
										Сканирай QR
									</Link>
								</Button>
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
									1
								</Box>
							</Box>
						</VStack>
					</Center>
				</Box>
			) : (
				<CompletedQuest id={questId} />
			)}
		</>
	)
}
export default Quest1
