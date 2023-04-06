// export function completeQuest(quests, questId, currentLevel, setQuests) {
// 	const updatedQuests = quests.map((quest) => {
// 		if (quest.id === questId) {
// 			return {
// 				...quest,
// 				isComplete: true,
// 			}
// 		} else if (quest.id === questId + 1) {
// 			return { ...quest, isUnlocked: true }
// 		} else {
// 			return quest
// 		}
// 	})
// 	setQuests(updatedQuests)
// 	localStorage.setItem('currentQuest', questId + 1)
// 	localStorage.setItem('currentLevel', currentLevel)
// }

export function completeQuest(questId) {
	const listStorageString = localStorage.getItem('quests')
	const listStorage = JSON.parse(listStorageString)

	listStorage[questId - 1].isComplete = true
	listStorage[questId].isUnlocked = true

	localStorage.setItem('quests', JSON.stringify(listStorage))
	// const questOne = listStorage.find(item => item.id === "1")
	// const questTwo = listStorage.find(item => item.id === "2")

	// const dict = listStorage[questId-1]
	// const [myDictionary, setMyDictionary] = useState({
	// 	key1: false,
	// 	key2: false,
	// 	key3: false
	//   });

	// localStorage.setItem(`quests`, JSON.stringify(listStorage))
}
