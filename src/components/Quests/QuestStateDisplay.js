import { Box, Center, Link } from '@chakra-ui/react'

export default function QuestStateDisplay(props) {
	let iconPath = `url('/${props.state.toLowerCase()}.svg')`
	let boxSizeXy = `${props.boxSize}em`
	const linkTo = props.id ? `/quest${props.id}` : '/quests-menu'

	const textStyle = {
		fontSize: `${props.textSize}em`,
		opacity: `${props.textOpacity}`,
		fontWeight: `bold`,
	}

	return (
		<Link href={linkTo} class="questLink">
			<Box
				bgSize="contain"
				bgImage={iconPath}
				bgPosition="cover"
				bgRepeat="no-repeat"
				w={boxSizeXy}
				h={boxSizeXy}
			>
				<Center h="100%" style={textStyle}>
					{props.text}
				</Center>
			</Box>
		</Link>
	)
}
