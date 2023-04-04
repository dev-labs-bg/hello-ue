import { Box } from '@chakra-ui/react'
import EventsListItem from './EventsListItem'
import EventsListEmpty from './EventsListEmpty'

const EventsList = ({ events, isLoading }) => {
	const eventsItems = events.map((event) => <EventsListItem event={event} />)

	if (!isLoading && events.length === 0) {
		return <EventsListEmpty />
	} else {
		return (
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box>{eventsItems}</Box>
			</Box>
		)
	}
}

export default EventsList
