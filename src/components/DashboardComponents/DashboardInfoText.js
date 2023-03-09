import { Text} from "@chakra-ui/react"

const DashboardInfoText = ( { text } ) => {
    return (
        <Text
        fontSize="20px"
        maxW="210px"
        textAlign="center"
        color="#44818B"
        >{text}</Text>
    )
}

export default DashboardInfoText