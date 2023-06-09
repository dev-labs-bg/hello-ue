import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useSchedule from '../hooks/useSchedule'

const Logout = () => {
	const removeAuth = useAuth().removeAuth
	const removeProfileData = useSchedule().removeProfileData
	const navigate = useNavigate()

	function handleLogout() {
		removeAuth()
		removeProfileData()
		navigate('/')
	}

	return (
		<>
			<Text onClick={handleLogout}>Logout</Text>
		</>
	)
}
export default Logout
