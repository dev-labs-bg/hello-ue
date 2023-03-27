import { useState } from 'react'
import { Flex, Box, Text, Badge, IconButton } from '@chakra-ui/react'
import { IconCurrent, IconDone, IconLocked } from './Icons'

export default function QuestList() {
	const [quests, setQuests] = useState([
		{ id: 1, name: '1', isComplete: false, isUnlocked: true },
		{ id: 2, name: '2', isComplete: false, isUnlocked: false },
		{ id: 3, name: '3', isComplete: false, isUnlocked: false },
		{ id: 4, name: '4', isComplete: false, isUnlocked: false },
		{ id: 5, name: '5', isComplete: false, isUnlocked: false },
		{ id: 6, name: '6', isComplete: false, isUnlocked: false },
	])

	function completeQuest(questId) {
		const updatedQuests = quests.map((quest) => {
			if (quest.id === questId) {
				return { ...quest, isComplete: true }
			} else {
				return quest
			}
		})
		setQuests(updatedQuests)
	}

	return (
		<Flex direction="column" mt={10}>
			{quests.map((quest) => (
				<Box key={quest.id} textAlign="center">
					<Text mt={10}>{quest.name}</Text>
					{quest.isComplete ? (
						<Badge mt={2}>
							<IconDone />
						</Badge>
					) : quest.isUnlocked ? (
						<IconButton
							icon={<IconCurrent />}
							mt={10}
							onClick={() => completeQuest(quest.id)}
						/>
					) : (
						<Badge mt={2}>
							<IconLocked />
						</Badge>
					)}
				</Box>
			))}
		</Flex>
	)
}
