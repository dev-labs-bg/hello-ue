import { useState } from 'react'
import { Box, Center, VStack } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import QrScannerPlugin from './QrScannerPlugin'

const QrCodeScanner = () => {
	const [showScanner, setShowScanner] = useState(true)
	const [feedbackMessage, setFeedbackMessage] = useState('')

	const onNewScanResult = (decodedText, decodedResult) => {
		if (decodedText === '#Akademika') {
			setShowScanner(false)
			setFeedbackMessage('Успешно премина Куест 1 ')
		} else {
			setFeedbackMessage('Не се получи? Опитай пак')
		}
	}

	return (
		<Box
			bgColor={'gray.100'}
			p={[
				'3em', // 0-30em
				'3em', // 30em-48em
				'3em', // 48em-62em
				'4em', // 62em+
			]}
			flexGrow={1}
		>
			<Center>
				<VStack
					bgColor="white"
					width={[
						'100%', // 0-30em
						'70%', // 30em-48em
						'55%', // 48em-62em
						'40%', // 62em+
					]}
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
						Намери кафене "Академика" и се огледай за QR код.
					</Box>
					{!showScanner && (
						<CheckCircleIcon
							color="green"
							boxSize={20}
							className="check-circle-animation"
						/>
					)}
					{showScanner && (
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
							pt="1rem"
							pb="4rem"
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
	)
}

export default QrCodeScanner
