import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Layout from './Layout'

export default function ProtectedRoute() {
	const user = useAuth().auth
	if (!user) {
		// user is not authenticated
		return <Navigate to="/login" />
	}
	return <Layout />
}
