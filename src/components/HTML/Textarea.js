import { Textarea, FormControl, FormLabel, Flex } from '@chakra-ui/react'

export default function Element(props) {
	const handleChange = (event) => {
		if (props.onChange) {
			props.onChange(event.target.value)
		}
	}

	return (
		<FormControl isRequired>
			<Flex direction="column" align="center">
				<FormLabel>{props.label}</FormLabel>
				<Textarea
					id={props.id}
					name={props.name}
					value={props.value}
					placeholder={props.placeholder}
					required
					onChange={handleChange}
					bg="white"
					maxWidth="30rem"
					rows={props.rows}
				/>
			</Flex>
		</FormControl>
	)
}
