import {
	Box,
	Text,
	Heading,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Flex,
	Button,
	Link,
} from '@chakra-ui/react'
import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const EventsListItem = ({ event }) => {
	let link = 'https://www.ue-varna.bg/bg/'.concat(event.url)

	return (
		<AccordionItem
			style={{
				borderRadius: '10px',
				borderWidth: '1px',
				boxSizing: 'border-box',
				padding: '5px',
				background: 'white',
				marginTop: '5px',
			}}
		>
			<h2>
				<AccordionButton>
					<Flex align="center" as="span" flex="1" textAlign="left">
						<CheckCircleIcon marginEnd="10px" color="#2CB930" />
						<Box>
							<Heading
								w={{
									base: '17em',
									sm: '20em',
									md: '24em',
									lg: '30em',
									xl: '35em',
									'2xl': '40em',
								}}
								style={{
									fontSize: '1em',
									fontStyle: 'normal',
									fontWeight: 'normal',
								}}
							>
								{event.title}
							</Heading>
							<Text
								style={{
									fontSize: '0.8em',
									color: '#A1A1A1',
									fontWidth: 'normal',
								}}
							>
								{event.event_date_from}
							</Text>
						</Box>
					</Flex>

					<AccordionIcon />
				</AccordionButton>
			</h2>
			<AccordionPanel pb={4}>
				<Flex
					direction={'column'}
					style={{
						background: '#e3ffea',
						padding: '20px',
						borderRadius: '15px',
					}}
				>
					<Text
						style={{
							fontSize: '0.8em',
							color: '#A1A1A1',
							fontWidth: 'normal',
						}}
					>
						Добавено: {event.added}
					</Text>
					<Text
						style={{
							fontSize: '0.8em',
							color: '#A1A1A1',
							fontWidth: 'normal',
						}}
					>
						Начало: {event.event_date_from} {event.event_hour_from}
					</Text>
					<Text
						style={{
							fontSize: '0.8em',
							color: '#A1A1A1',
							fontWidth: 'normal',
						}}
					>
						Край: {event.event_date_to} {event.event_hour_to}
					</Text>

					<Box>
						<Button
							style={{
								marginTop: '10px',
								background: '#2CB930',
							}}
						>
							<Link href={link} isExternal color="white">
								Виж повече <ExternalLinkIcon mx="2px" />
							</Link>
						</Button>
					</Box>
				</Flex>
			</AccordionPanel>
		</AccordionItem>
	)
}

export default EventsListItem
