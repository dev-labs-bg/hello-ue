import Chart from './ChartComponents/Chart'
import useScheduleData from '../hooks/useScheduleData'

const Schedule = () => {
	const { chartData, isLoading } = useScheduleData()

	return (
		<div className="chart-container">
			{isLoading ? (
				<div>Loading...</div> // Render a loading screen when isLoading is true
			) : (
				<Chart data={chartData} /> // Render the chart component when isLoading is false
			)}
		</div>
	)
}

export default Schedule
