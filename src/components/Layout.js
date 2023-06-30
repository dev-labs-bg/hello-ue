import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import useAuth from '../hooks/useAuth'
import Login from './Login'

const Layout = () => {
	const user = useAuth().auth
	return (
		<>
			{!user ? <Login /> : <Navbar />}
			<main className="App">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
