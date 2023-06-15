import React, { useEffect } from 'react'
import { Flex, Tab, Tabs, TabList } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useProdavalnikAuth from '../../hooks/useProdavalnikAuth'

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

	const body = {
		width: 'full',
		minHeight: '100vh',
		display: 'flex',
		flexDir: 'column',
		bgGradient: [
			'linear(to-b,cyan.200, cyan.100)',
			'linear(to-t,blue.200,teal.500)',
			'linear(to-tr,cyan.300,green.100)',
		],
	}

	const tabsContainer = {
		display: 'flex',
		flexWrap: 'nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		marginBlock: '14px',
	}

	const buttons = {
		shadow: 'xl',
		border: 'none',
		textAlign: 'center',
		paddingInline: '2rem',
		fontSize: { sm: '14px', md: '16px', lg: '18px' },
	}

	return (
		<Flex sx={body}>
			<Tabs>
				<TabList sx={tabsContainer}>
					<Link to="/sales/list">
						<Tab sx={buttons}>Обяви</Tab>
					</Link>
					<Link to="/sales/">
						<Tab sx={buttons}>Съобщения</Tab>
					</Link>
					<Link to="/sales/my">
						<Tab sx={buttons}>Моите обяви</Tab>
					</Link>
				</TabList>
			</Tabs>
			<Outlet />
		</Flex>
	)
}

export default SalesMain
