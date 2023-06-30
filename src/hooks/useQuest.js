import { QuestContext } from '../context/QuestContext'
import { useContext } from 'react'

export default function UseQuest() {
	const context = useContext(QuestContext)

	return context
}
