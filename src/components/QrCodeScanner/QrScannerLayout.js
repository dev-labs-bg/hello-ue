import { useState } from 'react'
import { Box, Center, VStack } from '@chakra-ui/react'
import QrScannerPlugin from './QrScannerPlugin'
import useQuest from '../../hooks/useQuest'
import CompletedQuest from '../Quests/CompletedQuest'

const QrCodeScanner = () => {
	const [feedbackMessage, setFeedbackMessage] = useState('')

	const questId = 1
	const updateQuest = useQuest().updateQuest
	const currentQuest = useQuest().currentQuest

	const onNewScanResult = (decodedText, decodedResult) => {
		if (decodedText === '#Akademika') {
			updateQuest()
		} else {
			setFeedbackMessage('Не се получи? Опитай пак')
		}
	}

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
							width={['100%', '70%', '55%', '40%']}
							position="relative"
						>
							<Box
								size="xl"
								textAlign="center"
								color="#44818B"
								mt="3rem"
								mb="1rem"
								ml="0.5em"
								mr="0.5em"
							>
								Намери кафене "Академика" и се огледай за QR
								код.
							</Box>
							{questId === currentQuest && (
								<Box width={'100%'}>
									<QrScannerPlugin
										fps={10}
										disableFlip={false}
										qrCodeSuccessCallback={onNewScanResult}
									/>
								</Box>
							)}
							{
								<Box
									size="xl"
									textAlign="center"
									color="#44818B"
									h="3em"
								>
									{feedbackMessage}
								</Box>
							}
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
						</VStack>
					</Center>
				</Box>
			) : (
				<CompletedQuest id={questId} />
			)}
		</>
	)
}

export default QrCodeScanner
