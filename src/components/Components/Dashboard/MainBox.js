import { Link } from 'react-router-dom'

const MainBox = (props) => {
	return (
		<div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-12 shadow">
			<div
				className={`bg-${props.badgeColor}-100 text-${props.badgeColor}-800 text-xs font-semibold inline-flex items-center px-2.5 py-0.5 rounded-md mb-2`}
			>
				<props.icon outline={true} className="w-4 h-4 mr-1" />
				{props.badge}
			</div>

			<h2 className="text-gray-700 text-2xl 2xl:text-3xl font-extrabold mb-2">
				{props.title}
			</h2>

			<p className="text-lg font-normal text-gray-500 mb-4">
				{props.text}
			</p>

			<Link
				to={props.href}
				className="text-blue-500 font-semibold hover:underline text-lg inline-flex items-center"
			>
				Виж повече
				<svg
					className="w-4 h-4 ml-1.5 mt-1"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</Link>
		</div>
	)
}

export default MainBox
