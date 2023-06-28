import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const MainDash = () => {
	return (
		<section
			id="container"
			className="relative w-full min-h-screen bg-gradient-to-tr from-[#edf2f7] flex items-center justify-center "
		>
			<Navigation />
			<Outlet />
		</section>
	)
}

export default MainDash
