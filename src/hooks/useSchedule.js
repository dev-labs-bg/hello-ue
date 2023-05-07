import { ScheduleContext } from '../context/ScheduleContext'
import { useContext } from 'react'

export default function useSchedule() {
	const context = useContext(ScheduleContext)

	if (!context) {
		throw new Error('useSchedule must be used within an ScheduleProvider')
	}

	return context
}
