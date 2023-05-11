import Chart from './ChartComponents/Chart'
import Proxy from './Proxy'
const Schedule = () => {
	const data = Proxy()
	return (
		<div className="chart-container">
			<Chart data={data} />
		</div>
	)
}

export default Schedule
