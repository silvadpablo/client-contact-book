import { LoginButton, RegisterButton } from "../buttons/buttons";
import { CustomInput } from "../inputs/inputs";
import { StyledForm } from "./styledForms";

export function LoginForm () {
    return (
        <StyledForm className="flex flex-col">
            <h1>Todos os seus contatos em um só lugar</h1>
            <CustomInput label="Email" type="text" placeholder="Digite o seu email"/>
            <CustomInput label="Senha" type="password" placeholder="Digite sua senha"/>
            <LoginButton/>
            <RegisterButton/>
        </StyledForm>
    )
}