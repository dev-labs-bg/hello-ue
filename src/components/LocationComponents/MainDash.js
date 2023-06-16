import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import Corps from './Corps'

const EventsMain = () => {
	return (
		<section
			id="container"
			className="relative w-full min-h-screen bg-gradient-to-r flex items-center justify-center from-teal-200 to-indigo-200"
		>
			<div className="absolute top-[5%] left-auto inset-x-[auto] flex gap-x-10 font-semibold sm:text-lg md:text-xl lg:text-2xl">
				<Link to="/location/corps">
					<button
						type="button"
						className="hover:text-gray-600 hover:underline underline-offset-8"
					>
						Корпуси
					</button>
				</Link>
				<Link to="/location/floors">
					<button
						type="button"
						className="hover:text-gray-600 hover:underline underline-offset-8"
					>
						Етажи-първи корпус
					</button>
				</Link>
				<Link to="/location/library">
					<button
						type="button"
						className="hover:text-gray-600 hover:underline underline-offset-8"
					>
						Библиотека
					</button>
				</Link>
			</div>
			<Corps />
			<Outlet />
		</section>
	)
}

export default EventsMain
