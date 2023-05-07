import React from 'react'
import { useState } from 'react'

const ScheduleContext = React.createContext(null)

const ScheduleProvider = ({ children }) => {
	const getProfileData = async (token) => {
		try {
			const response = await fetch(
				`https://info.ue-varna.bg/api/v1/profile?token=${token}`
			)
			if (!response.ok) {
				throw new Error(response.statusText)
			}
			const data = await response.json()
			return data
		} catch (err) {
			console.log(err.message)
		}
	}

	const getSavedProfileData = () => {
		const profileDataString = localStorage.getItem('profileData')
		const profileData = JSON.parse(profileDataString)
		return profileData
	}

	const saveProfileData = (profileData) => {
		localStorage.setItem('profileData', JSON.stringify(profileData))
		setProfileData(profileData)
	}

	const [profileData, setProfileData] = useState(getSavedProfileData())

	const removeProfileData = () => {
		localStorage.removeItem('profileData')
		setProfileData(null)
	}

	return (
		<ScheduleContext.Provider
			value={{
				getProfileData,
				getSavedProfileData,
				saveProfileData,
				removeProfileData,
				profileData,
			}}
		>
			{children}
		</ScheduleContext.Provider>
	)
}

export { ScheduleContext, ScheduleProvider }
