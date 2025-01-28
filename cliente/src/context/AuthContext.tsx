import { createContext, useState, ReactNode} from 'react'

// Definimos el tipo del usuario

type User = {
    id: string
    name: string
    email: string
}

// Acá definimos el tipo del contexto
type AuthContextType = {
    user: User | null
    login: (userData: User) => void
    logout: () => void
}

// 1.Creamos el contexto con un valor por defecto para evitar errores

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

// 2.Creamos el provider del contexto

export function AuthProvider({children} : {children: ReactNode}){
    const [user, setUser] = useState<User | null>(null)

    // Creamos la función para Iniciar Sesión

    const login = (userData: User) => {
        setUser(userData)
        localStorage.setItem('Usuario', JSON.stringify(userData))
    }

    // Creamos la función para cerrar la sesión

    const logout = () => {
        setUser(null)
        localStorage.removeItem('Usuario')
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}