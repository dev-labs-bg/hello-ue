import {
	Box,
	Heading,
	Button,
	Image,
	Link,
	AlertTitle,
	Alert,
} from '@chakra-ui/react'
import { Center, VStack } from '@chakra-ui/react'
import BistroImg from './res/clock.png'
import useQuest from '../../hooks/useQuest'
import CompletedQuest from './CompletedQuest'

const Quest2 = () => {
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
										Кой си ти?
									</Heading>
									<Box
										fontSize={{
											base: '1em',
											md: '1em',
											lg: '1.1em',
										}}
										mt={5}
									>
										В този куест трябва да разкриеш кой си
										ти - ще отговориш на няколко въпроса, а
										след тях се крие изненада!
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
									<Link href="quiz" class="link-decoration">
										Започни Quiz
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
									{questId}
								</Box>
							</Box>
						</VStack>
					</Center>
				</Box>
			) : (
				<CompletedQuest id={questId} message={feedbackMessage} />
			)}
		</>
	)
}
export default Quest2
