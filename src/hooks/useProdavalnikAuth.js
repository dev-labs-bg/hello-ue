import { ProdavalnikAuthContext } from '../context/ProdavalnikAuthContext'
import { useContext } from 'react'

export default function useAuth() {
	const context = useContext(ProdavalnikAuthContext)

	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider')
	}

	return context
}
