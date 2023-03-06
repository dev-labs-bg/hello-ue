import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <>
            {/* to be replaced with logic for if the user is logged in */}
            {false ? <></> : <Navbar />}
            <main className="App">
                <Outlet />
            </main>
        </>
    )
}

export default Layout
