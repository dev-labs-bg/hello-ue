import { Box, Center } from '@chakra-ui/react'

export default function QuestStateDisplay(props) {
	let iconPath = `url('/${props.state.toLowerCase()}.svg')`
	let sizeXy = `${props.size}em`
	return (
		<Box
			bgSize="contain"
			bgImage={iconPath}
			bgPosition="cover"
			bgRepeat="no-repeat"
			w={sizeXy}
			h={sizeXy}
		>
			<Center h="100%">{props.text}</Center>
		</Box>
	)
}
