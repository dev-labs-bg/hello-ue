export function unlockQuest(quests, questId, setQuests) {
	const updatedQuests = quests.map((quest) => {
		if (quest.id === questId + 1) {
			return { ...quest, isUnlocked: true }
		} else {
			return quest
		}
	})
	setQuests(updatedQuests)
}
