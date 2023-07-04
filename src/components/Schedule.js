import Chart from './ChartComponents/Chart'
import useScheduleData from '../hooks/useScheduleData'

const loadingImage = process.env.PUBLIC_URL + '/loading.gif'
const errorImage = process.env.PUBLIC_URL + '/no-access.gif'
const errorMessage =
	'Опа! Няма налични данни за графика. Може би студентите са в сесия?'

const Schedule = () => {
	const { chartData, isLoading, error } = useScheduleData()

	return (
		<div className="chart-container">
			{isLoading ? (
				<div className="loading-container">
					<img
						src={loadingImage}
						alt="Loading..."
						className="loading-image"
					/>
					<div className="loading-text">Loading...</div>
				</div>
			) : error ? (
				<div className="error-container">
					<img src={errorImage} alt="Error" className="error-image" />
					<div className="error-message">{errorMessage}</div>
				</div>
			) : (
				<Chart data={chartData} />
			)}
		</div>
	)
}

export default Schedule
