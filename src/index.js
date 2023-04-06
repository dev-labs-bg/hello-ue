import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { QuestProvider } from './context/QuestsContext'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<AuthProvider>
			<QuestProvider>
				<BrowserRouter>
					<Routes>
						<Route
							path="/*"
							element={
								<ChakraProvider>
									<App />
								</ChakraProvider>
							}
						/>
					</Routes>
				</BrowserRouter>
			</QuestProvider>
		</AuthProvider>
	</React.StrictMode>
)
