import { Center, Image, VStack, Box, Flex, Card } from '@chakra-ui/react'
import QuestStateDisplay from './QuestStateDisplay'
import QuestConnectorImg from './res/connector.png'
import useQuest from '../../hooks/useQuest'

export default function QuestsMenu() {
	let currentQuest = useQuest().currentQuest

	const questsCount = 6

	let output = []
	for (let i = 1; i <= questsCount; i++) {
		if (currentQuest > i) {
			output.push(<QuestStateDisplay id={i} state="done" boxSize="5" />)
		} else if (currentQuest === i) {
			output.push(
				<QuestStateDisplay
					id={i}
					state="current"
					boxSize="5"
					text={currentQuest}
					textSize="2"
					textOpacity="0.7"
				/>
			)
		} else {
			output.push(<QuestStateDisplay state="locked" boxSize="5" />)
		}
		if (i !== questsCount) {
			output.push(
				<Image src={QuestConnectorImg} height="90px" m={41} mt={70} />
			)
		}
	}
	return (
		<>
			<Box position="relative">
				<Card w="8em" h="8em" position="absolute" top="1em" right="1em">
					<Flex m="auto">
						<QuestStateDisplay state="locked" boxSize="1.5" />{' '}
						<Box fontSize="0.8em" fontWeight="medium" ml="0.5em">
							Заключен
						</Box>
					</Flex>
					<Flex m="auto">
						<QuestStateDisplay state="current" boxSize="1.5" />{' '}
						<Box fontSize="0.8em" fontWeight="medium" ml="0.5em">
							Отключен
						</Box>
					</Flex>
					<Flex m="auto">
						<QuestStateDisplay state="done" boxSize="1.5" />{' '}
						<Box fontSize="0.8em" fontWeight="medium" ml="0.5em">
							Завършен
						</Box>
					</Flex>
				</Card>

				<Center pt="2em" mb="2em">
					<VStack>{output}</VStack>
				</Center>
			</Box>
		</>
	)
}
