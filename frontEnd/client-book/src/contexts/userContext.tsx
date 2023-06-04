import { createContext, useEffect, useState } from "react";
import { iLoginRequest, iLoginResponse, iUser } from "../types/types";
import { api } from "../services/axios";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

interface iContextProps {
    children: React.ReactNode
}
interface iLoginError {
    error: string
}

interface iUserContext {
    user: iUser | undefined
    setUser: React.Dispatch<React.SetStateAction<iUser | undefined>>
    token: string
    login: (data: iLoginRequest) => void
    logout: () => void
}

export const userContext = createContext({} as iUserContext)

export const UserProvider = ( { children }: iContextProps ) => {
    const [user, setUser] = useState<iUser>()
    const [token, setToken] = useState<string>("")
    const [loadingPage, setLoadingPage] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        async function load() {
            const token = localStorage.getItem("clientBookToken")
            const id = localStorage.getItem("clientBookId")

            if(token) {
                try {
                    api.defaults.headers.common.Authorization = `Bearer ${token}`
                    const response = await api.get(`users/${id}`)
                    setUser(response.data)
                } catch(error){
                    localStorage.removeItem("clientBookToken")
                }
            }
            setLoadingPage(false)
        }
        load()
    }, [])

    async function login (data: iLoginRequest): Promise<void> {
        try {
            const response = await api.post<iLoginResponse>("login/", data, {
                headers: { "Content-Type": "application/json"}
            })
            api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`
            console.log(response.data.token)
            toast.success("Login realizado com sucesso")

            // setUser(response.data.user)
            setToken(response.data.token)
            localStorage.setItem("clientBookToken", response.data.token)
            navigate("/main")
        } catch (error) {
            console.log(error)
            const typeError = error as AxiosError<any>
            if (typeError.response?.status === 401) {
                toast.error("Senha ou email incorretos")
            } else {
                toast.error(typeError.message)
            }
        }
    }

    async function logout () {
        setToken("")
        localStorage.removeItem("clientBookToken")
        toast.success("Logout realizado com sucesso")
        navigate("/")
    }

    return (
        <userContext.Provider
            value={{
                user,
                setUser,
                token,
                login,
                logout,
            }}
        >
            {children}
        </userContext.Provider>
    )
}