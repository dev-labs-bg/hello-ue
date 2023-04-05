import React, { useState, useEffect } from 'react'
import EventsError from './EventsError'
import EventsList from './EventsList'
import EventsLoading from './EventsLoading'
import EventsCalendar from './EventsCalendar'
import { Box } from '@chakra-ui/react'

const EventsMain = () => {
	const [events, setEvents] = useState([])
	const [isError, setError] = useState(false)
	const [isLoading, setLoading] = useState(true)
	const [currentView, setCurrentView] = useState(new Date())
	const [selectedDate, setSelectedDate] = useState(0)

	useEffect(() => {
		fetchEvents()
	}, [])

	function onClickDate(value) {
		setSelectedDate(value)
	}

	function onChangeView(activeStartDate) {
		setCurrentView(activeStartDate)
		setSelectedDate(0)
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			flexDirection="column"
			p="4"
			minH="100vh"
			bgColor="gray.100"
		>
			<EventsCalendar
				events={events}
				onClickDate={onClickDate}
				onChangeView={onChangeView}
			/>
			{isError && <EventsError />}
			{!isError && isLoading ? (
				<EventsLoading />
			) : (
				<EventsList
					events={events}
					isLoading={isLoading}
					currentView={currentView}
					selectedDate={selectedDate}
				/>
			)}
		</Box>
	)

	async function fetchEvents() {
		let response = null
		try {
			let request = await fetch(
				'https://ue-varna.bg/bg/eventsfeed?start=2023-02-27T00:00:00+02:00&end=2023-04-10T00:00:00+03:00',
				{
					method: 'GET',
				}
			)
			response = await request.json()
			if (!request.ok) {
				throw new Error(response ? response.error : request.statusText)
			}
		} catch (err) {
			console.log(err)
			setError(true)
			setLoading(false)
		}

		if (response && !response.error) {
			delete response.success
			setEvents(response)
			setError(false)
			setLoading(false)
		}
	}
}

export default EventsMain
