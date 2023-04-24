import { Box, Center } from '@chakra-ui/react'

export default function QuestStateDisplay(props) {
	let iconPath = `url('/${props.state.toLowerCase()}.svg')`

	return (
		<Box
			bgSize="contain"
			bgImage={iconPath}
			bgPosition="cover"
			bgRepeat="no-repeat"
			w="5em"
			h="5em"
		>
			<Center h="100%">{props.text}</Center>
		</Box>
	)
}
