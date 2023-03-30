import {
	VStack,
	Input,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
export default function SecondQuest() {
	// const [inputValueGrad, setinputValueGrad] = useState('')
	// const [inputValueGimnazia, setinputValueGimnazia] = useState('')
	// const [inputValueSpecialnost, setinputValueSpecialnost] = useState('')
	// const [inputValueInteresi, setinputValueInteresi] = useState('')
	// const [inputValueHobby, setinputValueHobby] = useState('')

	// const [maxLength, setMaxLength] = useState(15)
	// const [inputValueGradError, setinputValueGradError] = useState('')
	// const [inputValueGimnaziaError, setinputValueGimnaziaError] = useState('')
	// const [inputValueInteresiError, setinputValueInteresiError] = useState('')
	// const [inputValueSpecialnostError, setinputValueSpecialnostError] =
	// 	useState('')
	// const [inputValueHobbyError, setinputValueHobbyError] = useState('')

	// const handleinputValueGrad = (event) => {
	// 	const input = event.target.value
	// 	if (input.length <= maxLength) {
	// 		setinputValueGrad(input)
	// 		setinputValueGradError('')
	// 	} else {
	// 		setinputValueGradError(`Maximum lenght is ${maxLength} characters`)
	// 	}
	// }

	// const handleinputValueGimnazia = (event) => {
	// 	const input = event.target.value
	// 	if (input.length <= maxLength) {
	// 		setinputValueGimnazia(input)
	// 		setinputValueGimnaziaError('')
	// 	} else {
	// 		setinputValueGimnaziaError(
	// 			`Maximum lenght is ${maxLength} characters`
	// 		)
	// 	}
	// }

	// const handleinputValueSpecialnost = (event) => {
	// 	const input = event.target.value
	// 	if (input.length <= maxLength) {
	// 		setinputValueSpecialnost(input)
	// 		setinputValueSpecialnostError('')
	// 	} else {
	// 		setinputValueSpecialnostError(
	// 			`Maximum lenght is ${maxLength} characters`
	// 		)
	// 	}
	// }

	// const handleinputValueInteresi = (event) => {
	// 	const input = event.target.value
	// 	if (input.length <= maxLength) {
	// 		setinputValueInteresi(input)
	// 		setinputValueInteresiError('')
	// 	} else {
	// 		setinputValueInteresiError(
	// 			`Maximum lenght is ${maxLength} characters`
	// 		)
	// 	}
	// }

	// const handleinputValueHobby = (event) => {
	// 	const input = event.target.value
	// 	if (input.length <= maxLength) {
	// 		setinputValueHobby(input)
	// 		setinputValueHobbyError('')
	// 	} else {
	// 		setinputValueHobbyError(`Maximum lenght is ${maxLength} characters`)
	// 	}
	// }

	// const handleSubmit = (event) => {
	// 	event.preventDefault()
	// 	console.log(inputValueGrad, inputValueGimnazia)
	// }

	const [formData, setFormData] = useState({
		grad: ' ',
		gimnazia: ' ',
		specialnost: ' ',
		interesi: ' ',
		hobby: ' ',
	})

	function handleChange(event) {
		const { name, value, type, checked } = event.target
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === 'checkbox' ? checked : value,
			}
		})
	}

	function handleSubmit(event) {
		event.preventDefault()
		// submitToApi(formData)
		console.log(formData)
	}

	return (
		<VStack
			as="form"
			mx="auto"
			w={{ base: '90%', md: 580 }}
			h="700px"
			justifyContent="center"
		>
			<FormControl isRequired>
				<FormLabel>От кой град си?</FormLabel>
				<Input
					name="grad"
					type="text"
					value={formData.grad}
					onChange={handleChange}
					placeholder="Твоят отговор"
					focusBorderColor="#818F73"
					borderRadius="3px"
				></Input>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>От коя гимназия идваш?</FormLabel>
				<Input
					name="gimnazia"
					type="text"
					value={formData.gimnazia}
					onChange={handleChange}
					placeholder="Твоят отговор"
					focusBorderColor="#818F73"
					borderRadius="3px"
				></Input>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Коя специалност изучаваш?</FormLabel>
				<Input
					name="specialnost"
					type="text"
					value={formData.specialnost}
					onChange={handleChange}
					placeholder="Твоят отговор"
					focusBorderColor="#818F73"
					borderRadius="3px"
				></Input>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Какви са твоите интереси?</FormLabel>
				<Input
					name="interesi"
					type="text"
					value={formData.interesi}
					onChange={handleChange}
					placeholder="Твоят отговор"
					focusBorderColor="#818F73"
					borderRadius="3px"
				></Input>
			</FormControl>
			<FormControl isRequired>
				<FormLabel>Любимо хоби?</FormLabel>
				<Input
					name="hobby"
					type="text"
					value={formData.hobby}
					onChange={handleChange}
					placeholder="Твоят отговор"
					errorBorderColor="#008140"
					focusBorderColor="#818F73"
					borderRadius="3px"
				></Input>
			</FormControl>
			<Button
				type="submit"
				size="md"
				height="48px"
				width="200px"
				colorScheme="green"
				variant="solid"
				onClick={handleSubmit}
			>
				Готово
			</Button>
		</VStack>
	)
}
