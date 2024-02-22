
import { FieldContent, InputLabel, InputText } from "./Style"



export const BoxInput =({
    fieldWidth = 100,
    textLabel,
    placeholder,
    fieldValue,
    fieldHeight = 60,
    editable = false,
    multiline = false
}) =>  {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            
            <InputLabel >{textLabel}</InputLabel>
            <InputText placeholder={placeholder} value={fieldValue} editable={editable}
            fieldHeight={fieldHeight} multiline={multiline} />
        
        </FieldContent>
    )
}