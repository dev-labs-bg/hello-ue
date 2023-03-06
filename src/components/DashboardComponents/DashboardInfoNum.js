import { Box, Flex} from "@chakra-ui/react"

const DashboardInfoNum = ( { num } ) => {
    return (
        <Flex
        w="100px"
        h="100px"
        fontSize="25px"
        fontWeight="bold"
        borderRadius="50%"
        border="4px solid #44818B"
        color="#44818B"
        textAlign="center"
        justify="center"
        alignItems="center"
        >
            <Box>
                {num}
            </Box>
        </Flex>
    )
}

export default DashboardInfoNum