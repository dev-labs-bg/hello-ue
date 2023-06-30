import { Link, useLocation } from 'react-router-dom'

export default function NavLink(props) {
	const location = useLocation()

	return (
		<div
			className={`${
				location.pathname === props.location
					? 'bg-gray-200 bg-opacity-50 md:bg-transparent md:text-blue-500'
					: 'text-gray-800'
			} py-2 md:py-0 pl-1.5 lg:pl-2.5 font-semibold md:hover:opacity-70 transition rounded whitespace-nowrap`}
		>
			<Link
				to={props.location === '/' ? '/' : props.location.substring(1)}
			>
				{props.text}
			</Link>
		</div>
	)
}
