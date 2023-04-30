import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const EventsMain = () => {
	return (
		<section
			id="container"
			className="relative w-full min-h-screen bg-gradient-to-r flex items-center justify-center from-teal-200 to-indigo-200"
		>
			<Navigation />
			<Outlet />
		</section>
	)
}

export default EventsMain
