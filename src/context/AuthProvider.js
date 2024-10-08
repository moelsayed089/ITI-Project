import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = localStorage.getItem('user')   

        if (user) {
            setUser(JSON.parse(user))
        }   

    }, [])

    return (    
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}