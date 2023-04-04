import { Spinner, Center } from '@chakra-ui/react'

const EventsLoading = () => {
	return (
		<Center
			style={{
				display: 'flex',
				flexDirection: 'column',
				padding: '10em',
			}}
		>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="#008b8b"
				size="xl"
			/>
		</Center>
	)
}

export default EventsLoading
