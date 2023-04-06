import React from 'react'
import { useState } from 'react'

const QuestContext = React.createContext(null)

const DEFAULT_STATE = [
	{
		id: 1,
		name: 'quest1',
		isComplete: false,
		isUnlocked: true,
	},
	{ id: 2, name: 'quest2', isComplete: false, isUnlocked: false },
]

const QuestProvider = ({ children }) => {
	const getQuests = () => {
		const questString = localStorage.getItem('quests')
		const questMod = questString ? JSON.parse(questString) : DEFAULT_STATE

		return questMod
	}

	const [quests, setQuests] = useState(getQuests())

	const markQuestAsCompleted = (questId) => {
		// Step 1: define the next state
		const nextQuests = [...quests]

		// Step 2: map over the next state and update current quest (isComplete = true)
		nextQuests.map((quest) => {
			if (quest.id === questId) {
				quest.isComplete = true
			}

			// Step 3: map over the next state and update next quest (isUnlocked = true)
			// Note: if there is next quest!
		})

		// Step 4: update the state and local storage
		setQuests(nextQuests)
		localStorage.setItem('quests', JSON.stringify(nextQuests))
	}

	return (
		<QuestContext.Provider
			value={{
				markQuestAsCompleted,
				quests,
			}}
		>
			{children}
		</QuestContext.Provider>
	)
}

export { QuestContext, QuestProvider }
