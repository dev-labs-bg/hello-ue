import {Link} from 'react-router-dom'

const Logout = ({removeAuth}) => {
    return (
        <>
            <button onClick={removeAuth}>Logout</button>
            <Link to="../">Logout</Link>
        </>
    )
}

export default Logout
