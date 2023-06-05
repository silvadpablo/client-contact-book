import { createContext, useContext, useEffect, useState } from "react";
import { iClient, iContextProps } from "../types/types";
import { api } from "../services/axios";
import { userContext } from "./userContext";

interface iClientContext {
    clients: iClient[]
    getClients: () => Promise<void>
}

export const clientContext = createContext({} as iClientContext)

export const ClientProvider = ( { children }: iContextProps) => {
    const { user } = useContext(userContext)
    const [clients, setClients] = useState<iClient[]>([])
    
    const token = localStorage.getItem("clientBookToken")
    const config = {
        headers: { Authorization: `Bearer ${token}`}
    }
    async function getClients () {
        const allClients = await api.get<iClient[]>(
            "client",
            config
        )
        setClients(allClients.data)
    }
    useEffect(() => {
        getClients()
        ghostRender()
    }, [user])

    async function ghostRender () {
        const allClients = await api.get<iClient[]>(
            "client",
            config
        )
        setClients(allClients.data)
    }

    return (
        <clientContext.Provider
            value={{
                clients,
                getClients
            }}
        >
            { children }
        </clientContext.Provider>
    )
}