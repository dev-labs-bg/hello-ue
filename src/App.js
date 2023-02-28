import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Logout from './components/Logout'
import { AuthProvider } from './AuthContext';

function App() {
	// if(!auth) {
	//   return <Login setAuth={setAuth} />
	// }

	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Dashboard />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="logout" element={<Logout />} />
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App
