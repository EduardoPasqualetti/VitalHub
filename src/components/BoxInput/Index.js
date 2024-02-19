
import { FieldContent, InputLabel, InputText } from "./Style"



export const BoxInput =({
    fieldWidth = 100,
    textLabel,
    placeholder,
    fieldValue,
    fieldHeight = 60,
    fontSize = 16,
    editable = false,
    borderColor,
    backColor,
    color,
    font,
    placeholderColor
}) =>  {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            
            <InputLabel >{textLabel}</InputLabel>
            <InputText placeholder={placeholder} value={fieldValue} editable={editable} borderColor={borderColor} 
            fieldHeight={fieldHeight} backColor={backColor} color={color} font={font} fontSize={fontSize} placeholderColor={placeholderColor}/>
        
        </FieldContent>
    )
}