import {
	Box,
	Flex,
	Button,
	Text,
	IconButton,
	VStack,
	Spacer,
} from '@chakra-ui/react'
import { HamburgerIcon, EmailIcon } from '@chakra-ui/icons'
import Listing from './Listing'
const MySalesListings = () => {
	return (
		<Box bgColor="#F5F5F5">
			<Text color="#696969" marginLeft="25px" size="md">
				Продавалник-Моите обяви
			</Text>
			<Box
				borderWidth="1px"
				borderRadius="lg"
				bgColor="white"
				marginLeft="20px"
				marginRight="20px"
			>
				<IconButton
					icon={<HamburgerIcon />}
					marginTop="10px"
					variant="ghost"
					size="lg"
					colorScheme="teal"
				/>
				<VStack spacing="1" marginTop="-50px" marginBottom="50px">
					<Text fontSize="2xl" as="b">
						Продавалник
					</Text>
					<Text>Полезно</Text>
				</VStack>
				<Flex marginLeft="20px" marginRight="20px">
					<Button variant="outline" colorScheme="teal" size="lg">
						Обяви
					</Button>
					<Spacer />
					<Button
						variant="outline"
						colorScheme="teal"
						size="lg"
						marginLeft="50px"
						leftIcon={<EmailIcon />}
						marginBottom="5px"
					>
						Съобщения
					</Button>
					<Spacer />
					<Button variant="outline" colorScheme="teal" size="lg">
						Моите обяви
					</Button>
				</Flex>
			</Box>
			<Flex alignItems="center" justifyContent="center">
				<Button
					bgColor="#008080"
					variant="solid"
					textColor="white"
					size="lg"
					marginBottom="20px"
					marginTop="20px"
				>
					+ Добави нова обява
				</Button>
			</Flex>
			<Listing />
		</Box>
	)
}
export default MySalesListings
