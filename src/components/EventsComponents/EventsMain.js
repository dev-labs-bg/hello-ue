import React, { useState, useEffect } from 'react'
import EventsError from './EventsError'
import EventsList from './EventsList'
import EventsLoading from './EventsLoading'

const EventsMain = () => {
	useEffect(() => {
		fetchEvents()
	 }, [])

	const [events, setEvents] = useState([])
	const [isError, setError] = useState(false)
	const [isLoading, setLoading] = useState(true)

	if (isError) {
		return (
			<EventsError/>
		)
	} else if (isLoading) {
		return <EventsLoading/>
	} else {
		return <EventsList events={events} isLoading = {isLoading}/>
	}

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
