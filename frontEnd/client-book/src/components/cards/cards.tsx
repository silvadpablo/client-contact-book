import { useState } from "react";
import { CreateDialog, UpdateDialog } from "../dialogs/dialogs";
import { StyledClientCard, StyledContactCard } from "./styledCards";

export function ClientCard ( ) {
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false)

    function openUpdateDialog() {
        setUpdateDialogOpen(true)
    }

    return (
        <>
            {updateDialogOpen && <UpdateDialog updateDialogOpen={updateDialogOpen} setUpdateDialogOpen={setUpdateDialogOpen}/>}
            <StyledClientCard className="flex flex-col">
                <p>Pablo Diego Batista da Silva Clementino Alves Costa</p>
                <button onClick={openUpdateDialog}>Abrir</button>
            </StyledClientCard>
        </>
    )
}

export function ContactCard () {
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false)

    function openUpdateDialog() {
        setUpdateDialogOpen(true)
    }
    return (
        <StyledContactCard className="flex flex-col">
            {updateDialogOpen && <UpdateDialog updateDialogOpen={updateDialogOpen} setUpdateDialogOpen={setUpdateDialogOpen}/>}
            <p>Pablo Diego Batista da Silva Clementino Alves Costa</p>
            <p>essemeuemailébemgrande@gmail.com.br</p>
            <p>+5583999999999</p>
            <button onClick={openUpdateDialog}>Abrir</button>
        </StyledContactCard>
    )
}