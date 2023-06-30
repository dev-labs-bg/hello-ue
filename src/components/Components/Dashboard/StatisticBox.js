import { Link } from 'react-router-dom'

const StatisticBox = (props) => {
	return (
		<Link
			to={props.path}
			className="w-full h-fit rounded-lg shadow bg-white hover:bg-gray-50 active:scale-95 transition"
		>
			<div className="p-4 md:flex items-center" key={props.index}>
				<div
					className={`p-3 rounded-full text-${props.color}-400 bg-${props.color}-100 md:mr-4 w-fit mx-auto md:mx-0 mb-1 md:mb-0`}
				>
					<props.icon outline={true} className="w-5 h-5" />
				</div>

				<div>
					<p className="text-sm font-semibold text-gray-700">
						{props.name}
					</p>

					<p className="font-semibold text-gray-700 md:text-left">
						{props.number}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default StatisticBox

