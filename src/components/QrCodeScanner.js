import { useState } from 'react'
import { Box, Center, VStack } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { QrReader } from 'react-qr-reader'
import '../App.css'

const QrCodeScanner = () => {
	const [scanResultWebCam, setScanResultWebCam] = useState('')
	const handleScanWebCam = (result, error) => {
		if (!!result) {
			setScanResultWebCam(result?.text)
			console.log(result.text)
		}
		if (!!error) {
			console.log(error)
		}
	}

	return (
		<Box bgColor="gray.100">
			<Center>
				<VStack
					bgColor="white"
					p="2rem"
					width={['100%', '70%', '50%', '35%']}
				>
					<h1>Сканирай QR Code</h1>
					{scanResultWebCam === '#Akademika' ? (
						<CheckCircleIcon
							color="green"
							boxSize={20}
							className="check-circle-animation"
						/>
					) : (
						<Box w="100%">
							<QrReader
								scanDelay={1000}
								onResult={handleScanWebCam}
							/>
						</Box>
					)}

					{scanResultWebCam === '' && ''}
					{scanResultWebCam === '#Akademika' && (
						<h3>Успешно премина Куест 1 </h3>
					)}
					{scanResultWebCam !== '' &&
						scanResultWebCam !== '#Akademika' && (
							<h3>Не се получи? Опитай пак</h3>
						)}
				</VStack>
			</Center>
		</Box>
	)
}

export default QrCodeScanner
