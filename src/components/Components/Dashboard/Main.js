import dashboardImage from '../../../headerImg.jpg'
import useAuth from '../../../hooks/useAuth'
import Box from './MainBox'
import IconLine from '../../Icons/Line'
import IconCalendar from '../../Icons/Calendar'
import { Link } from 'react-router-dom'

const Main = () => {
	const { auth } = useAuth()

	return (
		<div className="pt-8 px-4 lg:pr-0 mx-auto max-w-screen-xl lg:py-10 mt-12 md:mt-0">
			<div
				style={{
					backgroundImage: `url(${dashboardImage})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
				className="bg-gray-50 border border-gray-200 rounded-lg p-4 sm:p-8 md:p-12 mb-5 shadow-sm"
			>
				<h1 className="text-white text-2xl md:text-4xl font-extrabold mb-5">
					Добре дошъл, {auth.data.firstName}
				</h1>

				<p className="text-lg text-white mb-4 bg-black bg-opacity-20 font-medium p-2.5 rounded-lg">
					Тук ще намериш всичко необходимо, за да се запознаеш с
					университета, а това приложение ще ти бъде надежден
					съпътник. Приложението предлага също и ресурси за съвети и
					насоки за успешното преминаване през учебния процес и
					справяне с академичните предизвикателства.
				</p>

				<Link
					to="/"
					className="inline-flex justify-center items-center py-[9px] px-5 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:opacity-80 transition active:scale-95"
				>
					Начало
					<svg
						className="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Link>
			</div>

			<div className="grid md:grid-cols-2 gap-5">
				<Box
					badge="Продавалник"
					badgeColor="green"
					title="Купи и продай лесно"
					text="Предоставяме ти шан да купиш или да продадеш лесно учебник през платформата без да губиш излишно време. Възползвай се сега !"
					href="/sales/list"
					icon={IconLine}
				/>

				<Box
					badge="Събития"
					badgeColor="purple"
					title="Важни събития"
					text="Вече няма да ти се налага да ровиш твърде много за да нучаваш лесно за събитията, които са организирани от университета. С няколко клика можеш да рагледаш най-важните предстоящи събития."
					href="/events"
					icon={IconCalendar}
				/>
			</div>
		</div>
	)
}

export default Main
