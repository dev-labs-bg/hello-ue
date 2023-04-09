import { QuestContext } from '../context/QuestsContext'
import { useContext } from 'react'

export default function UseQuests() {
	const context = useContext(QuestContext)

	return context
}
