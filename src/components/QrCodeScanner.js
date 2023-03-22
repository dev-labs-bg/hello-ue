import { useState } from 'react'
import { Box, Center, VStack, CloseButton } from '@chakra-ui/react'
import { QrReader } from 'react-qr-reader'

const QrCodeScanner = () => {
	const [scanResultWebCam, setScanResultWebCam] = useState('')
	const isSucessed = false

	const handleErrorWebCam = (error) => {
		console.log(error)
	}

	const handleScanWebCam = (result, error) => {
		if (!!result) {
			setScanResultWebCam(result?.text)
			console.log(scanResultWebCam)
		}
		if (!!error) {
			console.log(error)
		}
	}

	return (
		<Box bgColor="gray.100" position="relative">
			<Center>
				<CloseButton
					boxSize="6em"
					bgColor="red"
					borderRadius="30"
					position="fixed"
					top="-260"
				/>
				<VStack
					bgColor="white"
					p="2rem"
					width={[
						'100%', // 0-30em
						'70%', // 30em-48em
						'50%', // 48em-62em
						'35%', // 62em+
					]}
				>
					<h1>Сканирай QR Code</h1>
					<Box w="100%">
						<QrReader
							delay={500}
							onError={handleErrorWebCam}
							onScan={handleScanWebCam}
							onResult={handleScanWebCam}
						/>
					</Box>
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
