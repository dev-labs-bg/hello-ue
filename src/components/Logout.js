import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Logout = () => {
	const removeAuth = useAuth().removeAuth
	const navigate = useNavigate()

	function handleLogout() {
		removeAuth()
		navigate('/')
	}

	return (
		<>
			<Button onClick={handleLogout}>Logout</Button>
		</>
	)
}

export default Logout
