import { Button } from '@chakra-ui/react'

const Logout = ({removeAuth}) => {
    return (
        <>
            <h1>Logout</h1>
            <Button onClick={removeAuth}>Logout</Button>
        </>
    )
}

export default Logout
