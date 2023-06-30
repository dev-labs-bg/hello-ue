import StatisticBox from './StatisticBox'
import IconFolderPlus from '../../Icons/FolderPlus'
import IconUserPlus from '../../Icons/UserPlus'
import IconCalendar from '../../Icons/Calendar'
import IconPhoto from '../../Icons/Photo'
import IconRectangleStack from '../../Icons/RectangleStack'
import IconFolder from '../../Icons/Folder'

const Statistics = () => {
	const data = [
		{
			name: 'Човека започнали куест',
			num: 50,
			path: '/',
			color: 'orange',
			icon: IconRectangleStack,
		},
		{
			name: 'Качени снимки',
			num: 36,
			path: '/',
			color: 'amber',
			icon: IconPhoto,
		},
		{
			name: 'Нови обяви',
			num: 3,
			path: 'sales',
			color: 'red',
			icon: IconFolderPlus,
		},
		{
			name: 'Новите членове',
			num: 28,
			path: '/',
			color: 'emerald',
			icon: IconUserPlus,
		},
		{
			name: 'Събития',
			num: 2,
			path: '/',
			color: 'blue',
			icon: IconCalendar,
		},
		{
			name: 'Обяви',
			num: 10,
			path: '/sales/advertisements',
			color: 'purple',
			icon: IconFolder,
		},
	]

	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 h-fit px-4 lg:pl-0 lg:py-10 gap-5">
			{data.map((item, index) => (
				<StatisticBox
					key={index}
					index={index}
					name={item.name}
					number={item.num}
					color={item.color}
					path={item.path}
					icon={item.icon}
				/>
			))}
		</div>
	)
}

export default Statistics
