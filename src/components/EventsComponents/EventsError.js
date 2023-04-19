import { Center, Heading, Image } from '@chakra-ui/react'
import imgErrorPath from './res/img_error.png'

const EventsError = () => {
	return (
		<Center
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '2em',
			}}
		>
			<Image
				boxSize={{
					base: '10em',
					sm: '12em',
					md: '13em',
					lg: '14em',
					xl: '15em',
					'2xl': '20em',
				}}
				src={imgErrorPath}
			/>
			<Heading fontSize="10px">Упс! Нещо не е наред</Heading>
		</Center>
	)
}

export default EventsError

