import { useNavigate } from "react-router-dom";
import { StyledButton, StyledGreenButton } from "./styledButtons";

export function LoginButton () {
    const navigate = useNavigate()
    function goToMain () {
        navigate("/main")
    }
    return (
        <StyledButton onClick={goToMain}>Login</StyledButton>
    )
}

export function RegisterButton () {
    return (
        <StyledGreenButton>Cadastre-se</StyledGreenButton>
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