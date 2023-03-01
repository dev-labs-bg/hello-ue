import { Button } from '@chakra-ui/react'
import useAuth from '../useAuth'

const Logout = () => {
    const removeAuth = useAuth().removeAuth;
    
    return (
        <>
            <h1>Logout</h1>
            <Button onClick={removeAuth}>Logout</Button>
        </>
    )
}

export default Logout
