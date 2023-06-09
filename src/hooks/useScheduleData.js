import { useState, useEffect } from 'react'
import useSchedule from './useSchedule'
const ical2json = require('ical2json')

const useScheduleData = () => {
	const { profileData } = useSchedule()
	const [chartData, setChartData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null) // Add a new state for error handling

	useEffect(() => {
		let schedule_url = profileData.schedule_url
		let myToken = () => {
			const tokenString = localStorage.getItem('auth')
			const token = JSON.parse(tokenString)
			return { Authorization: `Bearer ${token}` }
		}

		let requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				...myToken(),
			},
			redirect: 'follow',
		}

		fetch(
			`https://cryptic-wildwood-52177.herokuapp.com/${schedule_url}?export=1683546697`,
			requestOptions
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error(response.statusText)
				}
				return response.text()
			})
			.then((result) => {
				const jsonData = ical2json.convert(result)
				setChartData(jsonData)
				setIsLoading(false)
				setError(null)
			})
			.catch((error) => {
				console.log('error', error)
				setChartData([])
				setIsLoading(false)
				setError(error.message)
			})
	}, [profileData])

	return { chartData, isLoading, error }
}

export default useScheduleData
