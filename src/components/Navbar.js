import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.png'
// import Logout from './Logout'
import NavBarIcon from './Components/Navbar/ProfileIcon'
import NavBarLinks from './Components/Navbar/Links'
import IconBars from './Icons/Bars'
import IconXmark from './Icons/Xmark'

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false)

	const handleMenuToggle = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<>
			<nav className="fixed md:static w-full md:flex justify-between items-center px-5 md:px-8 bg-slate-50 py-2.5 z-50 border-b border-gray-200">
				<Link to="/" className="w-fit items-center flex gap-1 md:gap-3">
					<img alt="App Logo" className="h-9 mt-1" src={logo} />

					<span className="self-center text-gary-800 whitespace-nowrap text-xl font-semibold">
						Hello UE
					</span>
				</Link>

				<button
					onClick={handleMenuToggle}
					className="md:hidden absolute top-3.5 right-5 bg-gray-200 text-slate-600 p-1.5 rounded transition"
				>
					{menuOpen ? (
						<IconXmark stroke="2.1" className="w-5 h-5" />
					) : (
						<IconBars stroke="2.1" className="w-5 h-5" />
					)}
				</button>

				<div className="flex items-center">
					<div className="hidden md:flex w-full items-center gap-4 xl:gap-6 text-[15px]">
						<NavBarLinks />
					</div>
				</div>

				<span className="block md:hidden absolute right-16 top-3.5">
					<NavBarIcon />
				</span>

				{menuOpen && (
					<div className="md:hidden w-full py-1.5 bg-gray-100 rounded-md mt-2 shadow-md border border-gray-200">
						<NavBarLinks />
					</div>
				)}
			</nav>
		</>
	)
}
