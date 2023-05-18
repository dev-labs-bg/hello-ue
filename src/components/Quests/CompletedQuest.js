import { Box, Center, VStack, Link } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const CompletedQuest = (props) => {
	return (
		<Box bgColor={'gray.100'} p={['3em', '3em', '3em', '4em']} flexGrow={1}>
			<Center>
				<VStack
					bgColor="white"
					width={['90%', '60%', '45%', '35%']}
					position="relative"
				>
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
						<Box textAlign="center"></Box>
						<Box>
							<Box
								size="xl"
								textAlign="center"
								color="#44818B"
								pt="3em"
								pb="3em"
							>
								Успешно премина Куест {props.id}
							</Box>
							<CheckCircleIcon
								color="green"
								boxSize={20}
								className="check-circle-animation"
							/>
						</Box>
						{props.message}
						<Box size="xl" pt="3em" pb="2em" color="#44818B">
							<Link href="quests-menu" class="link-decoration">
								Върни се обратно
							</Link>
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
							{props.id}
						</Box>
					</Box>
				</VStack>
			</Center>
		</Box>
	)
}
export default CompletedQuest
