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
		<Box bgColor="gray.100" p="4em">
			<Center>
				<VStack
					bgColor="white"
					width={[
						'100%', // 0-30em
						'70%', // 30em-48em
						'55%', // 48em-62em
						'35%', // 62em+
					]}
				>
					<h1>Сканирай QR Code</h1>
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
								qrbox={250}
								disableFlip={false}
								qrCodeSuccessCallback={onNewScanResult}
							/>
						</Box>
					)}
					{<h3>{feedbackMessage}</h3>}
				</VStack>
			</Center>
		</Box>
	)
}

export default QrCodeScanner
