import { useState } from "react";
import { ClientCard, ContactCard } from "../cards/cards";
import { StyledMainDiv } from "./styledMain";

export function MainDiv () {
    const [dialogOpen, setDialogOpen] = useState(false)

    function openDialog() {
        setDialogOpen(true)
    }
    return (
        <StyledMainDiv className="flex">
            <h2>Lista de clientes</h2>
            <div className="div clientDiv flex wrap justify-around items-center">
                {/* <h2>Seus clientes cadastrados aparecerão aqui</h2> */}
                <ClientCard/>
            </div>
            <h2>Contatos do cliente</h2>
            <div className="div contactDiv flex flex-col justify-around items-center">
                {/* <h2>Selecione um cliente para mostrar os contatos</h2> */}
                <ContactCard/>
            </div>
        </StyledMainDiv>
    )
}