import { createContext } from 'react'

const Context = createContext({})

export const ContextProvider = ({ children }) => {
    return <Context.Provider value={'context'}>{children}</Context.Provider>
}

export default Context
