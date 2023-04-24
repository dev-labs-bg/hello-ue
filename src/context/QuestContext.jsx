import React from 'react'
import { useState } from 'react'

const QuestContext = React.createContext(null)

const QuestProvider = ({ children }) => {
	const [currentQuest, setCurrentQuest] = useState(1)

	const updateQuest = (quest) => {
		localStorage.setItem('quest', JSON.stringify(quest))
		setCurrentQuest(currentQuest + 1)
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
