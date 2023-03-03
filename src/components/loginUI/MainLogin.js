import { Box, Button, Heading, Stack, FormControl, Center, Link, Input } from '@chakra-ui/react'
 
 function MainLogin() {

   return (
        <>
            <Box marginTop="5rem">
               <Center>
                   <Box marginBottom="3rem">
                       <Heading>
                           Вписване
                       </Heading>
                   </Box>
               </Center>
               <form onSubmit={handleSubmit}>
                   <Stack spacing={2} margin="1rem" marginBottom="5rem">
                    <Center>
                        <Box>
                            <FormControl isRequired>
                                <Input
                                    name="username"
                                    placeholder="Потребителско име"
                                    required onChange={handleChange}
                                    bg="white" 
                                    maxWidth="30rem"/>
                            </FormControl>
                       </Box>
                    </Center>
                       <Center>
                        <Box>
                           <FormControl isRequired>
                               <Input
                                   name="password"
                                   type="password"
                                   placeholder="Парола"
                                   required onChange={handleChange}
                                   bg="white"
                                   marginTop="1rem"
                                   maxWidth="60rem" />
                           </FormControl>
                        </Box>
                       </Center>
                       <Center>
                           <Box>
                               <Button
                                   type="submit"
                                   width="100%"
                                   colorScheme="green"
                                   size="lg"
                                   marginTop="4rem"
                               >
                                   Влез
                               </Button>
                           </Box>
                       </Center>
                   </Stack>
               </form>
           </Box>
           <Center>
                   <Box marginBottom="5rem">
                       <Link href='https://info.ue-varna.bg/' isExternal>
                           Забравена парола?
                       </Link>
                   </Box>
            </Center>
        </>
    )
 }

export default MainLogin