import { Box, Heading, Flex, Button } from "@chakra-ui/react";


const DashboardMain = () => {
    const auth = JSON.parse(localStorage.getItem("auth"))

    return(
        <Box 
            pl={{lg: "4em"}}  
            pr={{lg: "4em"}}  
            bgColor="gray.100">
            <Heading p='0.5em 0' display={{base: "none",sm: "none", md: "none", lg: "flex"}}>
                Здравей, {auth.data.firstName}!
            </Heading>
            <Flex 
                backgroundImage="headerImg.jpg" 
                backgroundSize="cover" 
                w={{lg:"60vw"}}
                flexDir="column"
                justify="center"
                alignItems="center"
                borderRadius={{lg: "10px"}}
                pb='2em' pt="3em"
                boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
            >
                <Heading fontSize={{base: "3em",sm: "4em", md: "5em", lg:"6em"}} fontWeight="normal">Започни</Heading>
                <Heading fontSize={{base: "3em",sm: "4em", md: "5em", lg:"6em"}} fontWeight="normal">Куест</Heading>
                <Button id="begin-button" m="1em" fontSize="2em" bgColor='#FBB0A9' w='8em' h='3em'
                    borderBottomLeftRadius="20%"
                    borderTopRightRadius="20%"
                >Начало</Button>
            </Flex>
        </Box>
    )
}

export default DashboardMain