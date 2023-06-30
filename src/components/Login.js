import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import useSchedule from '../hooks/useSchedule'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Components/HTML/Input'
import logo from '../logo.png'

const Login = () => {
	const setAuth = useAuth().setAuth
	const getProfileData = useSchedule().getProfileData
	const setProfileData = useSchedule().setProfileData
	const navigate = useNavigate()
	const [formData, setFormData] = useState({
		facultyNumber: '',
		password: '',
	})

	const [hasError, setError] = useState(false)

	async function loginUser(credentials) {
		let response = null

		if (formData.facultyNumber.trim() === '') {
			setError('Моля, въведете факултетен номер')
			return
		} else if (!Number(formData.facultyNumber)) {
			setError('Факултетния номер трябва да съдържа само цифри')
			return
		} else if (formData.password.trim() === '') {
			setError('Моля, въведете парола')
			return
		}

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
			setError(err.message)
		}
		if (response && !response.error) {
			delete response.success
			setAuth(response)
			let data = await getProfileData(response.token)
			setProfileData(data)
			navigate('/')
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		loginUser({
			faculty_number: formData.facultyNumber,
			password: formData.password,
		})
	}

	const handleInputChange = (name, value) => {
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	return (
		<>
			<section className="bg-[#edf2f7]">
				<div className="flex flex-col items-center justify-center px-2 md:px-6 py-8 mx-auto md:h-screen lg:py-0">
					<img
						src={logo}
						alt="App Logo"
						className="h-20 w-20 object-cover mb-1"
					/>

					<div className="flex items-center mb-6 text-2xl font-semibold text-gray-700 italic">
						Hello UE
					</div>

					<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							{hasError && (
								<div className="p-4 text-sm text-red-800 rounded-lg bg-red-50">
									{hasError}
								</div>
							)}

							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-700 md:text-2xl">
								Вписване
							</h1>

							<div>
								<Input
									id="faculty-number"
									for="faculty-number"
									label="Факултетен номер"
									type="text"
									placeholder="Факултетен номер"
									value={formData.facultyNumber}
									onChange={(value) =>
										handleInputChange(
											'facultyNumber',
											value
										)
									}
								/>
							</div>

							<div>
								<Input
									id="password"
									for="password"
									label="Парола"
									type="password"
									placeholder="•••••••••••"
									value={formData.password}
									onChange={(value) =>
										handleInputChange('password', value)
									}
								/>
							</div>

							<div className="flex items-center justify-between">
								<Link
									className="text-sm font-medium text-primary-600 hover:underline"
									to="https://info.ue-varna.bg/forgotten-password"
									target="_blank"
								>
									Забравена парола?
								</Link>
							</div>

							<button
								onClick={handleSubmit}
								className="w-full text-white bg-blue-500 bg-primary-600 hover:opacity-80 active:scale-95 transition focus:outline-none font-semibold text-sm rounded-lg px-5 py-2.5 text-center"
							>
								Вход
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Login
