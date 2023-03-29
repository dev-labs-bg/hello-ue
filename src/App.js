import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/DashboardComponents/Dashboard'
import Profile from './components/Profile'
import Logout from './components/Logout'
import Login from './components/Login'
import useAuth from './hooks/useAuth'
import ProtectedRoute from './components/ProtectedLayout'
import Quest1 from './components/Quest1Main'

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
				<Route path="quest1" element={<Quest1 />} />
				<Route path="profile" element={<Profile />} />
				<Route path="logout" element={<Logout />} />
			</Route>
		</Routes>
	)
}

export default App
