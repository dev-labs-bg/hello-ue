import Chart from './ChartComponents/Chart'
import useScheduleData from '../hooks/useScheduleData'

const Schedule = () => {
	const { chartData, isLoading, error } = useScheduleData()

	return (
		<div className="chart-container">
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error: {error}</div>
			) : (
				<Chart data={chartData} />
			)}
		</div>
	)
}

export default Schedule
