import { Image, Center, Heading } from '@chakra-ui/react'
import noDataImgPath from './res/img_no_data.png'

const EventsListEmpty = () => {
	return (
		<Center
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: '2em'
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
				src={noDataImgPath}
			/>
			<Heading fontSize="10px">Няма събития за тази дата.</Heading>
		</Center>
	)
}

export default EventsListEmpty
