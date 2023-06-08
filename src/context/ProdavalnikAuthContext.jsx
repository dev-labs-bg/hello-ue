import React from 'react'
import { useState } from 'react'

const ProdavalnikAuthContext = React.createContext(null)

const ProdavalnikAuthProvider = ({ children }) => {
	const getAuth = () => {
		const authString = localStorage.getItem('prodavalnik-auth')
		const userAuth = JSON.parse(authString)
		return userAuth
	}

	const saveAuth = (userAuth) => {
		localStorage.setItem('prodavalnik-auth', JSON.stringify(userAuth))
		setAuth(userAuth)
	}

	const [prodavalnikAuth, setAuth] = useState(getAuth())

	const removeAuth = () => {
		localStorage.removeItem('prodavalnik-auth')
		setAuth(false)
	}

	return (
		<ProdavalnikAuthContext.Provider
			value={{
				setProdavalnikAuth: saveAuth,
				removeProdavalnikAuth: removeAuth,
				prodavalnikAuth,
			}}
		>
			{children}
		</ProdavalnikAuthContext.Provider>
	)
}

export { ProdavalnikAuthContext, ProdavalnikAuthProvider }
