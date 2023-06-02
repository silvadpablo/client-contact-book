import { useState } from "react";
import { CreateDialog } from "../dialogs/dialogs";
import { StyledClientCard, StyledContactCard } from "./styledCards";

export function ClientCard ( ) {
    const [dialogOpen, setDialogOpen] = useState(false)
    function openDialog() {
        setDialogOpen(true)
    }

    return (
        <>
            {dialogOpen && <CreateDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>}
            <StyledClientCard className="flex flex-col">
                <p>Pablo Diego Batista da Silva Clementino Alves Costa</p>
                <button onClick={openDialog}>Abrir</button>
            </StyledClientCard>
        </>
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