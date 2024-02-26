
import { TextName } from "../CardClinic/Style"
import { Container, ImageDoctor, TextEspec, ViewData } from "./Style"

export const CardDoctor = ({name, espec, photo}) => {
    return(
        <Container>
            <ImageDoctor source={photo}/>
            <ViewData>
                <TextName>{name}</TextName>
                <TextEspec>{espec}</TextEspec>
            </ViewData>
        </Container>
    )
}