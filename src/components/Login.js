import { useState } from 'react'
import {
	Box,
	VStack,
	Input,
	Button,
	Alert,
	AlertIcon,
	AlertTitle,
	Center,
} from '@chakra-ui/react'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const setAuth = useAuth().setAuth
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
		let isFacultyNumberInvalid = isNaN(Number(value)) || value.length < 4
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
			<Box bg="purple" paddingY="12em">
				<form onSubmit={handleSubmit}>
					<VStack
						bg="white"
						paddingY="5em"
						marginX="20em"
						className="form-wrap"
					>
						{isInvalid && (
							<Center>
								<Alert status="error">
									<AlertIcon />
									<AlertTitle>{hasError}</AlertTitle>
								</Alert>
							</Center>
						)}
						<Box>
							<Input
								name="facultyNumber"
								placeholder="Факултетен номер"
								required
								onChange={validateFacultyNumber}
								isInvalid={isInvalid}
								errorBorderColor="red.300"
							/>
						</Box>
						<Box>
							<Input
								name="password"
								placeholder="Парола"
								type="password"
								required
								onChange={handleChange}
							/>
						</Box>
						<Button isDisabled={isInvalid} type="submit">
							Влез
						</Button>
					</VStack>
				</form>
			</Box>
	)
}

export default Login
