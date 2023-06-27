import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

const MainDash = () => {
	return (
		<section
			id="container"
			className="relative w-full min-h-screen bg-gradient-to-tr from-[#034687] to-[#00c379] flex items-center justify-center "
		>
			<Navigation />
			<Outlet />
		</section>
	)
}

export default MainDash
