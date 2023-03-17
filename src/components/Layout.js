import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import useAuth from '../hooks/useAuth'
import HeaderLogin from './loginUI/HeaderLogin'

const Layout = () => {
	const user = useAuth().auth
	return (
		<>
			{!user ? <HeaderLogin /> : <Navbar />}
			<main className="App">
				<Outlet />
			</main>
		</>
	)
}

export default Layout
