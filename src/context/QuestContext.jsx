import React from 'react'
import { useState } from 'react'

const QuestContext = React.createContext(null)

const QuestProvider = ({ children }) => {
	const initQuest = () => {
		if (localStorage.getItem('quest') === null) {
			localStorage.setItem('quest', JSON.stringify(1))
		}
		const questString = localStorage.getItem('quest')
		return parseInt(questString)
	}

	const [currentQuest, setCurrentQuest] = useState(initQuest())

	function updateQuest() {
		localStorage.setItem('quest', JSON.stringify(currentQuest + 1))
		setCurrentQuest((prevCount) => prevCount + 1)
	}

	return (
		<QuestContext.Provider
			value={{
				currentQuest,
				updateQuest,
			}}
		>
			{children}
		</QuestContext.Provider>
	)
}

export { QuestProvider, QuestContext }
