import { useState } from 'react'
import { ChakraProvider, Box, VStack, Input, Button } from '@chakra-ui/react'
import useAuth from '../useAuth'

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
        <ChakraProvider>
            <Box bg="purple" paddingY="12em">
                <form onSubmit={handleSubmit}>
                    <VStack bg="white" paddingY="5em" marginX="20em" className="form-wrap">
                        {hasError && <Box>{hasError}</Box>}
                        <Box>
                            <Input name="username" placeholder="Потребителско име" required onChange={handleChange} />
                        </Box>
                        <Box>
                            <Input name="password" placeholder="Парола" type="password" required onChange={handleChange} />
                        </Box>
                        <Button type="submit">Влез</Button>
                    </VStack>
                </form>
            </Box>
        </ChakraProvider>
    )
}

export default Login;
