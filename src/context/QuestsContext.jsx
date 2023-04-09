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
		localStorage.setItem('quests', JSON.stringify(questMod))

		return questMod
	}

	const getQuestCounter = () => {
		const questString = localStorage.getItem('quest_number')
		const questMod = questString ? JSON.parse(questString) : 1

		localStorage.setItem('quest_number', JSON.stringify(questMod))

		return questMod
	}

	const [quests, setQuests] = useState(getQuests())
	const [questCounter, updateQuestCounter] = useState(getQuestCounter())

	function markQuestAsCompleted() {
		// Step 1: define the next state
		const nextQuests = [...quests]
		const questId = questCounter

		let check_next_quest = false

		// Step 2: map over the next state and update current quest (isComplete = true)
		nextQuests.map((quest) => {
			if (quest.id === questId) {
				quest.isComplete = true
				check_next_quest = true
			}
			return quest
		})

		// Step 3: map over the next state and update next quest (isUnlocked = true)
		// Note: if there is next quest!
		if (check_next_quest) {
			nextQuests.map((quest) => {
				if (quest.id === questId + 1) {
					quest.isUnlocked = true
				}
				return quest
			})
		}

		// Step 4: update the state and local storage
		setQuests(nextQuests)

		if (check_next_quest) {
			updateQuestCounter(questCounter + 1)
		} else {
			updateQuestCounter(questCounter)
		}

		localStorage.setItem('quests', JSON.stringify(nextQuests))
		localStorage.setItem('quest_number', JSON.stringify(questCounter))
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
