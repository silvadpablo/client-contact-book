import { LoginButton, RegisterButton } from "../buttons/buttons";
import { EmailInput, PasswordInput } from "../inputs/inputs";
import { StyledForm } from "./styledForms";

export function LoginForm () {
    return (
        <StyledForm className="flex flex-col">
            <h1>Todos os seus contatos em um só lugar</h1>
            <EmailInput/>
            <PasswordInput/>
            <LoginButton/>
            <RegisterButton/>
        </StyledForm>
    )
}