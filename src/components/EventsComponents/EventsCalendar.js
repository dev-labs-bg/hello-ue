import Calendar from 'react-calendar'
import './EventsCalendar.css'

const EventsCalendar = ({ events, onClickDate, onChangeView }) => {
	const eventDates = events.map((event) => new Date(event.start))

	return (
		<Calendar
			onChange={(value) => onClickDate(value)}
			tileClassName={({ date }) => {
				if (
					eventDates.find(
						(x) =>
							x.getDate() === date.getDate() &&
							x.getMonth() === date.getMonth() &&
							x.getYear() === date.getYear()
					)
				) {
					return 'highlight'
				}
			}}
			onActiveStartDateChange={({ activeStartDate }) =>
				onChangeView(activeStartDate)
			}
		/>
	)
}

export default EventsCalendar
