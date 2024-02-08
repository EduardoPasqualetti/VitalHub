import { InputForBox } from "../InputForBox/Index"
import { LabelBox } from "../LabelBox/Index"
import { FieldContent } from "./Style"



export const BoxInput =({
    fieldWidth = 100,
    textLabel,
    placeholder,
    fiedlValue,
    editable = false
}) =>  {
    return(
        <FieldContent fieldWidth={fieldWidth}>
            
            <LabelBox textLabel={textLabel}/>
            <InputForBox placeholder={placeholder} fiedlValue={fiedlValue} editable={editable}/>
        
        </FieldContent>
    )
}