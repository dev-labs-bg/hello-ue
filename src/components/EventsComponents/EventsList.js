import { Accordion, Box } from '@chakra-ui/react'
import EventsListItem from './EventsListItem'
import EventsListEmpty from './EventsListEmpty'

const EventsList = ({ events, isLoading, currentView, selectedDate }) => {
	const eventsPerMonth = events.filter(
		(event) =>
			new Date(event.start).getMonth() === currentView.getMonth() &&
			new Date(event.start).getYear() === currentView.getYear()
	)

	const eventsItems = eventsPerMonth.map((event) => (
		<EventsListItem event={event} />
	))

	const selectedEvents = events.filter(
		(event) =>
			new Date(selectedDate).getDate() ===
				new Date(event.start).getDate() &&
			new Date(selectedDate).getMonth() ===
				new Date(event.start).getMonth() &&
			new Date(selectedDate).getYear() === new Date(event.start).getYear()
	)

	const selectedEventItems = selectedEvents.map((event) => (
		<EventsListItem event={event} />
	))

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
				{selectedDate !== 0 && selectedEventItems.length === 0 && (
					<EventsListEmpty />
				)}
				{selectedDate > 0 && selectedEvents && (
					<Accordion>{selectedEventItems}</Accordion>
				)}
				{selectedDate === 0 && <Accordion>{eventsItems}</Accordion>}
				{selectedDate === 0 && eventsItems.length === 0 && (
					<EventsListEmpty />
				)}
			</Box>
		)
	}
}

export default EventsList
