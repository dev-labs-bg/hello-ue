import { Flex, Box, Text, IconButton, Image, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useQuests } from './useQuests'

import {
	IconCurrent,
	IconDone,
	IconLocked,
	IconCurrentSmall,
	IconDoneSmall,
	IconLockedSmall,
} from './Icons'
import PathImage from './icons/path.png'

export default function QuestList() {
	const [quests, completeQuest] = useQuests()

	return (
		<Flex direction="column" mr={100} mt={5}>
			{quests.map((quest) => (
				<Box
					direction="column"
					alignItems="center"
					key={quest.id}
					maxW="250px"
					mx="auto"
				>
					{quest.isComplete ? (
						<Box maxWidth={100}>
							<IconButton
								bg="#FFFFFF"
								_hover="#FFFFFF"
								to={'/questTwo'}
								icon={<IconDone />}
								mt={8}
							/>
							<Image
								src={PathImage}
								height="90px"
								m={41}
								mt={70}
							/>
						</Box>
					) : quest.isUnlocked ? (
						<Box maxWidth={100}>
							<IconButton
								bg="#FFFFFF"
								_hover="#FFFFFF"
								icon={<IconCurrent />}
								mt={8}
								//to={'/questTwo'} //it has to be one
								// onClick={() => {
								// 	completeQuest(quests, quest.id, setQuests)
								// 	unlockQuest(quests, quest.id, setQuests)
								// }}
								as={Link}
							></IconButton>
							<Image
								src={PathImage}
								height="90px"
								m={41}
								mt={70}
							/>
						</Box>
					) : (
						<Box maxWidth={100}>
							<IconButton
								bg="#FFFFFF"
								_hover="#FFFFFF"
								icon={<IconLocked />}
								mt={8}
							/>
							<Image
								src={PathImage}
								height="90px"
								m={41}
								mt={70}
							/>
						</Box>
					)}
				</Box>
			))}

			{/* Locked Quests */}
			<Flex
				direction="column"
				mr={100}
				mt={5}
				alignItems="center"
				maxW="250px"
				mx="auto"
			>
				<Box maxWidth={100}>
					<IconButton
						bg="#FFFFFF"
						_hover="#FFFFFF"
						icon={<IconLocked />}
						mt={8}
					/>
					<Image src={PathImage} height="90px" m={41} mt={70} />
				</Box>
				<Box maxWidth={100}>
					<IconButton
						bg="#FFFFFF"
						_hover="#FFFFFF"
						icon={<IconLocked />}
						mt={8}
					/>
					<Image src={PathImage} height="90px" m={41} mt={70} />
				</Box>
				<Box maxWidth={100}>
					<IconButton
						bg="#FFFFFF"
						_hover="#FFFFFF"
						icon={<IconLocked />}
						mt={8}
					/>
					<Image src={PathImage} height="90px" m={41} mt={70} />
				</Box>
			</Flex>

			{/* Legend */}
			<Box position="absolute" top="auto" right={0}>
				<Stack spacing="3" mr="20px">
					<Flex alignItems="center">
						<IconLockedSmall />
						<Text mt="2px" ml={3} fontSize={13}>
							Заключен
						</Text>
					</Flex>

					<Flex alignItems="center">
						<IconCurrentSmall />
						<Text mt="2px" ml={3} fontSize={13}>
							Отключен
						</Text>
					</Flex>

					<Flex alignItems="center">
						<IconDoneSmall />
						<Text mt="2px" ml={3} fontSize={13}>
							Завършен
						</Text>
					</Flex>
				</Stack>
			</Box>
		</Flex>
	)
}
