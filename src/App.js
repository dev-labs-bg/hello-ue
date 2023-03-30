import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Schedule from './components/Schedule'
import Dashboard from './components/DashboardComponents/Dashboard'
import Profile from './components/Profile'
import Logout from './components/Logout'
import Login from './components/Login'
import useAuth from './hooks/useAuth'
import ProtectedRoute from './components/ProtectedLayout'
import EventsMain from './components/EventsComponents/EventsMain'
import QrCodeScanner from './components/QrCodeScanner/QrScannerLayout'
import DashboardNews from './components/DashboardComponents/DashboardNews'
import SalesMain from './components/SalesComponent/SalesMainDash'
import SalesAdsList from './components/SalesComponent/SalesAdsList'
import SalesMyAds from './components/SalesComponent/SalesMyAds'
import Quest from './components/Quests/Quest'
import Quest2 from './components/Quests/Quest2'

function App() {
	const user = useAuth().auth

	if (!user) {
		return <Login />
	}

	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="login" element={<Login />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route index element={<Dashboard />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="quest" element={<Quest />} />
				<Route path="questTwo" element={<Quest2 />} />
				<Route path="profile" element={<Profile />} />
				<Route path="logout" element={<Logout />} />
				<Route path="schedule" element={<Schedule />} />
				<Route path="events" element={<EventsMain />} />
				<Route path="qrscanner" element={<QrCodeScanner />} />
				<Route path='dashboard-news' element={<DashboardNews />} />

				<Route path="sales" element={<SalesMain />}>
					<Route path="list" element={<SalesAdsList/>} />
					<Route path="my" element={<SalesMyAds/>} />
				</Route>
			</Route>
		</Routes>
	)
}

export default App
