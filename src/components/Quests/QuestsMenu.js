import { Center, Image, VStack } from '@chakra-ui/react'
import QuestStateDisplay from './QuestStateDisplay'
import PathImage from './icons/path2.png'
import useQuest from '../../hooks/useQuest'

export default function QuestsMenu() {
	let currentQuest = useQuest().currentQuest

	const questsCount = 6

	let output = []
	for (let i = 1; i <= questsCount; i++) {
		if (currentQuest > i) {
			output.push(<QuestStateDisplay id={i} state="done" size="5" />)
		} else if (currentQuest === i) {
			output.push(
				<QuestStateDisplay
					id={i}
					state="current"
					size="5"
					text={currentQuest}
				/>
			)
		} else {
			output.push(<QuestStateDisplay id={i} state="locked" size="5" />)
		}
		if (i !== questsCount) {
			output.push(<Image src={PathImage} height="90px" m={41} mt={70} />)
		}
	}
	return (
		<>
			<Center mt="2em" mb="2em">
				<VStack>{output}</VStack>
			</Center>
		</>
	)
}
