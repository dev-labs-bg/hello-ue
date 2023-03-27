import { Icon } from '@chakra-ui/react'
import { ReactComponent as CurrentQuest } from '../Quests/icons/current.svg'
import { ReactComponent as DoneQuest } from '../Quests/icons/done.svg'
import { ReactComponent as LockedQuest } from '../Quests/icons/locked.svg'

export const IconCurrent = () => {
	return <Icon as={CurrentQuest} boxSize="100px" />
}

export const IconDone = () => {
	return <Icon as={DoneQuest} boxSize="100px" />
}

export const IconLocked = () => {
	return <Icon as={LockedQuest} boxSize="100px" />
}
