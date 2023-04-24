import { Center, Image, VStack } from '@chakra-ui/react'
import QuestStateDisplay from './QuestStateDisplay'
import PathImage from './icons/path2.png'
import useQuest from '../../hooks/useQuest'

export default function QuestsMenu() {
	let currentQuest = useQuest().currentQuest
	let output = []
	for (let i = 1; i <= 6; i++) {
		if (currentQuest > i) {
			output.push(<QuestStateDisplay id={i} state="done" />)
		} else if (currentQuest === i) {
			output.push(
				<QuestStateDisplay id={i} state="current" text={currentQuest} />
			)
		} else {
			output.push(<QuestStateDisplay id={i} state="locked" />)
		}
		if (i !== 6) {
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
