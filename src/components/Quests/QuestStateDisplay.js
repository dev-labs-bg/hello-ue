import { Box, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

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
		<Link to={linkTo} class="link-decoration">
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
