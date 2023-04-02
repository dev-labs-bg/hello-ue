import { Box, Heading, Button, Image } from '@chakra-ui/react'
import { Center, VStack } from '@chakra-ui/react'
import clockImg from '../clock.png'

const Quest2Main = () => {
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
					<Image src={clockImg} alt={'Coffee'} />
					<Box
						bgSize="cover"
						bgPosition="top center"
						top={0}
						left={0}
						right={0}
						bottom={0}
						zIndex="-1"
					/>
					<Box textAlign="center">
						<Heading fontSize="3em" fontWeight="bold" mt={10}>
							Кой си ти?
						</Heading>
						<Box mt={10} fontSize="1.5em">
							В този куест трябва да разкриеш кой си ти - ще
							отговориш на няколко въпроса, а след тях се крие
							изненада!
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
							Започни QUIZ
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
							2
						</Box>
					</Box>
				</VStack>
			</Center>
		</Box>
	)
}

export default Quest2Main
