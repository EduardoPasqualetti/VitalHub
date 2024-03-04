
import { FieldContent, InputLabel, InputText } from "./Style"



export const BoxInput =({
    fieldWidth = 100,
    textLabel,
    placeholder,
    fieldValue,
    fieldHeight = 60,
    editable = false,
    multiline = false,
    marginBottom = 40
}) =>  {
    return(
        <FieldContent fieldWidth={fieldWidth} marginBottom={marginBottom}>
            
            <InputLabel >{textLabel}</InputLabel>
            <InputText placeholder={placeholder} value={fieldValue} editable={editable}
            fieldHeight={fieldHeight} multiline={multiline} />
        
        </FieldContent>
    )
}