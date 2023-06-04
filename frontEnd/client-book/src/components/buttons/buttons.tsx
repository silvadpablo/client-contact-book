import { useNavigate } from "react-router-dom";
import { StyledButton, StyledGreenButton, StyledRedButton } from "./styledButtons";

interface buttonProps {
    closeDialog?(): void
}

export function LoginButton () {
    return (
        <StyledButton>Login</StyledButton>
    )
}

export function RegisterButton () {
    return (
        <StyledGreenButton>Cadastre-se</StyledGreenButton>
    )
}

export function CreateButton ( { closeDialog }:buttonProps ) {
    return (
        <StyledGreenButton onClick={closeDialog}>Cadastrar</StyledGreenButton>
    )
}

export function UpdateButton ( { closeDialog }:buttonProps ) {
    return (
        <StyledGreenButton onClick={closeDialog}>Atualizar</StyledGreenButton>
    )
}

export function DeleteButton ( { closeDialog }:buttonProps ) {
    return (
        <StyledRedButton onClick={closeDialog}>Excluir</StyledRedButton>
    )
}

export function LogoutButton () {
    const navigate = useNavigate()
    function logout () {
        navigate("/")
    }
    return (
        <StyledGreenButton onClick={logout}>Sair</StyledGreenButton>
    )
}