import {
	Box,
	Stack,
	Input,
	Button,
	Heading,
	FormControl,
	Center,
	Link,
	Alert,
	AlertIcon,
	AlertTitle,
	FormLabel,
} from '@chakra-ui/react'

import HeaderLogin from './loginUI/HeaderLogin'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import useSchedule from '../hooks/useSchedule'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const setAuth = useAuth().setAuth
	const getProfileData = useSchedule().getProfileData
	const setProfileData = useSchedule().setProfileData
	const navigate = useNavigate()
	const [formData, setFormdata] = useState({
		facultyNumber: '',
		password: '',
	})

	const [hasError, setError] = useState(false)
	const [isInvalid, setIsInvalid] = useState(false)

	function handleChange(event) {
		setFormdata((prevData) => {
			const { name, value } = event.target
			return {
				...prevData,
				[name]: value,
			}
		})
	}

	function validateFacultyNumber(evt) {
		let value = evt.target.value
		let isFacultyNumberInvalid = isNaN(Number(value))
		setIsInvalid(isFacultyNumberInvalid)
		setError('Невалиден факултетен номер.')
		if (!isFacultyNumberInvalid) {
			handleChange(evt)
		}
	}

	async function loginUser(credentials) {
		let response = null
		try {
			let request = await fetch('https://info.ue-varna.bg/api/v1/login', {
				method: 'POST',
				body: JSON.stringify(credentials),
			})
			response = await request.json()
			if (!request.ok) {
				throw new Error(response ? response.error : request.statusText)
			}
		} catch (err) {
			setIsInvalid(true)
			setError(err.message)
		}
		if (response && !response.error) {
			delete response.success
			setAuth(response)
			let data = await getProfileData(response.token)
			setProfileData(data)
			navigate('/dashboard')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		loginUser({
			faculty_number: formData.facultyNumber,
			password: formData.password,
		})
	}

	return (
		<>
			<HeaderLogin />
			<Box marginTop="5rem">
				<Center>
					<Box marginBottom="3rem">
						<Heading>Вписване</Heading>
					</Box>
				</Center>
				<form onSubmit={handleSubmit} id="form_id">
					<Center>
						{isInvalid && (
							<Center>
								<Alert status="error">
									<AlertIcon />
									<AlertTitle>{hasError}</AlertTitle>
								</Alert>
							</Center>
						)}
					</Center>
					<Stack spacing={2} margin="1rem" marginBottom="5rem">
						<Center>
							<Box>
								<Center>
									<FormLabel>Факултетен номер</FormLabel>
								</Center>
								<FormControl isRequired>
									<Input
										id="id_facultyNUmber"
										name="facultyNumber"
										placeholder="91234"
										required
										onChange={validateFacultyNumber}
										bg="white"
										maxWidth="30rem"
									/>
								</FormControl>
							</Box>
						</Center>
						<Center>
							<Box marginTop="1rem">
								<Center>
									<FormLabel>Парола</FormLabel>
								</Center>
								<FormControl isRequired>
									<Input
										id="id_password"
										name="password"
										placeholder="*****"
										type="password"
										required
										onChange={handleChange}
										bg="white"
										maxWidth="60rem"
									/>
								</FormControl>
							</Box>
						</Center>
						<Center>
							<Box>
								<Button
									type="submit"
									width="100%"
									colorScheme="green"
									size="lg"
									marginTop="4rem"
								>
									Влез
								</Button>
							</Box>
						</Center>
					</Stack>
				</form>
			</Box>
			<Center>
				<Box marginBottom="5rem">
					<Link
						href="https://info.ue-varna.bg/forgotten-password"
						isExternal
					>
						Забравена парола?
					</Link>
				</Box>
			</Center>
		</>
	)
}

export default Login
