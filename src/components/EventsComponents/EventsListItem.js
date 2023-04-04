import { Box, Circle, Text, Heading } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const EventsListItem = ({ event }) => {
	return (
			<Box
				key={event.id}
				style={{
					maxWidth: '100vh',
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'start',
					padding: '10px',
				}}
			>
				<Box
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Circle size="15px" bg="white" color="#008b8b" margin="5px">
						<CheckCircleIcon boxSize={5} />
					</Circle>
					<Box
						style={{
							marginTop: '5px',
							width: '0.5px',
							height: '5vh',
							background: '#cfd5db',
						}}
					/>
				</Box>
				<Box
					w={{
						base: '18em',
						sm: '25em',
						md: '30em',
						lg: '62em',
						xl: '76em',
						'2xl': '96em',
					}}
					style={{
						play: 'flex',
						flexDirection: 'column',
					}}
				>
					<Text>{event.event_date_from}</Text>
					<Heading style={{ fontSize: '1em' }}>{event.title}</Heading>
				</Box>
			</Box>
	)
}

export default EventsListItem
