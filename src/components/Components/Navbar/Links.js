import ProfileIcon from './ProfileIcon'
import NavLink from './Link'

export default function Links() {
	return (
		<>
			<NavLink location="/" text="Начало" />

			<NavLink location="/s" text="Куестове" />

			<NavLink location="/events" text="Събития" />

			<NavLink location="/location" text="Как да стигна?" />

			<NavLink location="/s" text="Забавни спомени" />

			<NavLink location="/schedule" text="Програма" />

			<NavLink location="/sales/list" text="Продавалник" />

			<span className="hidden md:block -ml-6">
				<ProfileIcon />
			</span>
		</>
	)
}
