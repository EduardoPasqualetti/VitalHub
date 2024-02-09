import { InputText } from "./Style"

export const InputForBox = ({editable, placeholder, fieldValue}) => {
    return(
        <InputText editable={editable} placeholder={placeholder} value={fieldValue} />
    )
}