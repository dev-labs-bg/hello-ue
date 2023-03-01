import React from 'react'
import { useState } from 'react'

const AuthContext = React.createContext(null)

const AuthProvider = ({ children }) => {
	const getAuth = () => {
		const authString = localStorage.getItem('auth')
		const userAuth = JSON.parse(authString)
		return userAuth
	}

	const saveAuth = (userAuth) => {
		localStorage.setItem('auth', JSON.stringify(userAuth))
		setAuth(userAuth)
	}

	const [auth, setAuth] = useState(getAuth())

	const removeAuth = () => {
		localStorage.removeItem('auth')
		setAuth(false)
	}

	return (
		<AuthContext.Provider
			value={{
				setAuth: saveAuth,
				removeAuth,
				auth,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthContext, AuthProvider }
