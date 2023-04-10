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

	const startDate = new Date().setMonth(new Date().getMonth() - 2)
	const formatStartDate = new Date(startDate).toISOString().slice(0, -5)
	const endDate = new Date().setMonth(new Date().getMonth() + 5)
	const formatEndDate = new Date(endDate).toISOString().slice(0, -5)

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

	if (isError) {
		return <EventsError />
	}

	return (
		<Box
			display="flex"
			alignItems="center"
			flexDirection="column"
			p="4"
			minH="100vh"
			bgColor="gray.100"
			overflow="hidden"
		>
			<EventsCalendar
				events={events}
				onClickDate={onClickDate}
				onChangeView={onChangeView}
			/>
			{isLoading ? (
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
				`https://cryptic-wildwood-52177.herokuapp.com/https://ue-varna.bg/bg/eventsfeed?start=${formatStartDate}+02:00&end=${formatEndDate}+03:00`,
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
