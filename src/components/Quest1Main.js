import { Box, Heading, Button, Image } from '@chakra-ui/react'
import { Center, VStack } from '@chakra-ui/react'
import kafeImg from '../Kafe.jpg'

const Quest1Main = () => {
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
					<Image src={kafeImg} alt={'Coffee'} />
					<Box
						bgSize="cover"
						bgPosition="top center"
						top={0}
						left={0}
						right={0}
						bottom={0}
						zIndex={-1}
					/>
					<Box textAlign="center">
						<Heading fontSize="3em" fontWeight="bold" mt={10}>
							Кафене "Академика"
						</Heading>
						<Box mt={10} fontSize="1.5em">
							Твоята задача е да намериш, къде се намира Кафене
							"Академика". А там на една от колоните ще намериш QR
							код, който да сканираш.
						</Box>
						<Button
							mt={10}
							mb={10}
							bgColor="#44818B"
							color="white"
							borderRadius="lg"
							fontSize="1.5em"
							fontWeight="bold"
							p={8}
							_hover={{ bgColor: '#2E6269' }}
						>
							Сканирай QR
						</Button>
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
					</Box>
				</VStack>
			</Center>
		</Box>
	)
}
export default Quest1Main
