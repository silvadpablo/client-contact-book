import { StyledInput, StyledLabel } from "./styledInput";

interface inputProps {
    label: string
    type: string
    placeholder: string
}

export function CustomInput ( { label, type, placeholder }:inputProps ) {
    return (
        <>
            <StyledLabel htmlFor={label}>{label}</StyledLabel>
            <StyledInput type={type} id={label} placeholder={placeholder}/>
        </>
    )
}