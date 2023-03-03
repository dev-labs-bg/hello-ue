import { Box, Image, Heading, Flex } from '@chakra-ui/react';
import logo from './welcome-logo.png';


function HeaderLogin() {
    const font = { base: '24px', md: '34px'};
  return (
    <Box display="flex" alignItems="center" justifyContent="center" marginBottom="7rem" boxShadow='lg' bg="white" textAlign="center" height="6rem">
        <Flex justify="flex-start">
            <Image
                src={logo}
                alt="Logo"
                margin="1rem"
                boxSize="4rem"
                pos="fixed"
                left="0"
                top="0"
            />
        </Flex>
            <Heading display={{ base: "none", sm: "none", md: "none", lg: "flex" }}  >
                Наръчник на първокурсника
            </Heading>
            <Flex display={{sm: "flex", md: "flex", lg: "none"}} flexDir="column">
                <Heading fontSize={font}>
                    Наръчник на
                </Heading>
                <Heading fontSize={font}>
                    първокурсника
                </Heading>
            </Flex>
    </Box>
  )
}

export default HeaderLogin