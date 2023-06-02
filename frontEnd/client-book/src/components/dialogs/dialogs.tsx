import { CreateButton } from "../buttons/buttons";
import { CustomInput } from "../inputs/inputs";
import { StyledDialog } from "./styledDialogs";

interface dialogProps {
    dialogOpen: boolean
    setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateDialog ( { dialogOpen, setDialogOpen }: dialogProps ) {
    function closeDialog() {
        setDialogOpen(false)
    }
    return (
        <StyledDialog className="flex flex-col justify-center items-center">
                <form className="flex flex-col">
                    <div className="flex justify-between">
                        <h2>Cadastrar novo</h2>
                        <p onClick={closeDialog} className="close">X</p>
                    </div>
                    <div className="form flex flex-col">
                        <CustomInput label="Nome" type="text" placeholder="Digite um nome"/>
                        <CustomInput label="Email" type="text" placeholder="Digite um email"/>
                        <CustomInput label="Telefone" type="text" placeholder="Digite um telefone"/>
                        <CreateButton closeDialog={closeDialog}/>
                    </div>
                </form>
        </StyledDialog>
    )
}