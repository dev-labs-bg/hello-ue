import { Link, useLocation } from 'react-router-dom'

export default function NavLink(props) {
	const location = useLocation()

	return (
		<div
			className={`${
				location.pathname === props.location
					? 'bg-teal-200 bg-opacity-50 md:bg-transparent md:text-teal-500'
					: 'text-gray-800'
			} py-2 md:py-0 pl-3 font-semibold md:hover:opacity-70 transition rounded whitespace-nowrap`}
		>
			<Link
				to={props.location === '/' ? '/' : props.location.substring(1)}
			>
				{props.text}
			</Link>
		</div>
	)
}
