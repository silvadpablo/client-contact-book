import { StyledClientCard, StyledContactCard } from "./styledCards";

export function ClientCard () {
    return (
        <StyledClientCard className="flex flex-col">
            <p>Pablo Diego Batista da Silva Clementino Alves Costa</p>
        </StyledClientCard>
    )
}

export function ContactCard () {
    return (
        <StyledContactCard className="flex flex-col">
            <p>Pablo Diego Batista da Silva Clementino Alves Costa</p>
            <p>essemeuemailébemgrande@gmail.com.br</p>
            <p>+5583999999999</p>
        </StyledContactCard>
    )
}