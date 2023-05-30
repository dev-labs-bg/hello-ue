import { Box, Flex, Button } from '@chakra-ui/react'
const Listing = () => {
	return (
		<Box
			borderWidth="1px"
			borderRadius="lg"
			display="flex"
			alignItems="center"
			justifyContent="center"
			height="600px"
			marginLeft="70px"
			marginRight="70px"
			bgColor="white"
		>
			<Flex bottom="20px">
				<Button
					bgColor="#008080"
					variant="solid"
					textColor="white"
					size="lg"
					marginRight="20px"
					borderTopRadius="10px"
					bottom="-200px"
				>
					Промени
				</Button>
				<Button
					bgColor="#DC143C"
					variant="solid"
					textColor="white"
					size="lg"
					marginLeft="20px"
					borderTopRadius="10px"
					bottom="-200px"
				>
					Изтрий
				</Button>
			</Flex>
		</Box>
	)
}
export default Listing
