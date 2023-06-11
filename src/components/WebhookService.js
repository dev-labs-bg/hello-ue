import React from 'react'
import { useState } from 'react'
import {
	Button,
	Alert,
	AlertIcon,
	AlertTitle,
	Center,
	Link,
	Box,
} from '@chakra-ui/react'
import useQuest from '../hooks/useQuest'
import { NavLink as RouterLink } from 'react-router-dom'

const WebhookService = (props) => {
	const [successfulPost, setSuccessfulPost] = useState(false)
	const updateQuest = useQuest().updateQuest
	const discordChannelLink =
		'https://discord.com/channels/1052677967496622182/1085559956935286896'
	const WebhookURL =
		'https://discord.com/api/webhooks/1085559987394322464/lrpVJYrvaA_ZBrJCtmVIN_xetza8pQVVZeUb1OHIS8HubCmKItanZQxFyJF-ZhUmer5k'

	const send = () => {
		let formData = props.formData
		if (
			formData['student-city'] &&
			formData['high-school'] &&
			formData['university-major'] &&
			formData['interests'] &&
			formData['fav-hobby']
		) {
			const content = {
				content: null,
				embeds: [
					{
						title: `Здравейте, аз съм ${formData['student-name']}`,
						description: `Роден/а съм в град ${formData['student-city']}. 
                        Завърших ${formData['high-school']}. 
                        В ИУ Варна съм записал/а специалност "${formData['university-major']}". 
                        Mоите интереси включват ${formData['interests']}. Моето любимо хоби е ${formData['fav-hobby']}!`,
						color: 2002185,
					},
				],
				attachments: [],
			}

			fetch(WebhookURL, {
				method: 'POST',
				body: JSON.stringify(content),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then(updateQuest(), setSuccessfulPost(true))
		}
	}
	return (
		<>
			{!successfulPost ? (
				<Box mt={5}>
					<Button
						p={6}
						bgColor="#44818B"
						color="white"
						borderRadius="lg"
						fontSize={{
							base: '0.5em',
							md: '0.5em',
							lg: '1em',
						}}
						fontWeight="bold"
						_hover={{ bgColor: '#2E6269' }}
						onClick={send}
					>
						Сподели
					</Button>
				</Box>
			) : (
				<Center>
					<Alert
						status="success"
						variant="subtle"
						flexDirection="column"
						alignItems="center"
						alignSelf="center"
						justifyContent="center"
						textAlign="center"
						height="auto"
						w={['90%', '90%', '90%', '90%']}
						mt={['10%', '8%', '5%', '3%']}
					>
						<AlertIcon boxSize="40px" mr={0} />
						<AlertTitle mt={4} mb={1} fontSize="m">
							Благодарим ти за споделената информация. Можеш да
							видиш своето резюме в{' '}
							<Link
								as={RouterLink}
								to={discordChannelLink}
								textDecoration="underline"
							>
								Discord
							</Link>{' '}
							канала ни.
						</AlertTitle>
					</Alert>
				</Center>
			)}
		</>
	)
}

export default WebhookService
