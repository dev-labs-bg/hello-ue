import { Link, useLocation } from 'react-router-dom'

export default function Tabs(props) {
	const location = useLocation()

	return (
		<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-5 mt-5 md:mt-0">
			<ul className="flex justify-center">
				{props.tabs.map((tab, index) => (
					<li key={index} className="mr-1 md:mr-2">
						<Link
							to={tab.path}
							className={`${
								location.pathname === tab.path
									? 'text-blue-500 border-blue-400'
									: 'hover:text-blue-500 border-transparent hover:border-blue-400'
							} inline-block p-4 border-b-2 rounded-t-lg font-semibold whitespace-nowrap`}
						>
							{tab.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
