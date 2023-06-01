import { StyledInput, StyledLabel } from "./styledInput";

export function EmailInput () {
    return (
        <>
            <StyledLabel htmlFor="userEmail">Email</StyledLabel>
            <StyledInput type="text" id="userEmail" placeholder="Digite o email do usuário"/>
        </>
    )
}

export function PasswordInput () {
    return (
        <>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput type="password" id="password" placeholder="Digite a senha do usuário"/>
        </>
    )
}