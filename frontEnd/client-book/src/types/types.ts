import { UseFormRegisterReturn } from "react-hook-form"

export interface iUser {
    name: string
    email: string
    password: string
    id: string
}

export interface iLoginRequest {
    name?: string
    email: string
    password: string
}

export interface iLoginResponse {
    token: string
}

export interface iRegisterRequest {
    fullName: string
    email: string
    phone: string
}

export interface iUpdateRequest {
    fullName?: string
    email?: string
    phone?: string
}

export interface iCustomInput {
    label: string
    type: string
    placeholder: string
    register: UseFormRegisterReturn<string>
}