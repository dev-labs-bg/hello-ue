import { Box, Heading, Button, Image } from '@chakra-ui/react'
import kafeImg from '../Kafe.jpg'

//import useAuth from '../../hooks/useAuth'

const Quest1Main = () => {
	//const { auth } = useAuth()

		return (


			<Box maxWidth={"75%"}
				margin={"0 auto"}
				boxShadow={"0px 2px 8px -1px"}
				marginTop={"4rem"}
				zIndex={"-1"}
				padding={"8rem"}
				pl={{ lg: '4em' }}
				pr={{ lg: '4em' }}
				bgColor="gray.100"
				position="relative">

			<Box maxWidth={"100%"}>

			<Box position={"absolute"}
				bgColor={"blue.400"}
				height={"90px"}
				width={"90px"}
				borderRadius={"70%"}
				color={'white'}
				fontSize={"32px"}
			    display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				fontWeight={"bold"}
				top={"6%"}
				left={"5px"}>
				1
			</Box>
				<Image src={kafeImg} alt={"Coffee"} />

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
					Кафене "Академика"
				</Heading>
				<Box mt={10} fontSize="1.5em">
					Твоята задача е да намериш, къде се намира Кафене "Академика". А там на една от колоните ще намериш QR код, който да сканираш.
				</Box>
				<Button
					mt={10}
					bgColor="blue.400"
					color="white"
					borderRadius="lg"
					fontSize="1.5em"
					fontWeight="bold"
					p={8}
					_hover={{ bgColor: 'blue.600' }}
				>
					Сканирай QR
				</Button>
			</Box>
		</Box>
		</Box>
	)
}


  export default Quest1Main

