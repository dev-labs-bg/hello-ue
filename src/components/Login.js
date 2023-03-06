import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    useEffect(() => {
        localStorage.setItem("auth", `{"data":{"firstName":"Александър","lastName":"Желев","email":"aleks0zhelev@gmail.com","faculty_number":118169,"subject_name":"Информатика и компютърни науки"},"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2Nzc1MzM4ODgsImlzcyI6ImluZm8udWUtdmFybmEuYmciLCJuYmYiOjE2Nzc1MzM4ODgsImV4cCI6MTcwOTA2OTg4OCwic3R1ZGVudF9pZCI6IlZvbGVqUmVqTm0ifQ.ePjPnpoE7abuLYUfYDPflY7spAdO7CMrchOZwrkwhHs"}`)

    }, [])
    return (
        <>
            <h1><Link to="dashboard">Login</Link></h1>
        </>
    )
}

export default Login
