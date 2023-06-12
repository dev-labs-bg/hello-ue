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
import Quiz from './components/Quests/Quiz'
import Quest1 from './components/Quests/Quest1'
import QuestsMenu from './components/Quests/QuestsMenu'
import CompletedQuest from './components/Quests/CompletedQuest'

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
				<Route path="profile" element={<Profile />} />
				<Route path="logout" element={<Logout />} />
				<Route path="schedule" element={<Schedule />} />
				<Route path="events" element={<EventsMain />} />
				<Route path="qr-scanner" element={<QrCodeScanner />} />
				<Route path="qr-scanner" element={<QrCodeScanner />} />
				<Route path="quests-menu" element={<QuestsMenu />} />
				<Route path="quest1" element={<Quest1 />} />
				<Route path="quest2" element={<Quest2 />} />
				<Route path="quiz" element={<Quiz />} />
				<Route path="successful-quest" element={<CompletedQuest />} />
				<Route path="dashboard-news" element={<DashboardNews />} />

				<Route path="sales" element={<SalesMain />}>
					<Route path="list" element={<SalesAdsList />} />
					<Route path="my" element={<SalesMyAds />} />
				</Route>
				<Route path="quests-menu" element={<QuestsMenu />} />
				<Route path="quest1" element={<Quest1 />} />
				<Route path="quest2" element={<Quest2 />} />
				<Route path="quiz" element={<Quiz />} />
				<Route path="successful-quest" element={<CompletedQuest />} />
			</Route>
		</Routes>
	)
}

export default App
