import { Select, FormControl, FormLabel, Flex } from '@chakra-ui/react'

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
				<Select
					id={props.id}
					name={props.name}
					value={props.value}
					placeholder={props.placeholder}
					required
					onChange={handleChange}
					bg="white"
					maxWidth="30rem"
				>
					{props.options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Select>
			</Flex>
		</FormControl>
	)
}
