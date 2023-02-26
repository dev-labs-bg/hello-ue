import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Logout from './components/Logout'
import useAuth from './useAuth'

function App() {
	const {auth, setAuth, removeAuth} = useAuth();
	
	if(!auth) {
	  return <Login setAuth={setAuth} />
	}

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Dashboard />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="profile" element={<Profile />} />
				<Route path="logout" element={<Logout removeAuth={removeAuth} />} />
			</Route>
		</Routes>
	)
}

export default App
