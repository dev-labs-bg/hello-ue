import React from 'react'
import { useState } from 'react'
import { Button, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

const WebhookService = () => {
	const [feedbackMessage, setFeedbackMessage] = useState('')
	const WebhookURL =
		'https://discord.com/api/webhooks/1085559987394322464/lrpVJYrvaA_ZBrJCtmVIN_xetza8pQVVZeUb1OHIS8HubCmKItanZQxFyJF-ZhUmer5k'

	//This data should be passed as a property
	const formData = {
		'student-name': 'Aна Черкасова',
		'student-city': 'Варна',
		'high-school':
			'Трета природоматематическа гимназия "Акад. Методий Попов"',
		'university-major': 'Информатика и компютърни науки',
		interests:
			'програмиране, рисуване, четене на класическа литература, спорт',
		'fav-hobby': 'каране на ролери в парка',
	}
	const send = () => {
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
						color: '#3ba327',
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
			}).then(
				setFeedbackMessage(
					'Благодарим ти за споделената информация. Можеш да видиш своето резюме в Discord канала ни.'
				)
			)
		}
	}
	return (
		<>
			{!feedbackMessage ? (
				<Button onClick={send}>Готово</Button>
			) : (
				<Alert
					status="success"
					variant="subtle"
					flexDirection="column"
					alignItems="center"
					alignSelf="center"
					justifyContent="center"
					textAlign="center"
					height="200px"
					w={['90%', '50%', '45%', '30%']}
					mt={['10%', '8%', '5%', '3%']}
				>
					<AlertIcon boxSize="40px" mr={0} />
					<AlertTitle mt={4} mb={1} fontSize="m">
						{feedbackMessage}
					</AlertTitle>
				</Alert>
			)}
		</>
	)
}

export default WebhookService
