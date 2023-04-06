import React from 'react'
import { useState } from 'react'

const QuestContext = React.createContext(null)

const QuestProvider = ({ children }) => {
	const getQuest = () => {
		const questString = localStorage.getItem('quests')
		const questMod = JSON.parse(questString)
		return questMod
	}

	const saveQuest = (questMod) => {
		localStorage.setItem('quests', JSON.stringify(questMod))
		setQuest(questMod)
	}

	const [quest, setQuest] = useState(getQuest())

	// const removeQuest = () => {
	// 	localStorage.removeItem('quests')
	// 	setQuest(false)
	// }

	return (
		<QuestContext.Provider
			value={{
				setQuest: saveQuest,
				//removeQuest,
				quest,
			}}
		>
			{children}
		</QuestContext.Provider>
	)
}

export { QuestContext, QuestProvider }
