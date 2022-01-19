import React, { useState, useEffect, createContext } from 'react'

export const Context = createContext(null)

const UserProvider = ({children}) => {
return (
    <Context.Provider value ={5}>
        {children}
    </Context.Provider>
)
}
export default UserProvider