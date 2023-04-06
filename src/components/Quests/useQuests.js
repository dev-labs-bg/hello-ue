import { QuestContext } from '../../context/QuestsContext'
import { useContext } from 'react'

export default function useQuests() {
	const context = useContext(QuestContext)

	return context
}
