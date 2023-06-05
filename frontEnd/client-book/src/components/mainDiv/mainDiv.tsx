import { useContext, useState } from "react";
import { ClientCard, ContactCard } from "../cards/cards";
import { StyledMainDiv } from "./styledMain";
import { CreateDialog } from "../dialogs/dialogs";
import { clientContext } from "../../contexts/clientContext";
import { iClient } from "../../types/types";

export function MainDiv () {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { clients } = useContext(clientContext)
    function openDialog() {
        setDialogOpen(true)
    }
    // console.log(clients)

    return (
        <>
            <StyledMainDiv className="flex">
                {dialogOpen && <CreateDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen}/>}
                <div>
                    <h2>Lista de clientes</h2>
                    <button className="button" onClick={openDialog}>Criar Novo</button>
                </div>
                <div className="div clientDiv flex wrap justify-around items-center">
                    {
                        clients ?
                        clients.map((client: iClient) => (
                            <ClientCard client={client} key={client.id}/>
                        ))
                        :
                        <h2>Seus clientes cadastrados aparecerão aqui</h2>
                    }
                    {/* <ClientCard/> */}
                </div>
                <div>
                    <h2>Contatos de clientes</h2>
                    <button className="button" onClick={openDialog}>Criar Novo</button>
                </div>
                <div className="div contactDiv flex flex-col justify-around items-center">
                    {/* <h2>Selecione um cliente para mostrar os contatos</h2> */}
                    <ContactCard/>
                </div>
            </StyledMainDiv>
        </>
    )
}