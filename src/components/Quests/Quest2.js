import {
	VStack,
	Input,
	FormControl,
	FormLabel,
	Button, 
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { questStatus } from './GlobalQuest'


export default function SecondQuest() {
	const [formData, setFormData] = useState({
		city: '',
		school: '',
		specialty: '',
		interests: '',
		hobby: '',
	  })

	  const [formSubmitted, setFormSubmitted] = useState(false)

	  function handleSubmit(event) {
		event.preventDefault()
		localStorage.setItem('formValues', JSON.stringify(formData))
		console.log(formData)
		setFormSubmitted(true)
	  }
	
	  function handleChange(event) {
		const { name, value } = event.target
	
		setFormData((prevState) => ({
		  ...prevState,
		  [name]: value,
		}))

		console.log(formData)
	  }
	  

	return (
		<VStack
      as="form"
      onSubmit={handleSubmit}
      mx="auto"
      w={{ base: '90%', md: 580 }}
      h="700px"
      justifyContent="center"
    >
		
		  <FormControl isRequired>
			<FormLabel>От кой град си?</FormLabel>
			<Input
			  name="city"
			  type="text"
			  value={formData.city}
			  onChange={handleChange}
			  placeholder="Твоят отговор"
			  focusBorderColor="#818F73"
			  borderRadius="3px"
			></Input>
		  </FormControl>
		  <FormControl isRequired>
			<FormLabel>От коя гимназия идваш?</FormLabel>
			<Input
			  name="school"
			  type="text"
			  value={formData.school}
			  onChange={handleChange}
			  placeholder="Твоят отговор"
			  focusBorderColor="#818F73"
			  borderRadius="3px"
			></Input>
		  </FormControl>
		  <FormControl isRequired>
			<FormLabel>Коя специалност изучаваш?</FormLabel>
			<Input
			  name="specialty"
			  type="text"
			  value={formData.specialty}
			  onChange={handleChange}
			  placeholder="Твоят отговор"
			  focusBorderColor="#818F73"
			  borderRadius="3px"
			></Input>
		  </FormControl>
		  <FormControl isRequired>
			<FormLabel>Какви са твоите интереси?</FormLabel>
			<Input
			  name="interests"
			  type="text"
			  value={formData.interests}
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
				onClick={questStatus.quest2 === true}
			>
				Готово
			</Button>
			{formSubmitted ? (
			<Alert status="success" w="100%">
			  <AlertIcon />
			  <AlertTitle>Завършен куест!</AlertTitle>
			  <AlertDescription>
				Благодарим ти, че попълни въпросника!
			  </AlertDescription>
			</Alert>
		  ) : null}
		</VStack>
		
	)
}
