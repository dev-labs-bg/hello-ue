import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProdavalnikAuthProvider } from './context/ProdavalnikAuthContext'
import { ScheduleProvider } from './context/ScheduleContext'

import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ScheduleProvider>
			<AuthProvider>
				<QuestProvider>
					<ProdavalnikAuthProvider>
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
					</ProdavalnikAuthProvider>
				</QuestProvider>
			</AuthProvider>
		</ScheduleProvider>
	</React.StrictMode>
)

