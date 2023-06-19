import Main from '../Components/Dashboard/Main'
import Statistics from '../Components/Dashboard/Statistics'

const Dashboard = () => {
	return (
		<div className="min-h-screen bg-[#edf2f7] grid lg:grid-cols-3 gap-5">
			<div className="lg:col-span-2">
				<Main />
			</div>
			<Statistics />
		</div>
	)
}

export default Dashboard
