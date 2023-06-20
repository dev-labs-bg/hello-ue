import React, { useEffect } from 'react'

import { Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'
import Tabs from '../Components/Tabs'

const SalesMain = () => {
	const { auth } = useAuth()
	const { setProdavalnikAuth, prodavalnikAuth } = useProdavalnikAuth()

	useEffect(() => {
		async function userPayload() {
			try {
				const payload = {
					fn: parseInt(auth.data.faculty_number),
					name: auth.data.firstName + ' ' + auth.data.lastName,
					email: auth.data.email,
				}

				const response = await fetch(
					'https://prodavalnik-api.devlabs-projects.info/auth',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(payload),
					}
				)

				if (response.ok) {
					const result = await response.json()
					setProdavalnikAuth(result.user)
				} else {
					throw new Error('Неуспешно свързване')
				}
			} catch (error) {
				console.error('Възникна грешка при изпращане на заявка:', error)
			}
		}

		if (!prodavalnikAuth && auth) {
			userPayload()
		}
	}, [auth, prodavalnikAuth, setProdavalnikAuth])

	const tabs = [
		{
			text: 'Обяви',
			path: '/sales/list',
		},
		{
			text: 'Съобщения',
			path: '/sales/',
		},
		{
			text: 'Моите обяви',
			path: '/sales/my',
		},
	]

	return (
		<div className="min-w-min min-h-screen bg-[#edf2f7]">
			<div className="bg-white min-h-screen md:h-full rounded-lg border border-slate-100 mx-auto my-6 px-5 pt-5 pb-24 w-full sm:w-fit lg:w-[65rem]">
				<Tabs tabs={tabs} />
				<Outlet />
			</div>
		</div>
	)
}

export default SalesMain
