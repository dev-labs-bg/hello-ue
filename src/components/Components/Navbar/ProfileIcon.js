import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import useSchedule from '../../../hooks/useSchedule'
import IconLogOut from '../../Icons/LogOut'
import IconProfile from '../../Icons/Profile'

export default function ProfileIcon() {
	const { auth } = useAuth()
	const [dropdownOpen, setDropdownOpen] = useState(false)

	const removeAuth = useAuth().removeAuth
	const removeProfileData = useSchedule().removeProfileData
	const navigate = useNavigate()

	function handleLogout() {
		removeAuth()
		removeProfileData()
		navigate('/')
	}

	const handleDropdownToggle = () => {
		setDropdownOpen(!dropdownOpen)
	}

	return (
		<div className="relative ml-2.5 md:ml-5">
			<button
				className="w-8 h-8 bg-teal-500 text-white rounded-full font-semibold md:hover:opacity-80 transition active:scale-95"
				onClick={handleDropdownToggle}
			>
				{auth.data.firstName.charAt(0)}
			</button>

			{dropdownOpen && (
				<div className="absolute right-0 py-2 mt-2.5 bg-[#96bfc6] border border-[#85adb3] rounded-lg shadow w-48">
					<Link
						to="/profile"
						className="px-3.5 py-2 text-gray-700 hover:bg-teal-200 hover:bg-opacity-50 flex items-center transition"
					>
						<IconProfile className="w-6 h-6 mr-1  mt-0.5" />

						<div>Профил</div>
					</Link>

					<button className="w-full px-3.5 py-2 text-gray-700 hover:bg-teal-200 hover:bg-opacity-50 flex items-center border-t border-[#85adb3] transition">
						<IconLogOut className="w-6 h-6 mr-1  mt-0.5" />

						<div onClick={handleLogout}>Изход</div>
					</button>
				</div>
			)}
		</div>
	)
}
