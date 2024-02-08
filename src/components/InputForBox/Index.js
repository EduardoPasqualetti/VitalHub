import { InputText } from "./Style"

export const InputForBox = ({editable, placeholder, fiedlValue}) => {
    return(
        <InputText editable={editable} placeholder={placeholder} value={fiedlValue} />
    )
}