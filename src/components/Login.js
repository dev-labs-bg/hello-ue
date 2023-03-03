import { useState } from 'react'
import { Box, Stack, Input, Button, Heading, FormControl, Center, Link } from '@chakra-ui/react'
import useAuth from '../useAuth'
import HeaderLogin from './loginUI/HeaderLogin';

const Login = () => {
    const setAuth = useAuth().setAuth;
    const [formData, setFormdata] = useState({
        username: "",
        password: ""
    });

    const [hasError, setError] = useState(false);

    function handleChange(event){
        setFormdata(prevData => {
        const {name, value} = event.target 
            return {
                ...prevData,
                [name]: value
            }
        });
    }

    async function loginUser(credentials) {
        let response = null;
        try {
            let request = await fetch('https://info.ue-varna.bg/api/v1/login',
            {
                method: 'POST',
                body: JSON.stringify(credentials)
            });
            response = await request.json();
            if (!request.ok) {
                throw new Error(response ? response.error : request.statusText);
            }
        }
        catch (err) {
            setError(err.message);
        }
        if (response && !response.error) {
            delete response.success;
            setAuth(response);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        loginUser({
            faculty_number: formData.username,
            password: formData.password
        });
    }

    return (
        <>
            <HeaderLogin />
            <Box marginTop="5rem">
                <Center>
                   <Box marginBottom="3rem">
                       <Heading>
                           Вписване
                       </Heading>
                   </Box>
               </Center>
               <form onSubmit={handleSubmit} id="form_id">
                <Center>
                    {hasError ? <Box color="red">Грешни входни данни. Моля, опитайте отново.</Box>: ""}
                </Center>
                   <Stack spacing={2} margin="1rem" marginBottom="5rem">
                    <Center>
                        <Box>
                            <FormControl isRequired>
                                <Input
                                    id="name_id"
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
                                   id = "password_id"
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
                       <Link href='https://info.ue-varna.bg/forgotten-password' isExternal>
                           Забравена парола?
                       </Link>
                   </Box>
            </Center>
        </>
    )
}

export default Login;
